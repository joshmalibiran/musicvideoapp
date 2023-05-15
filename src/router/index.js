/* import Vue from 'vue' */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import CategoryPage from '../views/CategoryPage.vue'
import VideoPlayerPage from '../views/VideoPlayerPage.vue'
import SearchPage from '../views/SearchPage.vue'
import ArtistPage from '../views/ArtistPage.vue'
import AlbumPage from '../views/ArtistAlbumPage.vue'

/* Vue.use(Router) */

/* const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
            
        },
        {
            path: '/categories',
            name: 'categories',
            component: CategoryPage,
        
        }


    ]
}) */

const routeInfo =   [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
        
    },
    {
        path: '/categories/:genreid',
        name: 'categories',
        component: CategoryPage,
    
    },
    {
        path:'/player/:playlistid',
        name:'player',
        component: VideoPlayerPage,
    },
    {
        path:'/search/:searchTerm',
        name:'search',
        component: SearchPage
    },
    {
        path:'/artist/:artistid',
        name:'artistpage',
        component: ArtistPage
    },
    {
        path:'/albums/:artistid',
        name:'albumpage',
        component: AlbumPage
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes: routeInfo
})



export default router;