<template>
  <banner/>
  <div class=" main-container">
    <h1>Monte o seu lanche</h1>
    <BurguerForm/>
  </div>
</template>

<script>
  import Banner from "../components/Banner.vue";
  import BurguerForm from '../components/BurguerForm.vue';

  export default {
    name: "Home",
    components:{
      Banner,
      BurguerForm
    } 
  }
</script>
