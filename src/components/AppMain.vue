<script>
import { store } from '../store';
import CardList from './CardList.vue'
import AppSearch from './AppSearch.vue'


export default {

    components: {
        CardList,
        AppSearch,
    },

    data() {
        return {
            store
        }
    }

}
</script>

<template lang="">
    <main>
        <AppSearch />
        <CardList />
    </main>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

main {
    background-color: $my_orange;

    .my-cont {
        background-color: white;
    }

}
</style>