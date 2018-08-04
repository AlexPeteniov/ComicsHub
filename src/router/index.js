/* eslint no-undef: 0 */
import Vue from 'vue'
import Router from 'vue-router'
import Comics from '@/components/Comics/Comics'
import News from '@/components/Comics/News'
import AddComics from '@/components/Comics/AddComics'
import Info from '@/components/Comics/Info'

import Copyright from '@/components/Comics/Copyright'
/*import Profile from '@/components/User/Profile'*/
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Home from '@/components/Home'
import Comic from '@/components/Comics/Comic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/Comics',
      name: 'Comics',
      component: Comics
    },
      {
      path: '/Comics/new',
      name: 'AddComics',
      component: AddComics
    },
    {
      path: '/Comics/:id',
      name: 'Comic',
      props:true,
      component: Comic
    },
    {
      path: '/Copyright',
      name: 'Copyright',
      component: Copyright
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    },
    {
      path: '/News',
      name: 'News',
      component: News
    }, /*{
      path: '/profile',
      name: 'Profile',
      component: Profile
    },*/
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
