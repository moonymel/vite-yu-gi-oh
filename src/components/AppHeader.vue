<script>
export default {

}
</script>

<template lang="">
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png"> <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

header {
    padding: 20px;
    background-color: white;
    display: flex;
    align-items: center;

    img {
        height: 20px;
        vertical-align: middle;
        margin-right: 20px;
    }
}
</style>