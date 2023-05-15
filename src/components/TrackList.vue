<template>
<div>
    
    
    <div class=content>

      <div class="header">
        <img :src = "this.currentSong.image"/>
        <div class="text">
          <span class="title">{{this.currentSong.title}}</span>
          <span>{{ this.currentSong.artist }}</span>
        </div>
      </div>

    <div class ="trackBtns">
    
      <font-awesome-icon @click="prevTrack()" icon="fa-solid fa-backward-step" />
      <font-awesome-icon @click="nextTrack()" icon="fa-solid fa-forward-step" />
        
    </div>

    <div class = "container">

            <div v-for="track in tracks.slice(1)" :key="track.url" class="track-box">

            <img :src="track.image"/>
            <div class="text">
              <span class="title">{{ track.title }}</span>
              <span class="artist">{{ track.artist }} </span>
            </div>
            
                
            </div>
        
    </div>
    </div>

</div>
</template>

<script>
export default{
    props:["tracks", "currentSong"],
    data()  {
        return  {

        }
    },
    methods:    {
        nextTrack()   {
            this.$emit("@next-track")
        },
        prevTrack() {
          this.$emit("@prev-track")
        }
    }
}
</script>

<style scoped>

.header {
  display: flex;
  height: 85px;
  align-items: center;
  /* margin: 10px; */
  padding-top: 10px;
  padding-left: 10px;
  font-size: 17

}

.header img {
  height: 75px;
  width: 75px;
}

img{
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 3px;
}

.currentInfo  {
  color:white;
}

.content  {
  display:grid;
  background-color:rgb(34, 36, 36);
  /* margin-left: 10%;
  margin-right: 3%; */
  border-radius:10px;
  height: 60%;
}

.track-box  {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 5px;
  font-size: 17
}

.text {
  display:grid;
  justify-items: start;
}

.title  {
  font-weight: bold;
}



/* .track-content  {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #444;
  flex: 1;
  font-size: 16px;

  display:block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.track-content:last-child{
    border-bottom:none;
} */

.container  {
    overflow-y:scroll;
    max-height: 400px;
    /* display:grid; */
    /* text-align: left; */
    /* margin-top: 20px; */
    /* justify-self: center; */
}



.trackBtns{
  color:white;
  display:flex;
  justify-content: space-between;
  /* grid-template-columns: 1fr 1fr; */
  margin: 20px;
  
  /* width: 30px;
  height: 100px; */
}

/* 
@media (max-width: 600px) {
    .container {
    
      height: 300px;
    }
  }

@media (max-width: 400px) {
    .container {
      height: 200px;
    }
  } */



</style>