<template>
    <div>
        <navBar/>
        <div class="content">
        <playlistGrid v-bind:playlists="playlists"/>
        </div>
    </div>
</template>

<script>
import navBar from '../components/NavBar.vue'
import spotifyService from '@/services/spotifyService';
import playlistGrid from '@/components/PlaylistGrid.vue'

export default  {
    /* props:"genre", */
    data()  {
            return {
                playlists:[]
            }
            
        },
    components: {
        navBar,
        playlistGrid
    },
    methods:    {
        getPlaylists()  {
            spotifyService.getPlaylistByGenre(this.$store.state.token, this.$route.params.genreid).then(response => {
                this.playlists = response.data.playlists.items;
            })
        }
        
    },
    created()   {
        this.getPlaylists()
    }
}

</script>

<style scoped>
.content    {
    margin-top: 70px;
}
</style>