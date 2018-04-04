import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main.vue'
import OrderList from '../components/OrderList.vue'
import OrderInfo from '../components/OrderInfo.vue'
import Register from '../components/register.vue'
import mainPage from '../components/mainPage.vue'
import SectionList from '../components/SectionList.vue'
import geren from '../components/geren.vue'
import todayList from '../components/todayList.vue'

// 挂号子路由
import nei from '../components/list_nei.vue'
import wai from '../components/list_wai.vue'
import pifu from '../components/list_pifu.vue'
import zhongliu from '../components/list_zhongliu.vue'
import fuliu from '../components/list_fuliu.vue'
import shenjing from '../components/list_shenjing.vue'
import zhongyi from '../components/list_zhongyi.vue'
import fuchan from '../components/list_fuchan.vue'
import erke from '../components/list_erke.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Register'
    },
    {
      path:'/Main',
      name:'Main',
      component:Main
    },
    {
      path: '/OrderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/OrderInfo',
      name: 'OrderInfo',
      component: OrderInfo
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/todayList',
      name: 'todayList',
      component: todayList
    },
    {
      path: '/geren',
      name: 'geren',
      component: geren
    },
    {
      path: '/SectionList',
      name: 'SectionList',
      component: SectionList,
      redirect:'/nei',
      children:[
        {
          path: '/nei',
          name: 'nei',
          component: nei
        },
        {
          path: '/wai',
          name: 'wai',
          component: wai
        },
        {
          path: '/fuchan',
          name: 'fuchan',
          component: fuchan
        },
        {
          path: '/erke',
          name: 'erke',
          component: erke
        },
        {
          path: '/pifu',
          name: 'pifu',
          component: pifu
        },
        {
          path: '/zhongliu',
          name: 'zhongliu',
          component: zhongliu
        },
        {
          path: '/fuliu',
          name: 'fuliu',
          component: fuliu
        },
        {
          path: '/shenjing',
          name: 'shenjing',
          component: shenjing
        },
        {
          path: '/zhongyi',
          name: 'zhongyi',
          component: zhongyi
        }
      ]
    }
  ]
})
