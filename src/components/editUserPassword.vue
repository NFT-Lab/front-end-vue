<template>
  <v-dialog v-model="dialog" width="60%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-1"
        v-bind="attrs"
        v-on="on"
      >
        Modifica password
      </v-btn>
    </template>
    <v-card class="pa-3">
      <v-flex>
        <v-form v-model="isFormValid">
          <v-text-field
            v-model="user.email"
            label="Email"
            :rules="[rules.required]"
          />
          <v-text-field
            v-model="user.password"
            label="Vecchia password"
            :rules="[rules.required, rules.length]"
          />
           <v-text-field
            v-model="user.newPassword"
            label="Nuova password"
            :rules="[rules.required, rules.length]"
          />
        </v-form>
      </v-flex>
      <v-card-actions>
        <v-btn
          color="grey darken-4"
          class="white--text"
          block
          :disabled="!isFormValid"
          @click="updateUser"
        >
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
      dialog: false,
      isFormValid: false,
      show: false,
      show1: false,
      UserData: JSON.parse(localStorage.getItem("user")),
      user: {
        password: '',
        newPassword: '',
        email:  JSON.parse(localStorage.getItem("user")).email,
      },
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio",
        length: val => {
          const patternPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
          return (
            patternPwd.test(val) ||
            "La password deve essere lunga minimo otto caratteri con una lettera maiuscola, una minuscola, un numero ed un carattere speciale"
          );
        },
      }
    };
  },
  methods: {
    updateUser() {
      this.$store.dispatch("CurrentUser/updatePassword", this.user);
      this.dialog=false;
    }
  }
};
</script>
