<template>
<div>
    <navBar/>
    <div class="content">
    <artistHeader v-bind:artist="artist" class="header" />
        <div class="center">
        <AlbumMiniGrid v-bind:albums="albums" class="album-display"/>
        </div>
    </div>


</div>
</template>

<script>
import spotifyService from '@/services/spotifyService';
import artistHeader from '@/components/ArtistHeader.vue'
import navBar from '@/components/NavBar.vue'
import AlbumMiniGrid from '@/components/AlbumMiniGrid.vue';

export default    {
    data()  {
        return  {
            artist:{},
            albums:[]
        }
    },
    components: {
        artistHeader,
        navBar,
        AlbumMiniGrid
    },
    methods:    {

        getArtistInfo() {
            spotifyService.getArtist(this.$store.state.token, this.$route.params.artistid).then(response => {
                this.artist = response.data 
            })
        },

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
        this.getArtistInfo()
    }
}

</script>

<style scoped>
.content    {
    margin-top: 70px;
}

.header {
border-bottom: solid 1px pink;
padding: 10px
}

.album-display  {
    /* width: 3000px; */
    margin: 10px;
}

.center{
     /* display:flex;  */
     /* justify-content:center; */
    }

</style>