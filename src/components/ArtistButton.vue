<template>
<div class="container">
    <router-link class="routerLink" v-bind:to="{name:'artistpage', params:{artistid: this.artist.id}}">
        <img :src= "this.artist.images[0].url" v-if="this.artist.images.length > 0" class="artistPic"/>
        <img v-else src="@/assets/noimageicon.png" class = artistPic />
        <div class="text">
            <b>{{ artist.name }}</b>
        </div>
    </router-link>

</div>
</template>

<script>
export default  {
    props:["artist"]
}
</script>

<style scoped>

.artistPic    {
    display: block;
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.routerLink   {
    text-decoration: none;
    color:white
}

.text   {
    padding-top: 5px;
    text-align: left;
    width: 10em; /* the element needs a fixed width (in px, em, %, etc) */
    overflow: hidden; /* make sure it hides the content that overflows */
    white-space: nowrap;
    text-overflow: ellipsis; /* give the beautiful '...' effect */
}

</style>