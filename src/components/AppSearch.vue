<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template lang="">
    <div class="container sel-cont p-3">
        <div class="row">
            <div class="col-3">
                <select id="archetypes" class="form-select">
                    <option value="" selected>Select archetype</option>
                    <option></option>
                </select>
            </div>
            <div class="col-3">
                <button class="btn btn-success mx-2">Filter</button>
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