<template>
    <v-container fluid>
        <v-layout row wrap align-center>
            <v-flex>
                <!-- @change non funziona. Costretto a mettere il watcher -->
                <v-select
                    :items="confermeOrdine"
                    v-model="confermaOrdineScelta"
                    label="Conferma d'Ordine"
                    hint="Scegli la Conferma d'Ordine"
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
        confermaOrdineScelta: {
            get () {
                return this.$store.getters.getConfermaOrdine
            },
            set (value) {
                this.$store.commit('setConfermaOrdine', value)
                this.$router.push('/vistatura')
            }
        },
        confermeOrdine() {
            return this.$store.getters.getConfermeOrdine
        }
    }
}
</script>
