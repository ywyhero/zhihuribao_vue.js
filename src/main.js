// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: resolve => require(['./components/Home.vue'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['./components/Home.vue'], resolve)
    },
    {
      path: '/home/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/normal',
      component: resolve => require(['./components/Normal.vue'], resolve)
    },
    {
      path: '/normal/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/recommend',
      component: resolve => require(['./components/Recommend.vue'], resolve)
    },
    {
      path: '/recommend/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/movies',
      component: resolve => require(['./components/Movies.vue'], resolve)
    },
    {
      path: '/movies/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/dull',
      component: resolve => require(['./components/Dull.vue'], resolve)
    },
    {
      path: '/dull/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/design',
      component: resolve => require(['./components/Design.vue'], resolve)
    },
    {
      path: '/design/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/takungpao',
      component: resolve => require(['./components/Takungpao.vue'], resolve)
    },
    {
      path: '/takungpao/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/economics',
      component: resolve => require(['./components/Economics.vue'], resolve)
    },
    {
      path: '/economics/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/internet',
      component: resolve => require(['./components/Internet.vue'], resolve)
    },
    {
      path: '/internet/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/games',
      component: resolve => require(['./components/Games.vue'], resolve)
    },
    {
      path: '/games/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/music',
      component: resolve => require(['./components/Music.vue'], resolve)
    },
    {
      path: '/music/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/manga',
      component: resolve => require(['./components/Manga.vue'], resolve)
    },
    {
      path: '/manga/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    },
    {
      path: '/sport',
      component: resolve => require(['./components/Sport.vue'], resolve)
    },
    {
      path: '/sport/:id',
      component: resolve => require(['./detailContent/ListDetailContent.vue'], resolve)
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
