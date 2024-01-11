<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },

    methods: {

    }
}
</script>

<template lang="">
    <div class="container sel-cont p-3">
        <div class="row">
            <div class="col-3">
                <select id="filter" class="form-select" v-model="store.archetype">
                    <option value="" selected>Select archetype</option>
                    <option v-for="archetype, index in store.archetypes" :key="index" :value="archetype">
                    {{ archetype }}
                    </option>
                </select>
            </div>
            <div class="col-3">
                <button class="btn btn-success mx-2" @click="$emit('start_filter')">Filter</button>
                <button class="btn btn-warning">Reset</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.sel-cont {
    background-color: rgb(35, 35, 35);
}
</style>