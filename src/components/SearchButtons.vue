<template>
    <div class = container>
        <p class="transparent-button" @click="onSelect(1)" :class="{'highlighted': selected === 1}">Playlist</p>
        <p class="transparent-button" @click="onSelect(2)" :class="{'highlighted': selected === 2}">Artist</p>
        <p class="transparent-button" @click="onSelect(3)" :class="{'highlighted': selected === 3}">Album</p>
    </div>
</template>

<script>

export default{
    data()  {
        return  {
            selected: 1
        }
    },

    methods:    {
        onSelect(option)    {
            this.selected = option
        }
    },

    watch:  {
        selected()  {
            if(this.selected === 1) {
                this.$emit("@select-playlist")
            }
            else if(this.selected === 2)    {
                this.$emit("@select-artist")
            }
            else if(this.selected === 3)    {
                this.$emit("@select-album")
            }
        }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  /* justify-content: space-between; */
}

.transparent-button {
  background-color: transparent;
  color: white;
  /* border: 2px solid white; */
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.highlighted {
  background-color: white;
  color: black;
}
</style>