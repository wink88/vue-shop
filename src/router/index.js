import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CovInfo from '../views/CovInfo/CovInfo.vue'
// import Check from '../views/CovInfo/Check.vue'
const Check=()=>import("../views/CovInfo/Check.vue")
const Area=()=>import("../views/CovInfo/Area.vue")
const Prevention=()=>import('../views/CovInfo/Prevention.vue')
const CityMap=()=>import('../views/CovInfo/CityMap.vue')
const Travel=()=>import("../views/CovInfo/Travel.vue")
const City=()=>import("../views/CovInfo/City.vue")
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'CovInfo',
    component: CovInfo
  },
  {
    path:"/check",
    name:"Check",
    component:Check
  },
  {
    path:"/area",
    name:"Area",
    component:Area
  },
  {
    path:"/prevention",
    name:"Prevention",
    component:Prevention
  },
  {
    path:"/cityMap/:cityName",
    name:"CityMap",
    component:CityMap,
    props:true
  },
  {
    path:"/travel",
    name:"Travel",
    component:Travel
  },
  {
    path:"/city",
    name:"City",
    component:City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
