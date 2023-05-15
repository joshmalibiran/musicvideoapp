<template>
<div class="container">

    <div class ="header">
        <p class = "left">Albums</p>

        
        
        <div v-if="albums.length > 9" >
            <router-link v-bind:to="{name:'albumpage', params:{artistid: this.albums[0].artists[0].id}}">
                <p class ="right">
                    Show all
                </p>
            </router-link>
        </div>
        <!-- </router-link> -->
    </div>

    <div v-if="albums.length > 9" class="grid">
        <!-- more than 6 -->
        <div v-for="index in 9" :key="index">
            <!-- {{ this.albums[index - 1].name }} -->
            <albumButton v-bind:playlist="this.albums[index-1]"/>
        </div>
    </div>

    <div v-else class="grid">
        <!-- //6 or less -->
        <div v-for="(album) in albums" :key="album.id">
            <!-- {{ album.name }} -->
            <albumButton v-bind:playlist="album"/>
        </div>
    </div>


    

</div>
</template>

<script>
import albumButton from '@/components/PlaylistButton.vue'

export default{
    data()  {
        return  {
            emptyNum: this.albums.length
        }
    },

    props:["albums"],

    components: {
        albumButton
    }

}

</script>

<style scoped>

router-link {
    text-decoration: none;
}

a{
    color:white;
}

.text   {
    
}

.left   {
    float:left;
}

.right  {
    float:right;
}
.header {
    /* display:inline-block;
    width: 100%; */

}
.container  {
    display:grid;
    /* width: 2000px; */
}
.grid  {
    display: grid;
    /* grid-template-columns: 10% 10% 10% 10% 10% 10%;  */
    grid-template-columns: 200px 200px 200px 200px 200px 200px 200px 200px 200px; 
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
}
</style>

