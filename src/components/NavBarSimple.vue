<template>
    <div class="container">
        <p class ="left">About</p>
        <!-- <p class ="right">Sign In</p> -->
        <SpotifySignin v-if="!this.signedIn" class="right"/>
        <div v-if="this.signedIn"><p>IM IIN BB</p></div>

    </div>
</template>

<script>
import SpotifySignin from '@/components/SignInSpotify.vue'

export default{
    data()  {
        return  {
            signedIn: this.$store.state.user.username != null
        }
    },
    components: {
        SpotifySignin
    },
    methods:    {
        
    },
    computed:   {
        
    },

    watch:  {
        '$store.state.user': function() {
            if(this.$store.state.user !=null)   {
                this.signedIn = true;
            }
            console.log(this.$store.state.user)
        }
    }
}

</script>

<style scoped>
.container  {
    display:flex;
    justify-content: space-between;
}

p   {
    font-size: 15px;
}

/* .right  {
    right:0;
} */
</style>