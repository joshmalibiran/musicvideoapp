<template>
    <div>
        <div class="container">
        <router-link v-bind:to="{name: 'categories', params: {genreid: this.genre.id}}" class ="content">
            <img :src= "this.genre.icons[0].url" class="genrePic"/>
            <div class ="text">{{ genre.name }}</div>
        </router-link>
        </div>
        
    </div>
</template>
<script>

export default  {
    name: 'category-button',
    props: ['genre'],
    data()  {
        return  {
            
        }
    }
    
}
</script>
<style scoped>
.container  {
    display: grid;
    background-color: rgb(35, 33, 39);
    border-radius: 10px;
    /* height: 150px */
    
}

.content    {
    display:flex;
    align-items: center;
    text-decoration: none;
    color:white;
}

.genrePic   {
    height: 50px;
    width: 50px;
    border-radius: 100px;
    margin-right: 10px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom:5px;
}


</style>