<template>
  <v-container fluid style="height: 100vh;">
    <Particle />
    <v-layout fill-height>
      <v-row id="login-container" class="pa-1" dense>
        <v-btn class="my-2" router :to="links[0].home">
          Home
        </v-btn>
        <v-col
          class="fill-height d-flex flex-column justify-center align-center"
        >
          <v-alert
            v-model="alert"
            color="red"
            dense
            dismissible
            elevation="5"
            icon="mdi-alert-circle"
          >
            {{ errorMessage }}
          </v-alert>
          <v-card class="pa-md-1 mx-lg-auto" width="60%">
            <v-card-actions block>
              <v-flex>
                <v-form ref="form">
                  <v-text-field
                    v-model="user.name"
                    label="Nome"
                    :rules="[rules.required]"
                    prepend-icon="person"
                  />
                  <v-text-field
                    v-model="user.surname"
                    label="Cognome"
                    :rules="[rules.required]"
                    prepend-icon="person"
                  />
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    :rules="[rules.required, rules.email]"
                    prepend-icon="email"
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
                        prepend-icon="calendar-range"
                        readonly
                        :rules="[rules.required, rules.age]"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="user.dob"
                      :active-picker.sync="activePicker"
                      color="amber accent-4"
                      :max="new Date().toISOString().substr(0, 10)"
                      @change="save"
                    />
                  </v-menu>
                  <v-text-field
                    v-model="user.wallet"
                    label="ID Wallet"
                    :rules="[rules.required, rules.wallet]"
                    prepend-icon="wallet"
                  />
                  <v-text-field
                    v-model="user.password"
                    label="Password"
                    :rules="[rules.required, rules.length]"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'eye' : 'eye-off'"
                    prepend-icon="lock"
                    @click:append="show = !show"
                  />
                  <v-text-field
                    v-model="confPassword"
                    label="Conferma Password"
                    :rules="[rules.required, rules.equals]"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'eye-off'"
                    prepend-icon="lock"
                    @click:append="show1 = !show1"
                  />
                </v-form>
              </v-flex>
            </v-card-actions>

            <v-card-actions>
              <v-btn block @click="sendDataSignUp">
                Sign up
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import Particle from "@/view/Particle.vue";

export default {
  name: "Login",
  components: {
    Particle
  },
  data() {
    return {
      alert: false,
      links: [
        {
          home: "/"
        }
      ],
      user: {
        name: "",
        surname: "",
        email: "",
        dob: "",
        wallet: "",
        password: ""
      },
      menu: false,
      confPassword: "",
      activePicker: null,
      show: false,
      show1: false,
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio",
        length: val => {
          const patternPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
          return (
            patternPwd.test(val) ||
            "La password deve essere lunga minimo otto caratteri con una lettera maiuscola, una minuscola, un numero ed un carattere speciale"
          );
        },
        equals: val =>
          val === this.user.password || "Le password devono essere uguali",
        email: val => {
          const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return patternEmail.test(val) || "Email non valida";
        },
        wallet: val => {
          const patternWallet = /^0x[a-fA-F0-9]/;
          return patternWallet.test(val) || "ID Wallet non valido";
        },
        age: val => {
          var year = new Date(val).getFullYear();
          console.log(year);
          console.log(new Date().getFullYear());
          var minus = year - new Date().getFullYear();
          console.log(minus);
          return minus >= 0 || "Per iscriverti devi essere maggiorenne";
        }
      }
    };
  },
  computed: {
    errorMessage: {
      get() {
        return this.$store.getters["CurrentUser/errorMessageSig"];
      }
    }
  },
  methods: {
    sendDataSignUp() {
      this.$store.dispatch("CurrentUser/signUp", this.user);
      if (this.$store.getters["CurrentUser/errorMessageSig"] !== null)
        this.alert = true;
    },
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>

<style scoped></style>
