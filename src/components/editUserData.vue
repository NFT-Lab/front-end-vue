<template>
  <v-dialog width="60%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        Modifica dati personali
      </v-btn>
    </template>
    <v-card class="pa-3">
      <v-flex>
        <v-form>
          <v-text-field label="Nome" v-model="user.name" />
          <v-text-field label="Cognome" v-model="user.surname" />
          <v-text-field label="Password" v-model="user.password" />
          <v-text-field label="Conferma password" v-model="confPassword" />
          <v-text-field label="ID Wallet" v-model="user.wallet" />
        </v-form>
      </v-flex>
      <v-card-actions>
        <v-btn @click="updateUser">
          Modifica i dati
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      UserData: JSON.parse(localStorage.getItem("user")),
      user: {
        email: JSON.parse(localStorage.getItem("user")).email,
        password: JSON.parse(localStorage.getItem("user")).password,
        name: JSON.parse(localStorage.getItem("user")).name,
        surname: JSON.parse(localStorage.getItem("user")).surname,
        wallet: JSON.parse(localStorage.getItem("user")).wallet
      },
      confPassword: JSON.parse(localStorage.getItem("user")).password
    };
  },
  methods: {
    updateUser() {
      this.$store.dispatch("CurrentUser/updateUser", this.UserData);
    }
  }
};
</script>
