<template>
    <div>
        <NavBar class="nav"/>
        <div class = "content">
        <SearchButtons v-on:@select-playlist="displayResults(1)" v-on:@select-artist="displayResults(2)" v-on:@select-album="displayResults(3)"/>
        <PlaylistGrid v-show="this.display === 1" v-bind:playlists="playlists"/>
        <div v-show="this.display===2">
            <ArtistGrid v-bind:artists="artists"/>
        </div>
        <div v-show="this.display ===3">
            <AlbumGrid v-bind:playlists="albums"/>
        </div>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import SearchButtons from '@/components/SearchButtons.vue'
    import PlaylistGrid from '@/components/PlaylistGrid.vue'
    import spotifyService from '@/services/spotifyService'
    import ArtistGrid from '@/components/ArtistGrid.vue'
    import AlbumGrid from '@/components/AlbumGrid.vue'

    export default{
        data()  {
            return  {
                searchQuery: this.$route.params.searchTerm,
                display: 1,
                playlists: [],
                artists: [],
                albums:[]
            }
        },
        components: {
            NavBar,
            SearchButtons,
            PlaylistGrid,
            ArtistGrid,
            AlbumGrid
        },
        methods:    {
            displayResults(selected)    {
                this.display = selected;
                console.log(this.display)
            },

            retrieveSearchResults() {
                console.log("results")
                spotifyService.searchResults(this.$store.state.token, this.searchQuery).then(response =>    {
                    //make varibles binded to corresponding components
                    /* console.log(response.data) */
                    this.playlists = response.data.playlists.items
                    this.artists = response.data.artists.items
                    this.albums = response.data.albums.items

                    console.log(response.data)
                })
            }
        },

        watch:  {
            "$route.params.searchTerm"()  {
                /* console.log("CHANGED" + this.$route.params.searchTerm), */
                this.searchQuery = this.$route.params.searchTerm
                this.retrieveSearchResults()
            },

        },

        created()   {
            /* this.$router.replace({ name: "search", params: {searchTerm:"123"}}) */
            this.retrieveSearchResults()
        }
    }
</script>

<style scoped>
.nav  {
/*     
position:fixed;
top: 0px;
width: 100%; */
}

.content    {
    margin-top: 70px;
}
</style>