import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';

import { IonicVueRouter } from '@ionic/vue';
Vue.use(IonicVueRouter);

Vue.use(Router)

export default new IonicVueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});