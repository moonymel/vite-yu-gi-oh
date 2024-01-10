<script>
import { store } from '../store';

import CardInfo from './CardInfo.vue'

export default {

    components: {
        CardInfo,
    },

    data() {
        return {
            store
        }
    }

}
</script>

<template lang="">
    <div>
        <div class="container my-cont">
            <div class="row my-row">
                <CardInfo v-for="card, index in store.cardsList" :key="index" :card="card" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.my-cont {
    background-color: white;
}
</style>