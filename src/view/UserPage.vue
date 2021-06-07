<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="4">
        <h1 class="white--text">Il mio profilo</h1>
        <v-avatar size="96">
          <v-icon x-large color="white">person</v-icon>
        </v-avatar>
        <p class="white--text">
          {{ userData.email }}
        </p>
        <p class="white--text">
          {{ userData.wallet }}
        </p>
      </v-col>
      <v-divider vertical class="white" />
      <v-col cols="12" sm="6" md="8">
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

export default {
  components: {
    operasList
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
