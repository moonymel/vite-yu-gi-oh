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
    },

    getMyArchetypes() {
      this.store.archetypesList.forEach((elem) => {
        if (elem.archetype_name == this.cardsList.archetype) {
          this.store.myArchetypesList.push(elem.archetype_name);
        }
      })

      console.log(this.store.myArchetypesList)
    },

    getArchetypes() {
      axios.get(this.store.apiArchetypes).then((response) => {
        this.store.archetypesList = response;
        console.log(this.store.archetypesList);

        this.getMyArchetypes();
      })
    },
  },

  created() {
    this.getCardsList();
    this.getArchetypes();
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