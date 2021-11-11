import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import DomainAdmin from './DomainAdmin'
import AllProducts from '~/components/AllProducts'
import SalesDetails from '~/components/SalesDetails'
import EditProduct from '~/routes/EditProduct'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/admin',
      component: DomainAdmin,
      children: [
        {
          name: 'AllProducts',
          path: 'allproducts',
          component: AllProducts
        },
        {
          name: 'SalesDetails',
          path: 'salesdetails',
          component: SalesDetails
        },
      ]
    },
    {
      path: '/editproduct/:id',
      name: 'editproduct',
      component: EditProduct
    }
  ]
})
