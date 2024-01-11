<script>
export default {
    props: {
        card: Object,
    }
}
</script>

<template lang="">
    <div class="my-card text-center">
        <img :src="card.card_images[0].image_url">
        <div class="title">{{ card.name }}</div>
        {{ card.archetype }}
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.my-card {
    width: calc(100% / 5 - 20px);
    margin: 10px 10px;
    background-color: $my_orange;
    padding: 0;

    img {
        width: 100%;
    }

    .title {
        @include card_title;
    }
}
</style>