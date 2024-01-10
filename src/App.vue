<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getCardsList() {
      axios.get(this.store.endpoint).then((response) => {
        this.store.cardsList = response.data.data
      })
    }
  },

  created() {
    this.getCardsList();
    console.log(this.store.cardsList)
  }
}
</script>

<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>