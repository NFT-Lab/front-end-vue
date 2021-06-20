<template>
  <v-container>
    <v-layout fill-height>
      <v-row id="login-container" class="pa-1" dense>
        <v-col
          class="fill-height d-flex flex-column justify-center align-center"
        >
          <v-alert
            v-model="alert"
            color="red"
            dense
            dismissible
            elevation="5"
            icon="mdi-alert-circle"
          >
            {{ errorMessageOpera }}
          </v-alert>
          <v-card class="pa-md-1 mx-lg-auto" width="60%">
            <v-card-actions block>
              <v-flex>
                <v-form ref="form">
                  <v-text-field
                    v-model="opera.title"
                    label="Titolo"
                    :rules="[rules.required]"
                    prepend-icon="title"
                  />
                  <v-text-field
                    v-model="opera.description"
                    label="Descrizione"
                    :rules="[rules.required]"
                    prepend-icon="description"
                  />
                  <v-flex>
                    <v-file-input
                      v-model="file"
                      label="File"
                      type="file"
                      counter
                      :rules="[rules.required]"
                      prepend-icon="file_upload"
                      @change="previewImage"
                    />
                    <v-img
                      v-if="typeNumber == 1"
                      :src="url"
                      max-height="200px"
                      max-width="200px"
                    />
                    <v-img
                      v-else-if="typeNumber == 2"
                      src="@/assets/video.jpg"
                      max-height="200px"
                      max-width="200px"
                    />
                    <v-img
                      v-else-if="typeNumber == 3"
                      src="@/assets/audio.jpg"
                      max-height="200px"
                      max-width="200px"
                    />
                    <v-img
                      v-else
                      src="@/assets/doc.png"
                      max-height="200px"
                      max-width="200px"
                    />-->
                  </v-flex>
                  <v-text-field
                    v-model="opera.type"
                    label="Tipo"
                    readonly
                    :rules="[rules.required]"
                    prepend-icon="file_upload"
                  />
                  <v-combobox
                    v-model="opera.categories"
                    :items="categories"
                    item-value="name"
                    item-text="name"
                    :return-object="true"
                    multiple
                    chips
                    clearable
                    label="Categoria"
                    :rules="[rules.required]"
                    prepend-icon="category"
                  />
                  <v-text-field
                    v-model="opera.price"
                    label="Prezzo"
                    :rules="[rules.required]"
                    prepend-icon="attach_money"
                    hide-details
                  />
                </v-form>
              </v-flex>
            </v-card-actions>
            <v-card-actions>
              <v-btn @click="uploadNewOpera">
                Carica l'opera
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      alert: false,
      typeNumber: 0,
      opera: {
        title: "",
        description: "",
        path: "i",
        price: "",
        type: "",
        categories: [],
        currency: "ETH",
        author: JSON.parse(localStorage.getItem("user")).name,
        owner: JSON.parse(localStorage.getItem("user")).name
      },
      file: "",
      url: "",
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio"
      },
      urlPreview: {
        doc: "require('@src/assets/doc.png)",
        audio: "require('@src/assets/audio.jpg)",
        video: "require('@src/assets/video.jpg)"
      }
    };
  },
  computed: {
    errorMessageOpera: {
      get() {
        return this.$store.getters["nftService/errorMessageOpera"];
      }
    },
    categories: {
      get() {
        return this.$store.getters["nftService/categories"];
      }
    }
  },
  created() {
    this.$store.dispatch("nftService/getCategories");
  },
  methods: {
    uploadNewOpera() {
      if (this.opera.type === "Immagine") this.opera.type = "img";
      else if (this.opera.type === "Video") this.opera.type = "video";
      else if (this.opera.type === "Audio") this.opera.type = "audio";
      else this.opera.type = "doc";
      var formatData = new FormData();
      formatData.append("file", this.file);
      formatData.append("opera", JSON.stringify(this.opera));
      this.opera = formatData;
      this.$store.dispatch("nftService/uploadOpera", formatData);
      if (this.$store.getters["nftService/errorMessageOpera"] !== null)
        this.alert = true;
    },
    previewImage() {
      if (this.file === null) {
        this.url = "";
      } else {
        if (this.file.type.includes("image")) {
          typeNumber = 1;
          this.url = URL.createObjectURL(this.file);
          this.opera.type = "Immagine";
        } else if (this.file.type.includes("video")) {
          typeNumber = 2;
          this.url = "@src/assets/video.jpg";
          this.opera.type = "Video";
        } else if (this.file.type.includes("audio")) {
          typeNumber = 3;
          this.url = this.urlPreview.audio;
          this.opera.type = "Audio";
        } else {
          typeNumber = 4;
          this.url = this.urlPreview.doc;
          this.opera.type = "Documento";
        }
      }
    }
  }
};
</script>
