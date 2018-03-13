import Vue from 'vue'
import Router from 'vue-router'
import ContactIndex from '@/components/ContactIndex'
import ContactCreate from '@/components/ContactCreate'
import Placeholder from '@/components/Placeholder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: ContactIndex
    }, {
      path: '/create',
      name: 'New Contact',
      component: ContactCreate
    }, {
      path: '/:id',
      name: 'Contact Details',
      component: Placeholder
    }, {
      path: '/:id/edit',
      name: 'Update Contact',
      component: Placeholder
    }
  ]
})
