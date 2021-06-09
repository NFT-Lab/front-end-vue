<template>
  <v-list width="70%">
    <v-list-item v-for="opera in operas" :key="opera.name" class="white--text">
      <v-list-item-title> {{ opera.name }}</v-list-item-title>
      <v-list-item-icon>
        <v-dialog width="60%">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">
              edit
            </v-icon>
          </template>
          <v-card class="pa-3">
            <v-flex>
              <v-form>
                <v-text-field label="Titolo" v-model="opera.name" />
                <v-text-field label="Descrizione" v-model="opera.description" />
                <v-text-field label="Tipo" v-model="opera.type" />
                <v-text-field label="Categoria" v-model="opera.categories" />
                <v-text-field label="Prezzo" v-model="opera.price" />
                <v-btn @click="UpdateOpera">Modifica i dati</v-btn>
              </v-form>
            </v-flex>
          </v-card>
        </v-dialog>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  computed: {
    operas: {
      get() {
        return this.$store.getters["CurrentUser/operas"];
      }
    }
  },
  created() {
    this.$store.dispatch("CurrentUser/userOperas");
  },
  methods: {
    UpdateOpera() {
      this.$store.dispatch("nftService/updateOpera");
    }
  }
};
</script>
