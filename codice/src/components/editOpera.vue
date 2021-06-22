<template>
  <v-dialog v-model="dialog" width="60%">
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs" v-on="on">
        edit
      </v-icon>
    </template>
    <v-card class="pa-3">
      <v-flex>
        <v-form v-model="isFormValid" class="pa-3">
          <v-text-field
            v-model="visiblePage.title"
            label="Titolo"
            :rules="[rules.required]"
          />
          <v-text-field
            v-model="visiblePage.description"
            label="Descrizione"
            :rules="[rules.required]"
          />
          <v-text-field v-model="visiblePage.type" readonly label="Tipo" />
          <v-combobox
            v-model="visiblePage.categories"
            :items="categories"
            item-value="name"
            item-text="name"
            :return-object="true"
            multiple
            chips
            clearable
            label="Categoria"
            prepend-icon="category"
            :rules="[rules.required]"
          />
          <v-text-field v-model="visiblePage.price" label="Prezzo" />
        </v-form>
      </v-flex>
      <v-card-actions>
        <v-btn
          color="grey darken-4"
          class="white--text"
          block
          @click="Update"
          :disabled="!isFormValid"
        >
          Modifica i dati
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["visiblePage"],
  data() {
    return {
      isFormValid: false,
      dialog: false,
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio"
      }
    };
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters["nftService/categories"];
      }
    }
  },
  created() {
    var type = this.visiblePage.type;
    if (type === "img") this.visiblePage.type = "Immagine";
    else if (type === "video") this.visiblePage.type = "Video";
    else if (type == "audio") this.visiblePage.type = "Audio";
    else this.visiblePage.type = "Documento";
    this.$store.dispatch("nftService/getCategories");
  },
  methods: {
    Update() {
      if (this.visiblePage.type === "Immagine") this.visiblePage.type = "img";
      else if (this.visiblePage.type === "Immagine")
        this.visiblePage.type = "img";
      else if (this.visiblePage.type === "Immagine")
        this.visiblePage.type = "img";
      else this.visiblePage.type = "doc";
      this.$store.dispatch("nftService/updateOpera", this.visiblePage);
      this.dialog = false;
    }
  }
};
</script>
