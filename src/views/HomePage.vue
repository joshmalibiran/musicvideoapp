<template>
    <div>
        <NavBar class ="navbar"/>
        <div class="content">
        <HomeHeader class="header"/>
        <categories v-bind:genres="genres" v-if="this.isLoaded"/>
        <!-- {{ $store.state.token }} -->
        </div>
    </div>
</template>

<script>
    import categories from '../components/GenreGrid.vue';
    import spotifyService from "../services/spotifyService";
    import HomeHeader from '../components/HomeHeader.vue'
    import NavBar from '../components/NavBarSimple.vue'

    export default  {
        data()  {
            return {
                genres: [],
                isLoaded:false
            }
            
        },
        components: {
            categories,
            HomeHeader,
            NavBar

        },

        methods:    {
            getToken()  {
            spotifyService.getTheToken().then(response =>  {
            this.$store.commit("SET_AUTH_TOKEN", response.data.access_token);
            /* this.getGenres(this.token) */
            this.getGenres()
      })
            },
            getGenres() {
                spotifyService.getGenres(this.$store.state.token).then(response =>  {
                this.genres = response.data.categories.items;
                this.isLoaded = true;
            }).catch((error) => {
                console.log(error)
            })
  },
        },

        created()   {
            this.getToken()
        }
    }
</script>

<style scoped>

.header {
    /* padding-bottom: 20px; */
   /*  width: 500px; */
   margin-bottom: 30px;
}
.content    {
    /* margin-top: 70px; */
}

.navbar {
    margin-left: 20px;
    margin-right: 20px;
}
</style>