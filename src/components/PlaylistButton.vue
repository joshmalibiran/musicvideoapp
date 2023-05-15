<template>
    <div class = "container">
        <router-link class="routerLink" v-bind:to="{name:'player', params:{playlistid: this.playlist.id}}">
        <img :src= "this.playlist.images[0].url" class="playlistPic"/>
        <div class = "text">
            <b>{{ this.playlist.name }}</b>
        </div>
        </router-link>
    </div>
</template>

<script>

export default  {
    props:["playlist"]
}
</script>

<style scoped>
.playlistPic    {
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