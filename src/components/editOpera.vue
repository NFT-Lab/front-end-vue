<template>
  <v-dialog width="60%">
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
            v-model="opera.title"
            label="Titolo"
          />
          <v-text-field
            v-model="opera.description"
            label="Descrizione"
          />
          <v-text-field
            v-model="opera.type"
            label="Tipo"
          />
          <v-text-field
            v-model="opera.categories"
            label="Categoria"
          />
          <v-text-field
            v-model="opera.price"
            label="Prezzo"
          />
        </v-form>
      </v-flex>
      <v-card-actions>
        <v-btn
          color="grey darken-4"
          class="white--text"
          block
          @click="UpdateOpera"
        >
          Modifica i dati
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
props: ['opera'],
 methods: {
    UpdateOpera() {
      this.$store.dispatch("nftService/updateOpera");
    }
  }
}
</script>
