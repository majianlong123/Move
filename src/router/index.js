import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}


export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/page/home'),
      redirect: '/nowPlaying',
      children: [
        {
          path: '/nowPlaying',
          name: 'nowPlaying',
          component: () => import('@/page/nowPlaying')
        },
        {
          path: '/comingSoon',
          name: 'comingSoon',
          component: () => import('@/page/comingSoon')
        }
      ]
    },
  ]
})
