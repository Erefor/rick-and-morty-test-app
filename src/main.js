import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import '../node_modules/materialize-css/dist/css/materialize.css'
import MainPage from './Pages/MainPage.vue';
import CharacterPage from './Pages/CharacterPage.vue';

const store = createStore({
    state(){
        return {
            characterName : ''
        }
    }
});
const route = createRouter({
    history : createWebHistory(),
    routes : [
        {path:'/', component: MainPage},
        {path: '/character', component : CharacterPage}
    ]
});
const app = createApp(App);
app.use(route);
app.use(store);
app.use(VueAxios, axios);
app.mount('#app')
