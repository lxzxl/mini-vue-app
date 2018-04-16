import Vue from 'vue'
import Router from 'vue-router'
import PageInput from '@/pages/PageInput'
import PageOutput from '@/pages/PageOutput'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageInput',
      component: PageInput
    },
    {
      path: '/output',
      name: 'PageOutput',
      component: PageOutput
    }
  ]
})
