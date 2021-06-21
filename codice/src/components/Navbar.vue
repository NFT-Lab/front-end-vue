<template>
  <nav class="grey darken-4">
    <v-app-bar class="grey darken-4">
      <v-toolbar-title>
        <router-link to="/">
          <v-img src="@/assets/logo.png" alt="logo" height="40" width="100" />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
          <div v-if="isLogged">
            <v-row>
              <v-col>
                <v-btn
                  router
                  :to="links[0].userPage"
                  class="mx-2 black--text"
                  color="amber accent-4"
                >
                  {{userData.name}}
                </v-btn>
              </v-col>
              <v-col>
                <v-btn @click="logOut" color="amber accent-4" class="black--text">
                  <span>Log out</span>
                  <v-icon right>
                    logout
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <v-row>
              <v-col cols="6">
                <v-btn
                  router
                  :to="links[0].login"
                  class="mx-2"
                  color="amber accent-4"
                  black--text
                >
                  <span>Log in</span>
                  <v-icon right>
                    login
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  router
                  :to="links[0].signup"
                  color="amber accent-4"
                  class="black--text"
                >
                  <span>Sign up</span>
                  <v-icon right>
                    login
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
    </v-app-bar>
  </nav>
</template>

<script>
import router from "../router/router";
export default {
  data() {
    return {
      links: [
        {
          login: "/login",
          signup: "/signup",
          userPage: "/userPage"
        }
      ]
    };
  },
  computed: {
    isLogged: {
      get() {
        return this.$store.getters["CurrentUser/isAuthenticated"];
      }
    },
    userData: {
      get() {
        return this.$store.getters["CurrentUser/user"];
      }
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("CurrentUser/logOut");
      if (this.$router.currentRoute.fullPath !== "/") router.push("/");
    }
  }
};
</script>
