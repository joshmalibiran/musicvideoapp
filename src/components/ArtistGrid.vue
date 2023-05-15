<template>
    <div class="artist-grid">
        <div v-for="(artist) in artists" :key="artist.id">
            <artistButton v-bind:artist="artist"/>
        </div>
    </div>
</template>

<script>
import artistButton from '@/components/ArtistButton.vue'
export default{
    props:["artists"],

    components: {
        artistButton
    }
}
</script>

<style scoped>

.artist-grid  {
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10%;
    grid-column-gap: 1em;
    grid-row-gap: 10px;
    justify-content: center;
}
</style>