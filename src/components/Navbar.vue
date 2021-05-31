<template>
     <nav class="grey darken-4">
  <v-app-bar class="grey darken-4">
      <v-toolbar-title>
      <img src="@/assets/logo.jpg" alt="logo" height="40">
      <span class="white--text">NTFLab</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router :to="links[0].login">
      <span>Log In</span>
      <v-icon right>login</v-icon>
      </v-btn>
    </v-app-bar>
    </nav>
</template>

<script>
export default {
    data() {
    return {
      links: [
        { login: "/login" }
      ]
    }
  }
}
</script>