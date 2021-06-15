<template>
  <!--<v-list width="70%" two-line>
    <v-list-item-group
      v-model="selected"
      active-class="pink--text"
      multiple
    >
      <template v-for="opera in operas" >
        <v-list-item  :key="opera.name" class="white--text">
          <v-list-item-title>
            <v-dialog width="60%">
              <template v-slot:activator="{ on, attrs }">
                <p  v-bind="attrs" v-on="on">{{ opera.title }}</p>
              </template>
              <v-card class="pa-3">
                <v-flex>
                  <v-form>
                    <p>
                      <span style="font-weight: bold;">Titolo:</span>
                      {{ opera.title }}
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
          <v-list-item-subtitle>{{opera.description}}</v-list-item-subtitle>
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
                    <v-text-field label="Titolo" v-model="opera.title" />
                    <v-text-field label="Descrizione" v-model="opera.description" />
                    <v-text-field label="Tipo" v-model="opera.type" />
                    <v-text-field label="Categoria" v-model="opera.categories" />
                    <v-text-field label="Prezzo" v-model="opera.price" />
                  </v-form>
                </v-flex>
                <v-card-actions>
                  <v-btn @click="UpdateOpera">
                    Modifica i dati
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item-icon>
        </v-list-item>
      </template>
    </v-list-item-group>
  </v-list>-->
  <v-list two-line>
    <v-list-item-group
      v-model="selected"
      active-class="amber accent-4--text"
    >
      <template v-for="opera in operas">
        <v-list-item :key="opera.title">
          <template>
            <v-list-item-content>
              <v-list-item-title v-text="opera.title" />

              <v-list-item-subtitle
                class="text--primary"
                v-text="opera.description"
              />
            </v-list-item-content>
            <v-list-item-action>
              <v-icon
                color="black"
              >
                mdi-pencil
              </v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider :key="opera.title"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/operas"];
      }
    },
  },
  created() {
    this.$store.dispatch("nftService/userOperas");
  },
  methods: {
    UpdateOpera() {
      this.$store.dispatch("nftService/updateOpera");
    }
  }
};
</script>
