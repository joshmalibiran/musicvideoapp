<template>
    <div class="playlist-grid">
        <div v-for="(playlist) in playlists" :key="playlist.name">
            <playlistButton v-bind:playlist="playlist"/>
        </div>
    </div>
</template>

<script>
import playlistButton from "./PlaylistButton.vue"
export default{
    props:["playlists"],

    components: {
        playlistButton
    }
}
</script>

<style scoped>

.playlist-grid  {
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10%;
    grid-column-gap: 1em;
    grid-row-gap: 10px;
    justify-content: center;
}
</style>