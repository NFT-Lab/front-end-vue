<template>
  <v-container class="mx-1">
    <v-btn router :to="links[0].home">Home</v-btn>
    <v-row>
      <v-col cols="12" lg="6" sm="6" md="8">
        <v-card>
          <v-form>
            <v-text-field class="mx-5" label="Email"></v-text-field>
            <v-text-field class="mx-5" label="Password"></v-text-field>
          </v-form>
          <v-btn>Login</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      dob: '2007-01-01',
      links: [{ home: "/" }],
    };
  },
};
</script>
