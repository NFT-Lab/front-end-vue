<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn @click="dialog = false" v-bind="attrs" v-on="on">
        Modifica dati personali
      </v-btn>
    </template>
    <v-card>
      <v-form>
        <v-text-field label="Nome" v-model="userData.name"> </v-text-field>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      userData: JSON.parse(localStorage.getItem("user"))
    };
  }
};
</script>
