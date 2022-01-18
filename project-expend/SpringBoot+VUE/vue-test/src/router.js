import Vue from 'vue'
import Router from 'vue-router'
import App from "./App";
import BookManage from "./views/BookManage";
import AddBook from "./views/AddBook";
import Index from "./views/Index"
import BookUpdate from "./views/BookUpdate";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '图文管理',
            show: true, //结合Index.vue的v-if进行显示
            component: Index,
            redirect: '/pageOne',
            children: [
                {
                    path: '/BookManage',
                    name: '查询图书',
                    component: BookManage
                },
                {
                    path: '/AddBook',
                    name: '添加图书',
                    component: AddBook
                }
            ]
        },
        {
            path: '/',
            name: '图文管理',
            show: false, //结合Index.vue的v-if进行显示
            component: Index,
            redirect: '/pageOne',
            children: [
                {
                    path: '/update',
                    name: '修改',
                    show: false,
                    component: BookUpdate
                }
            ]
        }
    ]
})
