<template>
    <div>
        <NavBar/>
        <div class="content">
        <playlistGrid v-bind:playlists="this.albums"/>
        </div>
    </div>
</template>

<script>
import spotifyService from '@/services/spotifyService';
import playlistGrid from '@/components/PlaylistGrid.vue'
import NavBar from '@/components/NavBar.vue'

export default  {
    data()  {
        return{
            albums:[]
        }
    },

    components: {
        playlistGrid,
        NavBar
    },
    methods:    {
        getAlbums()    {
            spotifyService.getAlbumsByArtist(this.$store.state.token, this.$route.params.artistid).then(response => {
                this.albums = response.data.items.filter(item => (item.album_type === "album"));

                let uniqueAlbums = this.albums.filter((album, index, self) => {
                return self.map(album => album.name).indexOf(album.name) === index;
                });

                this.albums = uniqueAlbums;
            })
        }
    },
    created()   {
        this.getAlbums()
    }
}

</script>

<style scoped>
.content    {
    margin-top: 70px;
}
</style>