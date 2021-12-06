import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import LoginForm from "./components/LoginForm.vue"
import ManagerNav from "./components/Manager/ManagerNav.vue"
import ModelNav from "./components/Model/ModelNav.vue"
import AddExpense from "./components/Model/AddExpense.vue"

const routes = [
    {path: "/", component: LoginForm},
    {path: "/manager", component: ManagerNav, children : [

    ]},
    {path: "/model", component: ModelNav, children : [
        {path: "addExpense", component: AddExpense},
    ]}
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
