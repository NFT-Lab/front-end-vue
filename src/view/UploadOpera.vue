<template>
  <v-container>
    <v-layout fill-height>
      <v-row id="login-container" class="pa-1" dense>
        <v-col
          class="fill-height d-flex flex-column justify-center align-center"
        >
          <v-card class="pa-md-1 mx-lg-auto" width="60%">
            <v-card-actions block>
              <v-flex>
                <v-form ref="form">
                  <v-text-field
                    v-model="opera.titolo"
                    label="Titolo"
                    :rules="[rules.required]"
                    prepend-icon="title"
                  />
                  <v-text-field
                    v-model="opera.descrizione"
                    label="Descrizione"
                    :rules="[rules.required]"
                    prepend-icon="description"
                  />
                  <v-file-input
                    v-model="opera.file"
                    label="File"
                    counter
                    truncate-length="15"
                    prepend-icon="file_upload"
                  />
                  <v-text-field
                    v-model="opera.prezzo"
                    label="Prezzo"
                    hide-details
                  />
                  <v-radio-group v-model="row" row>
                    <v-radio label="In vendita" value="radio-1"></v-radio>
                    <v-radio label="Non in vendita" value="radio-2"></v-radio>
                  </v-radio-group>
                </v-form>
              </v-flex>
            </v-card-actions>
            <p class="red--text">
              {{ errorMessage }}
            </p>
            <v-card-actions>
              <v-btn block>
                Carica l'opera
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      opera: {
        titolo: "",
        descrizione: "",
        file: "",
        prezzo: ""
      },
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio"
      }
    };
  }
};
</script>
