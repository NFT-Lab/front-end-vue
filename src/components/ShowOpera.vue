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
          v-text="opera.title"
        />
        <v-list-item-subtitle
          v-text="opera.description"
        />
      </v-list-item-content>
    </template>
    <v-card class="pa-3">
      <v-flex>
        <v-form>
          <p>
            <span style="font-weight: bold;">Titolo:</span>
            {{ opera.title }}
          </p>
          <p>
            <span style="font-weight: bold;">Descrizione:</span>
            {{ opera.description }}
          </p>
          <p>
            <span style="font-weight: bold;">Tipologia:</span>
            {{ opera.type }}
          </p>
          <p>
            <span style="font-weight: bold;">Categorie:</span>
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
              {{ category.name }}
            </v-chip>
          </p>
          <p>
            <span style="font-weight: bold;">Prezzo:</span>
            {{ opera.price }}
          </p>
        </v-form>
      </v-flex>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
props: ['opera'],
}
</script>
