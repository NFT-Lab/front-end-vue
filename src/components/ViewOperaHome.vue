<template>
  <v-dialog width="60%">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">
        Visualizza dettagli
      </v-btn>
    </template>
    <v-card class="pa-3">
      <v-row
        class="pa-1 d-flex justify-center"
        dense
      >
        <v-col
          cols="6"
          md="4"
          class="pa-5 justify-center align-center"
        >
          <v-img
            src="@/assets/3.jpg"
          />
        </v-col>
        <v-divider
          vertical
        />
        <v-col
          cols="12"
          sm="6"
          md="8"
          class="pa-3"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="opera.title" />
              <v-list-item-subtitle v-text="opera.price+opera.currency" />
              <v-list-item-subtitle v-text="opera.author" />
              <v-list-item-subtitle v-text="opera.owner" />
              <v-list-item-subtitle v-text="opera.description" />
            </v-list-item-content>
          </v-list-item>
          <v-chip
            v-for="category in opera.categories"
            :key="category.name"
            class="ma-2"
            color="pink"
            label
            text-color="white"
          >
            <v-icon
              small
              left
            >
              label
            </v-icon>
            {{ category }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
props: ['opera'],
}
</script>
