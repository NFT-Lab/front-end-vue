<template>
  <v-dialog width="60%">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" dark>
        Visualizza dettagli
      </v-btn>
    </template>
    <v-card class="pa-3">
      <v-row class="pa-1 d-flex justify-center" dense>
        <v-col cols="6" md="4" class="pa-5 justify-center align-center">
          <v-img
            src="https://cloudflare-ipfs.com/ipfs/QmX5FkTotxKRziu5a7NXz16YeHrVgYw98RzTgNWvi8HmDC"
          />
        </v-col>
        <v-divider vertical />
        <v-col cols="12" sm="6" md="8" class="pa-3">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="visiblePage.title" />
              <v-list-item-subtitle
                v-text="visiblePage.price + visiblePage.currency"
              />
              <v-list-item-subtitle v-text="visiblePage.author" />
              <v-list-item-subtitle v-text="visiblePage.owner" />
              <v-list-item-subtitle v-text="visiblePage.description" />
            </v-list-item-content>
          </v-list-item>
          <v-chip
            v-for="category in visiblePage.categories"
            :key="category.name"
            item-value="name"
            item-text="name"
            class="ma-2"
            color="amber accent-4"
            label
            text-color="black"
          >
            <v-icon small left>
              label
            </v-icon>
            {{ category.name }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["visiblePage"],
  mounted() {
    console.log(this.visiblePage.categories.name);
  }
};
</script>
