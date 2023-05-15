/* import Vue from 'vue'
import Vuex from'vuex'

Vue.use(Vuex)

const currentToken = localStorage.getItem('token')

export default new Vuex.Store({
    state:{
        token: currentToken || 'test'
    },
    mutations:{
        SET_AUTH_TOKEN(state, token)    {
            state.token = token;
            localStorage.setItem('token',token)
        }
    }
}) */

import {createStore} from 'vuex'
/* const currentToken = localStorage.getItem('token') */
const store = createStore({
    state:{
        token: '',
        user:''
    },
    mutations:{
        SET_AUTH_TOKEN(state, token)    {
            state.token = token;
            /* localStorage.setItem('token',token) */
        },
        SET_USER(state, user)   {
            state.user = user;
        }

    }
})

export default store;

