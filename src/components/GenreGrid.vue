<template>
<div class="category-grid">
<div v-for="genre in genres" v-bind:key="genre.name">
  <genreButton v-bind:genre="genre"/>
  
</div>
</div>
</template>

<script>
import genreButton from "./GenreButton.vue";
    export default  {
    props:["genres"],


    components: {
      genreButton
    }


}



;
</script>


<style scoped>
.category-grid{ 
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
}
</style>