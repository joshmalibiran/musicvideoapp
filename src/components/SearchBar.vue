<template>
    <div class = container>
          <input class ="bar" type="text" placeholder="Search playlist, artist, or album" v-model="searchQuery" @keyup.enter="handleSearch"/>
    </div>
</template>

<script>
/* import spotifyService from '@/services/spotifyService'; */

export default  {
    data()  {
        return  {
            searchQuery: ''
        }
    },

    methods:    {
        handleSearch()  {
            this.$router.push({
                name: 'search',
                params: { searchTerm: this.searchQuery}
            })
        }
    },

    /* watch:  {
        searchQuery()   {
            spotifyService.searchPlaylist(this.$store.state.token, this.searchQuery).then(response =>   {
                console.log(response.data);
            })
        }
    } */
}
</script>

<style scoped>
/* .bar    {
    border-radius: 20px;
} */

.container {
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  /* padding: 20px; */
}

.bar {
  border: none;
  /* border-bottom: 2px solid #333; */
  padding: 10px;
  font-size: 15px;
  /* margin-right: 10px; */
  width: 600px;
  outline: none;
  border-radius: 20px;
}
</style>