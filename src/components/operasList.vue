<template>
  <v-list width="70%">
    <v-list-item v-for="opera in operas" :key="opera.name" class="white--text">
      <v-list-item-title>
        <v-dialog width="60%">
          <template v-slot:activator="{ on, attrs }">
            <p v-bind="attrs" v-on="on">{{ opera.name }}</p>
          </template>
          <v-card class="pa-3">
            <v-flex>
              <v-form>
                <p>
                  <span style="font-weight: bold;">Titolo:</span>
                  {{ opera.name }}
                </p>
                <p>
                  <span style="font-weight: bold;">Descrizione:</span>
                  {{ opera.description }}
                </p>
                <p>
                  <span style="font-weight: bold;">Tipologia:</span>
                  {{ opera.type }}
                </p>
                <p>
                  <span style="font-weight: bold;">Categorie:</span>
                  <v-chip
                    v-for="category in opera.categories"
                    :key="category.name"
                    class="ma-2"
                    color="pink"
                    label
                    text-color="white"
                  >
                    <v-icon small left>
                      label
                    </v-icon>
                    {{ category }}
                  </v-chip>
                </p>
                <p>
                  <span style="font-weight: bold;">Prezzo:</span>
                  {{ opera.price }}
                </p>
              </v-form>
            </v-flex>
          </v-card>
        </v-dialog>
      </v-list-item-title>
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
              </v-form>
            </v-flex>
            <v-card-action>
              <v-btn @click="UpdateOpera">
                Modifica i dati
              </v-btn>
            </v-card-action>
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
