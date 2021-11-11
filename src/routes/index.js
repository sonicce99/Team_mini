import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import Certification from './Certification'
import DomainAdmin from './DomainAdmin'
import MyPage from './MyPage'
import SignIn from '~/components/SignIn'
import SignUp from '~/components/SignUp'
import AllProducts from '~/components/AllProducts'
import SalesDetails from '~/components/SalesDetails'
import PurchaseList from '~/components/PurchaseList'
import MyAccount from '~/components/MyAccount'
import ChangeUserInfo from '~/components/ChangeUserInfo'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/certification',
      component: Certification,
      children: [
        {
          name: 'SignIn',
          path: 'signin',
          component: SignIn
        },
        {
          name: 'SignUp',
          path: 'newuser',
          component: SignUp
        }
      ]
    },
    {
      path: '/mypage',
      component: MyPage,
      children: [
        {
          name: 'PurchaseList',
          path: 'purchaselist',
          component: PurchaseList
        },
        {
          name: 'MyAccount',
          path: 'myaccount',
          component: MyAccount
        },
        {
          name: 'ChangeUserInfo',
          path: 'changeuserinfo',
          component: ChangeUserInfo
        }
      ]
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
    }
  ]
})
