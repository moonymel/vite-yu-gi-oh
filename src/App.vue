<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
    AppLoader,
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getCardsList() {
      axios.get(this.store.endpoint).then((response) => {
        this.store.cardsList = response.data.data;
        store.loading = false;
      })
    }
  },

  created() {
    this.getCardsList();
  }
}
</script>

<template lang="">
  <div>
    <AppLoader v-if="store.loading" />
    <div v-else>
      <AppHeader />
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>