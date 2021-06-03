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
          <v-card class="pa-md-1 mx-lg-auto" width="60%">
            <v-card-actions block>
              <v-flex>
                <v-form ref="form">
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    :rules="[rules.required, rules.email]"
                    prepend-icon="mdi-email"
                  />
                  <v-text-field
                    v-model="user.password"
                    label="Password"
                    :rules="[rules.required, rules.length]"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    prepend-icon="mdi-lock"
                    @click:append="show = !show"
                  />
                </v-form>
              </v-flex>
            </v-card-actions>
            <p class="red--text">
              {{ errorMessage }}
            </p>
            <v-card-text>
              <p>
                Non hai un account? Clicca
                <router-link to="/signup">
                  qui
                </router-link>
                per registrarti
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn block @click="sendDataLogin">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
//import User from "@/service/http-request.js";
//import router from "../router/router.js";
import Particle from "@/view/Particle.vue";

export default {
  name: "Login",
  components: {
    Particle
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      links: [
        {
          home: "/"
        }
      ],
      errorMessage: "",
      show: false,
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio",
        length: val => {
          const patternPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
          return (
            patternPwd.test(val) ||
            "La password deve essere lunga minimo otto caratteri con una lettera maiuscola, una minuscola, un numero ed un carattere speciale"
          );
        },
        email: val => {
          const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return patternEmail.test(val) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    sendDataLogin() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("CurrentUser/loginUser", this.user);
        /*User.login(this.user)
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
          });*/
      } else {
        this.errorMessage =
          "Non hai inserito correttamente i dati, prova a correggere i dati inseriti";
      }
    }
  }
};
</script>

<style scoped></style>
