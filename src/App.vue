<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>
/* import HomePage from './views/HomePage.vue' */

export default {
  name: 'App',
  components: {
    /* HomePage */

  }
}




</script>

<style>
@font-face {
    font-family: 'inter';
    src: url('@/assets/fonts/Inter-V.ttf') format('truetype');
  }

#app {
  font-family: "inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  /* margin-top: 60px; */
}

body{
  background-color: rgb(20, 20, 20);
  /* font-family:"inter"; */
}
</style>
