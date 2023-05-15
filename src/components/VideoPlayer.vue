<template>
    <div class="container">
        <!-- MEDIA PLAYER{{ this.vidList[0] }} -->
        <div class="iframe">
        <!-- <iframe ref="video" v-bind:src= this.vidList[0].url
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class = "responsive-iframe" @ending="nextTrack">
        </iframe> -->
        <!-- <component v-bind:is="script" id="youtube-iframe-js-api-script" src="https://www.youtube.com/iframe_api" /> -->
        <YoutubeVue3 ref="youtube" :videoid="this.vidList[0].url" :width="1280" :height="720" :controls="1" :autoplay="1" v-on:ended="onEnded"/>
        </div>
    </div>
</template>

<script>
    import { YoutubeVue3 } from 'youtube-vue3'

    
    export default({
        props:['vidList'],
        data()  {
            return{
                /* vid: "3P1CnWI62Ik" */
            }
        },

        components: {YoutubeVue3},

        methods:    {
            playVideo()   {
                this.$refs.youtube.player.playVideo();
                console.log("PLAYEd")
            },

            onEnded() {
                console.log("ENDED")
                this.$emit("@next-track")
                
            }



        
        },


    })
</script>

<style scoped>

.container  {
    position: relative;
    overflow: hidden;
    width: 100%;
}

/* .iframe {
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
} */
</style>