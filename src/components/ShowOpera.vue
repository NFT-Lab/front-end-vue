<template>
  <v-dialog width="60%">
    <template v-slot:activator="{ on }">
      <v-list-item-avatar
        size="60"
        v-on="on"
      >
        <img src="@/assets/3.jpg">
      </v-list-item-avatar>
      <v-list-item-content v-on="on">
        <v-list-item-title
          v-text="visiblePage.title"
        />
        <v-list-item-subtitle
          v-text="visiblePage.description"
        />
      </v-list-item-content>
    </template>
    <v-card class="pa-3">
      <v-flex>
        <v-form>
          <p>
            <span style="font-weight: bold;">Titolo:</span>
            {{ visiblePage.title }}
          </p>
          <p>
            <span style="font-weight: bold;">Descrizione:</span>
            {{ visiblePage.description }}
          </p>
          <p>
            <span style="font-weight: bold;">Tipologia:</span>
            {{ visiblePage.type }}
          </p>
          <p>
            <span style="font-weight: bold;">Categorie:</span>
            <v-chip
              v-for="category in visiblePage.categories"
              :key="category.name"
              class="ma-2"
              color="amber accent-4"
              label
              text-color="white"
            >
              <v-icon
                small
                left
              >
                label
              </v-icon>
              {{ category.name }}
            </v-chip>
          </p>
          <p>
            <span style="font-weight: bold;">Prezzo:</span>
            {{ visiblePage.price }}
          </p>
        </v-form>
      </v-flex>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
props: ['visiblePage'],
}
</script>
