<template>
  <v-container>
    <v-layout fill-height>
      <v-row
        id="login-container"
        class="pa-1"
        dense
      >
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
          <v-card
            class="pa-md-1 mx-lg-auto"
            width="60%"
          >
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
                  <div>
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
                      :src="url"
                      max-height="200px"
                      max-width="200px"
                    />
                  </div>
                  <v-combobox
                    v-model="opera.type"
                    :items="tipologia"
                    clearable
                    chips
                    label="Tipo"
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
      opera: {
        title: "",
        description: "",
        path: "i",
        price: "",
        type: "",
        cateogories: [],
        currency: "ETH",
        author: JSON.parse(localStorage.getItem("user")).name,
        owner: JSON.parse(localStorage.getItem("user")).name
      },
      file: "",
      tipologia: ["video", "audio", "img", "doc"],
      url: "",
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio"
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
      var formatData = new FormData();
      formatData.append("file", this.file);
      formatData.append("opera", JSON.stringify(this.opera));
      this.opera = formatData;
      this.$store.dispatch("nftService/uploadOpera", formatData);
      if (this.$store.getters["nftService/errorMessageOpera"] !== null)
        this.alert = true;
    },
    previewImage() {
      this.url = URL.createObjectURL(this.file);
    }
  }
};
</script>
