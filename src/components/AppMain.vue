<script>
export default {

}
</script>

<template lang="">
    <main class="py-3">
        <div class="container my-cont">
            <div class="row my-row">
                <div class="col-12 col-md-10 col-lg-5">
                    
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

main {
    background-color: $my_orange;
    height: 200px;

    .my-cont {
        background-color: white;
        height: 100px;
    }

}
</style>