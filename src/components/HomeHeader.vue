<template>
    <div class="container">
        <h1>Vidly</h1>
        <SearchBar class="bar"/>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default{
    data()  {
        return    {

        }
    },
    components: {
        SearchBar
    }
}

</script>

<style scoped>
.container  {
    display:grid;
    justify-content: center;
    align-content: center;
}
/* .bar    {
    width: 00px;
} */

h1{
    font-size: 100px;
}
</style>