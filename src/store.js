import { reactive } from 'vue'

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    apiArchetypes: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardsList: [],
    loading: true,
})