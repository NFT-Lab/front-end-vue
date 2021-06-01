<template>
  <v-container fluid style="height: 100vh;">
    <v-layout fill-height>
      <v-btn class="my-2" router :to="links[0].home">Home</v-btn>
      <v-row class="pa-1" dense>
        <v-col
          cols="6"
          class="fill-height d-flex flex-column justify-center align-center"
        >
          <v-card flat tile class="pa-md-1 mx-lg-auto" width="100%">
            <v-form ref="form">
              <v-text-field
                label="Email"
                v-model="email"
                v-bind:rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                v-bind:rules="[rules.required, rules.length]"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
              ></v-text-field>
            </v-form>
            <p>
              Non hai un account? Clicca
              <router-link to="/signup">qui</router-link> per registrarti
            </p>
            <p class="red--text">{{ errorMessage }}</p>
            <v-btn block @click="sendDataLogin">Login</v-btn>
          </v-card>
        </v-col>
        <v-col id="login-container"></v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import User from "@/service/http-request.js";
import router from "../router/router.js";

export default {
  name: "Login",
  data() {
    return {
      dob: "2007-01-01",
      links: [
        {
          home: "/",
        },
      ],
      email: "",
      password: "",
      errorMessage: "",
      show: false,
      rules: {
        required: (val) => !!val || "Questo è un campo obbligatorio",
        length: (val) => {
          const patternPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
          return (
            patternPwd.test(val) ||
            "La password deve essere lunga minimo otto caratteri con una lettera maiuscola, una minuscola, un numero ed un carattere speciale"
          );
        },
        email: (val) => {
          const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return patternEmail.test(val) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    sendDataLogin() {
      if (this.$refs.form.validate()) {
        User.login(this.email, this.password)
          .then((response) => {
            if (response.status === 200) {
              localStorage.setItem("User", response.data);
              router.push("/");
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              this.errorMessage =
                "Dati inseriti scorrettamente, prova a reinserire i dati";
            } else if (error.response.status === 204) {
              this.errorMessage =
                "Utente non presente nel sistema, prova a reinserire i dati";
            }
          });
      } else {
        this.errorMessage = "Non hai inserito correttamente i dati, prova a correggere i dati inseriti";
      }
    },
  },
};
</script>

<style scoped>
#login-container {
  margin: 0px;
  background: url("../assets/circuits.jpg");
  background-size: cover;
}
</style>
