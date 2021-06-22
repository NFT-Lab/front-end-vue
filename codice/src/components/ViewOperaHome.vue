<template>
  <v-dialog
    dark
    v-model="dialog"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        color="amber accent-4"
        class="black--text font-weight-bold"
      >
        Visualizza dettagli
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5" color="amber accent-4">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon> </v-btn
        >Informazioni opera</v-card-title
      >
      <v-container>
        <v-row class="pa-4">
          <v-col cols="6">
            <v-img
              contain
              max-height="800"
              max-width="800"
              :src="
                'https://cloudflare-ipfs.com/ipfs/' +
                  opereId[Math.floor(Math.random() * opereId.length)]
              "
            />
            <!--<v-img
            :src="'https://cloudflare-ipfs.com/ipfs/'+visiblePage.id"
          />-->
          </v-col>
          <v-col cols="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="amber--text font-weight-bold"
                  v-text="visiblePage.title"
                />
                <v-list-item-subtitle>
                  <span class="font-weight-bold">Prezzo: </span>
                  {{ visiblePage.price + " " + visiblePage.currency }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="font-weight-bold">Autore: </span>
                  {{ visiblePage.author }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="font-weight-bold">Proprietario: </span>
                  {{ visiblePage.owner }}
                </v-list-item-subtitle>
                <v-list-item-subtitle >
                   <span class="font-weight-bold">Descrizione: </span>
                  {{ visiblePage.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-chip
              v-for="category in visiblePage.categories"
              :key="category.name"
              item-value="name"
              item-text="name"
              class="ma-2"
              color="amber accent-4"
              label
              text-color="black"
            >
              <v-icon small left>
                label
              </v-icon>
              {{ category.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["visiblePage"],
  data() {
    return {
      dialog: false,
      opereId: [
        "QmX5FkTotxKRziu5a7NXz16YeHrVgYw98RzTgNWvi8HmDC",

        "QmUZr5giEkQynVP4whjkrPA5x9HjfmonCt2j5WCCJ6GJYt",

        "QmdDN19DFWsGAL5hsdYDiPWLJpcNnezEqcMai8UnWayTCy",

        "QmUoxQnAHehMEKH1CCbr1bu69P4r79kPXRKFqn6v3Pyret",

        "QmNe7jwQqawJ9TNouzBwDLfS294SxNo7FEuuKBkkpRRFHh",

        "QmRMEwa9jLv2iNxrpfZ8Z2bNMTZEFeyUVnt6fF5Xenk7Ms",

        "QmbHx7zHgibMF9ktjaRm5dDT3bRAtqa7EVBPJ8jTvpLahe",

        "QmWjHc9zb5ojPsjA43B3SFyKRPqd9Mc57R9EnTCgduyNzv",

        "Qmb13ALEkqXtVXGxCSXJvAQNVwytCFcr5DT6jcrXuUGjat",

        "QmUZKcyxFm82CpsuRxkentY3zw8dRxGxHni8ggDuxQQYDP"
      ]
    };
  }
};
</script>
