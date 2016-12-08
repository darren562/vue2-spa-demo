import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import App from './App.vue'
import Home from './components/Home.vue'
import NoticeList from './components/NoticeList.vue'
import NoticeDetail from './components/NoticeDetail.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [{
  path:'/',
  component: Home
},{
  path: '/home',
  component: Home
},{
  path: '/notice-list',
  component: NoticeList
},{
  path: '/notice-list/notice-detail',
  component: NoticeDetail
}];
const router = new VueRouter({routes});

var app = new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})
