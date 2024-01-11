<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import AppLoader from './components/AppLoader.vue';
import CardList from './components/CardList.vue';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppSearch,
    AppLoader,
    CardList
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getCardsList() {

      let apiUrl = store.endpoint

      if (store.archetype !== '') {
        apiUrl += `?name=${store.archetype}`;
      }

      else {
        axios.get(this.store.endpoint).then((response) => {
          this.store.cardsList = response.data.data;
          store.loading = false;

          // this.store.cardsList.forEach((elem) => {
          //   this.store.myArchetypesList.push(elem.archetype);
          // })

          // console.log(this.store.myArchetypesList)

        })

      }
    },

    // getMyArchetypes() {
    //   this.store.archetypesList.forEach((elem) => {
    //     if (elem.archetype_name == this.cardsList.archetype) {
    //       this.store.myArchetypesList.push(elem.archetype_name);
    //     }
    //   })

    //   console.log(this.store.myArchetypesList)
    // },

    // getArchetypes() {
    //   axios.get(this.store.apiArchetypes).then((response) => {
    //     this.store.archetypesList = response;
    //     console.log(this.store.archetypesList);

    //     this.getMyArchetypes();
    //   })
    // },
  },

  created() {
    this.getCardsList();
    // this.getArchetypes();
  }
}
</script>

<template lang="">
  <div>
    <AppLoader v-if="store.loading" />
    <div v-else>
      <AppHeader />
      <main>
        <AppSearch @start_filter="getCardsList"/>
        <CardList />
    </main>
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;

main {
  background-color: $my_orange;

}
</style>