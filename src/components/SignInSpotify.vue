<template>
    <div>

        <p v-on:click="onClick()">Sign In</p>

    </div>
</template>

<script>

import spotifyService from '@/services/spotifyService'



export default{
    data()  {
        return {

        }
    }, 
    methods:    {
        onClick()   {
            /* https://accounts.spotify.com/en/login?continue=https%3A%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Dplaylist-read-private%2Buser-read-private%2Bplaylist-modify-private%2Bplaylist-read-collaborative%26response_type%3Dtoken%26redirect_uri%3Dhttp%253A%252F%252Fwww.vid.fish%26client_id%3Dfbdc561e5d964c43a23dbfa5d39673c7 */
            /* eslint-disable */
            const space_delimiter = "%20"
            const spotify_endpoint = "https://accounts.spotify.com/authorize"
            const clientId ='60064fa482034b079e2c478ff5d06725'
            const clientSecret = '17280e67fa8d4e6eb199c011421bf9c3' 
            const redirect = 'http://localhost:8080/'
            const scopes = ["user-read-private", "playlist-read-private"]
            const scopes_url_param = scopes.join(space_delimiter)
            window.location = `${spotify_endpoint}?client_id=${clientId}&redirect_uri=${redirect}&scope=${scopes_url_param}&response_type=token&show_dialog=true`
            
        },

        getParamsFromAuth(hash) {

            hash = hash.substring(1)
            const params = hash.split("&")
            const paramsSplitUp = params.reduce((accumulater, currentValue) => {
                /* console.log(currentValue); */
                const [key, value] = currentValue.split("=");
                accumulater[key] = value;
                return accumulater;
            }, {});
            /* console.log(paramsSplitUp.access_token) */
            
            spotifyService.getUserInfo(paramsSplitUp.access_token).then(response =>    {
                paramsSplitUp.username = response.data.display_name;

                if(response.data.images.length > 0) {
                    paramsSplitUp.profilePic = response.data.images[0].url
                }
            })



            return paramsSplitUp;
           
        },

    },
    created() {
        if(window.location.hash)    {
            this.$store.commit("SET_USER", (this.getParamsFromAuth(window.location.hash)))
            /* this.getUserInfo() */
        }
    }
}

</script>

<style scoped>

</style>