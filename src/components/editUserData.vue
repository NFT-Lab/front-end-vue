<template>
  <v-dialog v-model="dialog" width="60%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        Modifica dati personali
      </v-btn>
    </template>
    <v-card>
      <v-flex>
        <v-form>
          <v-text-field label="ID Wallet" v-model="userData.wallet">
          </v-text-field>
        </v-form>
      </v-flex>
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
