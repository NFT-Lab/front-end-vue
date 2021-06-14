<template>
  <v-container style="max-width=100%">
    <v-row class="pa-1 d-flex justify-center" dense>
      <v-col cols="6" md="4" class="pa-3">
        <h1 class="white--text">Il mio profilo</h1>
        <v-avatar size="96">
          <v-icon x-large color="white">person</v-icon>
        </v-avatar>
        <p class="white--text">
          Nome:
          {{ userData.name }}
        </p>
        <p class="white--text">
          Cognome:
          {{ userData.surname }}
        </p>
        <p class="white--text">
          Data di nascita:
          {{ userData.dob }}
        </p>
        <p class="white--text">
          Email:
          {{ userData.email }}
        </p>
        <p class="white--text">
          ID Wallet:
          {{ userData.wallet }}
        </p>
        <editUserData />
      </v-col>
      <v-divider vertical class="white" />
      <v-col cols="12" sm="6" md="8" class="pa-3">
        <h1 class="white--text">Le mie opere</h1>
        <operasList />
        <v-btn router :to="links[0].uploadOpera">
          Carica una nuova opera
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import operasList from "@/components/operasList.vue";
import editUserData from "@/components/editUserData.vue";

export default {
  components: {
    operasList,
    editUserData
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem("user")),
      links: [
        {
          uploadOpera: "/uploadOpera"
        }
      ]
    };
  }
};
</script>
