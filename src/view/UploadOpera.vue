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
                  <div>
                    <v-file-input
                      v-model="opera.file"
                      label="File"
                      type="file"
                      counter
                      :rules="[rules.required]"
                      prepend-icon="file_upload"
                      @change="previewImage"
                    />
                    <v-img :src="url" max-height="200px" max-width="200px" />
                  </div>
                  <v-combobox
                    v-model="opera.tipo"
                    :items="tipologia"
                    clearable
                    chips
                    label="Tipo"
                    :rules="[rules.required]"
                    prepend-icon="file_upload"
                  />
                  <v-combobox
                    v-model="opera.categoria"
                    :items="tipologia"
                    multiple
                    chips
                    clearable
                    label="Categoria"
                    :rules="[rules.required]"
                    prepend-icon="category"
                  />
                  <v-text-field
                    v-model="opera.prezzo"
                    label="Prezzo"
                    :rules="[rules.required]"
                    prepend-icon="attach_money"
                    hide-details
                  />
                  <v-switch
                    v-model="opera.vendita"
                    label="In vendita"
                    value="In vendita"
                  />
                </v-form>
              </v-flex>
            </v-card-actions>
            <p class="red--text">
              {{ errorMessageOpera }}
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
        prezzo: "",
        tipo: "",
        categoria: "",
        vendita: true
      },
      tipologia: ["video", "audio", "img", "doc"],
      url: "",
      errorMessageOpera: "",
      rules: {
        required: val => !!val || "Questo è un campo obbligatorio"
      }
    };
  },
  methods: {
    previewImage() {
      this.url = URL.createObjectURL(this.opera.file);
    }
  }
};
</script>
