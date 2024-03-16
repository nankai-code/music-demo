import Vue from "vue"
import VueRouter from "vue-router"
import rank from "../components/rank/rank.vue"
import search from "../components/search/search.vue"
import singer from "../components/singer/singer.vue"
import recommend from "../components/recommend/recommend.vue"

Vue.use(VueRouter) // 引用路由中间件

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/rank",
      component: rank
    },
    {
      path: "/search",
      component: search
    },
    {
      path: "/singer",
      component: singer
    },
    {
      path: "/recommend",
      component: recommend
    }
  ]
})
