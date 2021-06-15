<template>
  <v-container style="max-width=100%">
    <v-row
      class="pa-1 d-flex justify-center"
      dense
    >
      <v-col
        cols="6"
        md="4"
        class="pa-5 justify-center align-center"
      >
        <v-avatar size="96">
          <v-icon
            size="96"
            color="amber accent-4"
          >
            person
          </v-icon>
        </v-avatar>
        <h2 class="amber--text">
          {{ userData.name }}
          {{ userData.surname }}
        </h2>

        <p class="white--text">
          Data di nascita:
          {{ userData.dob }}
        </p>
        <p class="white--text">
          Email:
          {{ userData.email }}
        </p>
        <p class="white--text">
          Wallet Address:
          {{ userData.wallet }}
        </p>
        <editUserData />
        <editUserPassword />
      </v-col>
      <v-divider
        vertical
        class="white"
      />
      <v-col
        cols="12"
        sm="6"
        md="8"
        class="pa-3"
      >
        <h1 class="white--text">
          Le mie opere
        </h1>
        <operasList />
        <v-btn
          router
          :to="links[0].uploadOpera"
        >
          Carica una nuova opera
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import operasList from "@/components/operasList.vue";
import editUserData from "@/components/editUserData.vue";
import editUserPassword from "@/components/editUserPassword.vue";

export default {
  components: {
    operasList,
    editUserData,
    editUserPassword
  },
  data() {
    return {
      links: [
        {
          uploadOpera: "/uploadOpera"
        }
      ]
    };
  },
  computed: {
    userData: {
      get() {
        return JSON.parse(localStorage.getItem("user"));
      },
    }
  }
};
</script>
