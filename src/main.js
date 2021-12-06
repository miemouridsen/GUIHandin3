import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import LoginForm from "./components/LoginForm.vue"
import ManagerNav from "./components/Manager/ManagerNav.vue"
import ModelNav from "./components/Model/ModelNav.vue"
import AddExpense from "./components/Model/AddExpense.vue"
import AddModel from "./components/Manager/AddModel.vue"
import SeeJobs from "./components/Manager/SeeJobs.vue"

const routes = [
    {path: "/", component: LoginForm},
    {path: "/manager", component: ManagerNav, children : [
        {path: "addModel", component: AddModel},
        {path: "seeJobs", component: SeeJobs}
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
