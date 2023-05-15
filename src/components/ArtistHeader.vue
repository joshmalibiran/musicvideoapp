<template>

    <div class ="container">
        <img :src= "this.artist.images[0].url" v-if="this.artist.images.length > 0" class="artistPic"/>
        <img v-else src="@/assets/noimageicon.png" class = artistPic />
        <h1 class="text">{{ this.artist.name }}</h1>
    </div>

</template>

<script>

export default{
    data()  {
        return{

        }
    },

    props:["artist"]
}
</script>

<style scoped>
.container  {
    display: flex;
    align-items: center;
    /* background-color: red; */
}

.artistPic  {
    display: block;
    height: 250px;
    width: 250px;
    object-fit: cover;
    border-radius: 50%;
}

.text   {
    font-size: 50px;
    color: white;
    font-family: "inter";
    margin-left: 10px;
}
</style>