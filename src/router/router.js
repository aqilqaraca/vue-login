import { createRouter,createWebHistory } from "vue-router"
import Login from '../components/Login/Login.vue'
import Home from '../components/Home/Home.vue'
import Register from '../components/Register/Register.vue'
import { store } from "../store/store"
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]


export const router = createRouter({
    history: createWebHistory(),
    routes
})

