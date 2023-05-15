<template>
    <div class = "container">
    <nav class ="navbar">
      <ul>


        <!-- <li v-for="item in items" :key="item.id">
          <a :href="item.url">{{ item.text }}</a>
        </li> -->


        <li>
          <router-link v-bind:to="{name:'homepage'}">
          Home
          </router-link>
        </li>

        <li>
        <SearchBar class="searchbar"/>
        </li>

        <li>
          <SpotifySignin/>
        </li>


      </ul>
    </nav>
    </div>
  </template>
  
  <script>
  import SearchBar from '@/components/SearchBar.vue'
  import SpotifySignin from '@/components/SignInSpotify.vue'

  export default {
    data() {
      return {
        items: [
          { id: 1, text: 'Home', url: '/' },
          { id: 2, text: 'About', url: '/about' },
          { id: 3, text: 'Contact', url: '/contact' }
        ]
      }
    },
    components: {
      SearchBar,
      SpotifySignin
    }
  }
  </script>
  
  <style scoped>

  .searchbar  {
    /* width: 400px; */
  }

  .container  {
    /* background-color: white; */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px; */
  }
  .navbar  {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    background-color: rgb(35, 33, 39);
    /* height: 30px; */
    padding-right: 10px;
    padding-left: 10px;

  }
  
  nav ul {
    /* list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center; */
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
   nav li {
    display: inline-block;
  }
  
  nav a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    padding: 10px;
  }
  
  nav a:hover {
    color: #fff;
    background-color: #333;
  }


  </style>