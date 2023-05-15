<template>
    <div>
        <navBar/>
        <div class="content">
            <div>
                <div v-if="this.queueList.length > 0" class="videoPlayer">
                    <videoPlayer v-bind:vidList="queueList" v-on:@next-track="nextTrack"/>
                </div>
                <div v-else class = loadVidPlayer>
                    <h2>Loading...</h2>
                </div>
            </div>
            <div class="trackInfo">
                <trackList v-bind:tracks="this.queueList" v-bind:currentSong="this.queueList[0]" v-on:@next-track="nextTrack" v-on:@prev-track="previousTrack" class="trackList"/>
            </div> 


        </div>
    </div>
</template>

<script>
import navBar from '../components/NavBar.vue'
import spotifyService from '@/services/spotifyService'
import imvdbService from '@/services/imvdbService'
import trackList from '@/components/TrackList.vue'
import videoPlayer from '@/components/VideoPlayer.vue'



export default{
    data()  {
        return{
            tracks:[],
            trackHistory:[],
            videoId: [],
            queueList:[],
            /* temp: null, */
            musicVideoList:[],
            currentURL:null,
            isAlbum:''
        }
    },
    components: {
        trackList,
        videoPlayer,
        navBar
    },

    methods:    {
        getTracks() {
            spotifyService.getTracksByPlaylist(this.$store.state.token, this.$route.params.playlistid).then(response => {
                if(response.status === 200) {
                    console.log(response.data);
                    this.tracks = response.data.items;
                    this.getVideoList()
                }
            }).catch(error =>   {
                console.log("ERROR" + error)
                spotifyService.getTracksByAlbum(this.$store.state.token, this.$route.params.playlistid).then(response =>    {
                    console.log(response.data.items.length)
                    for(let i = 0; i < response.data.items.length; i++)   {
                        this.tracks.push({track: response.data.items[i]})
                    }
                    /* this.getAlbumImage() */
                    this.isAlbum = true;
                }) 

            })
        },

        getAlbumImage() {
            console.log("TEST")
            spotifyService.getAlbumByid(this.$store.state.token, this.$route.params.playlistid).then(response =>   {
                console.log("IN")
                console.log(response.data)
                this.getVideoList()
            }).catch(error =>   {
                console.log(error)
            })

        },

        nextTrack() {
            console.log("LISTEN")
            if(this.tracks.length > 0)  {
                this.trackHistory.push(this.queueList.shift());
            }
        },
        previousTrack() {
            if(this.trackHistory.length > 0)    {
                this.queueList.unshift(this.trackHistory.pop());
            }
        },
        //Queries MVDB for music video
        getVideoList()  {
           console.log(this.tracks.length)
            for(let i = 0; i < this.tracks.length; i++) {
                
                let searchTerm = this.tracks[i].track.name + " by " + this.tracks[i].track.artists[0].name;
                /* let searchTerm = this.tracks[i].name + " by " + this.tracks[i].artists[0].name; */
                
                console.log("Search " + searchTerm)
                imvdbService.search(searchTerm).then(response =>   {
                    imvdbService.getVideoById(response.data.results[0].id).then(response => {
                        this.musicVideoList.push(response.data)
                        this.populateQueue(response.data)
                        /* console.log(response.data.song_title) */
                    })
                }).catch((error) => {
                    if(error.response.status === 500)   {
                        console.log("No results found")
                    }
                    else    {
                        console.log("Some other error")
                    }
                })
            }   


            
        },

        populateQueue(currentMV) {
            //check if track and video matches!
            for(let i = 0; i < this.tracks.length; i++) {
                if(currentMV.song_title === this.tracks[i].track.name)    {
                    this.queueList.push({title: this.tracks[i].track.name, artist: this.tracks[i].track.artists[0].name, url: currentMV.sources[0].source_data, image: this.tracks[i].track.album.images[0].url })
                    /* console.log(currentMV.song_title) */
                }
                /* if(currentMV.song_title === this.tracks[i].name )    {
                    this.queueList.push({title: this.tracks[i].name, artist: this.tracks[i].artists[0].name, url: currentMV.sources[0].source_data })
                } */
            }
        },

        populateQueueofAlbums(currentMV)    {
            for(let i = 0; i < this.tracks.length; i++) {


                if(currentMV.song_title === this.tracks[i].track.name)    {

                    


                    this.queueList.push({title: this.tracks[i].track.name, artist: this.tracks[i].track.artists[0].name, url: currentMV.sources[0].source_data, image: this.tracks[i].track.album.images[0].url })
                    
                }
            }
        }
    },

    watch:  {
        isAlbum()   {
            console.log("WATCHER")
            spotifyService.getRecommendedTracks(this.$store.state.token, "4q3ewBCX7sLwd24euuV69X", ["3RQQmkQEvNCY4prGKE6oc5", "0gX9tkL5njRax8ymWcXARi"]).then(response =>  {
                console.log(response.data)
            })



            /* for(let i = 0; i < this.tracks.length; i++)  {
                spotifyService.getTrackByTrackid(this.$store.state.user.access_token, this.tracks[i].track.id).then(response =>   {
                    console.log("IN")
                    console.log(response.data)
                }).catch(error =>   {
                    console.log(error)
                })
            } */

            /* spotifyService.getTrackByTrackid(this.$store.state.token, this.$route.params.playlistid).then(response =>   {
                console.log("IN")
                console.log(response.data)
            
            }).catch(error =>   {
                console.log(error)
            }) */
        }
    },

    created()   {
        this.getTracks()
    },

    mounted()   {
        /* this.currentURL = this.queueList[0].URL; */
        /* console.log(this.queueList) */
        /* this.currentURL = this.queueList[0].url */
    }
}
</script>

<style scoped>


.content    {
    display:grid;
    grid-template-columns: 3fr 1fr;
    margin-top:70px;
 
}

.trackInfo  {
    /* background-color:rgb(34, 36, 36);
    margin-left: 3%;
    border-radius:20px;
    height: 60%; */
}

.loadVidPlayer   {
    min-height: 720px;
    min-width: 1280px;
    background-color: rgb(10, 10, 10);
    display: flex;
    justify-content: center;
    align-items: center;
}

.videoPlayer    {
    margin-top: 0;   
    width: 100%;
    height: 100%;
}
</style>