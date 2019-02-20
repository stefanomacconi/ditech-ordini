<template>
    <v-container fluid>
        <v-layout row wrap align-center>
            <v-flex>
                <!-- @change non funziona. Costretto a mettere il watcher -->
                <v-select
                    :items="tipiDocumento"
                    v-model="tipoDocumentoScelto"
                    label="Tipo Documento"
                    hint="Scegli il Tipo Documento"
                    persistent-hint
                >
                    <template slot="selection" slot-scope="{item}">
                        {{ item.codice }} &nbsp; {{ item.descrizione }}
                    </template>
                    <template slot="item" slot-scope="{item}">
                        {{ item.codice }} &nbsp; {{ item.descrizione }}
                    </template>
                </v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        tipoDocumentoScelto: {
            get () {
                return this.$store.getters.getTipoDocumento
            },
            set (value) {
                this.$store.commit('setTipoDocumento', value)
                this.$router.push('/vistatura')
            }
        },
        tipiDocumento() {
            return this.$store.getters.getTipiDocumento
        }
    }
}
</script>
