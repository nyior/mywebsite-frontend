import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import PostDetail from "./views/PostDetail.vue"
import SeriesDetail from "./views/SeriesDetail.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/blog",
      name: "blog",
      component: Blog
    },

    {
      path: "/series_detail/:slug",
      name: "series_detail",
      component: SeriesDetail,
      props: true
    },

    {
      path: "/post_detail/:slug",
      name: "post_detail",
      component: PostDetail,
      props: true
    },


    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
