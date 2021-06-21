<template>
  <v-dialog v-model="dialog" width="60%" dark persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-1 black--text"
        v-bind="attrs"
        v-on="on"
        color="amber accent-4"
      >
        Modifica dati personali
      </v-btn>
    </template>
    <v-card class="pa-3">
      <v-card-title class="text-h5 amber accent-4">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon> </v-btn
        >Modifica dati</v-card-title
      >
        <v-form v-model="isFormValid">
          <v-text-field
            v-model="user.name"
            label="Nome"
            :rules="[rules.required]"
            color="amber accent-4"
          />
          <v-text-field
            v-model="user.surname"
            label="Cognome"
            :rules="[rules.required]"
            color="amber accent-4"
          />
          <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="user.dob"
                        label="Anno di nascita"
                        prepend-icon="mdi-calendar-range"
                        :rules="[rules.required, rules.age]"
                        v-bind="attrs"
                        v-on="on"
                        color="amber accent-4"
                      />
                    </template>
                    <v-date-picker
                      v-model="user.dob"
                      :active-picker.sync="activePicker"
                      :max="new Date().toISOString().substr(0, 10)"
                      @change="save"
                      color="amber accent-4"
                    />
                  </v-menu>
                  <v-text-field
                    v-model="user.wallet"
                    label="Wallet Address"
                    :rules="[rules.required, rules.wallet]"
                    prepend-icon="mdi-wallet"
                    color="amber accent-4"
                  />
          <v-text-field
            v-model="user.password"
            label="Inserisci la password per confermare la modifica"
            :rules="[rules.required, rules.length]"
            color="amber accent-4"
          />
        </v-form>
      <v-card-actions>
        <v-btn
          class="black--text"
          block
          :disabled="!isFormValid"
          @click="updateUser"
          color="amber accent-4"
        >
          Conferma modifiche
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
      UserData: this.$store.getters["CurrentUser/user"],
      user: {
        name: this.$store.getters["CurrentUser/user"].name,
        surname:  this.$store.getters["CurrentUser/user"].surname,
        password: '',
        email:  this.$store.getters["CurrentUser/user"].email,
        dob: this.$store.getters["CurrentUser/user"].dob,
        wallet: this.$store.getters["CurrentUser/user"].wallet
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
      this.$store.dispatch("CurrentUser/updateUser", this.user);
      this.dialog=false;
    }
  }
};
</script>
