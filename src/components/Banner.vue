<template>
    <div id="main-banner">
        <h1>Make Your Burguer</h1>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    #main-banner {
        background-image: url('../../public/img/burger.jpg');
        background-position: 0 -310px;
        background-size: cover;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #main-banner h1 {
        color: #fff;
        font-size:  60px;
        text-align: center;
        background-color: #222;
        padding: 20px 40px;
    }
</style>