<template>
  <nav class="grey darken-4">
    <v-app-bar class="grey darken-4">
      <v-toolbar-title>
        <img src="@/assets/logo.jpg" alt="logo" height="40" />
        <span class="white--text">NTFLab</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router :to="links[0].login">
        <span>Log in</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn router :to="links[0].signup">
        <span>Sign up</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          login: "/login",
          signup: "/signup"
        }
      ],
      userData: localStorage.getItem("User")
    };
  },
  methods: {
    logOut() {
      localStorage.clear("User");
    }
  }
};
</script>
