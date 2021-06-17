<template>
  <v-dialog v-model="dialog" width="60%">
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        v-on="on"
      >
        edit
      </v-icon>
    </template>
    <v-card class="pa-3">
      <v-flex>
        <v-form>
          <v-text-field
            v-model="visiblePage.title"
            label="Titolo"
          />
          <v-text-field
            v-model="visiblePage.description"
            label="Descrizione"
          />
          <v-text-field
            v-model="visiblePage.type"
            label="Tipo"
          />
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
          />
          <v-text-field
            v-model="visiblePage.price"
            label="Prezzo"
          />
        </v-form>
      </v-flex>
      <v-card-actions>
        <v-btn
          color="grey darken-4"
          class="white--text"
          block
          @click="Update"
        >
          Modifica i dati
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['visiblePage'],
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters["nftService/categories"];
    }
    },
  },
 methods: {
    Update() {
      this.$store.dispatch("nftService/updateOpera");
      this.dialog=false;
    }
  },
  created() {
    this.$store.dispatch("nftService/getCategories");
  },
}
</script>
