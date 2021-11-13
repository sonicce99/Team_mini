import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import Certification from './Certification'
import DomainAdmin from './DomainAdmin'
import MyPage from './MyPage'
import AddAccount from './AddAccount'
import SignIn from '~/components/SignIn'
import SignUp from '~/components/SignUp'
import AllProducts from '~/components/AllProducts'
import SalesDetails from '~/components/SalesDetails'
import EditProduct from '~/routes/EditProduct'
import PurchaseList from '~/components/PurchaseList'
import MyAccount from '~/components/MyAccount'
import ChangeUserInfo from '~/components/ChangeUserInfo'
import AccountListChangeCheck from '~/components/AccountListChangeCheck'
import SingleProductDetails from '~/components/SingleProductDetails'


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
          component: MyAccount,
          children: [
            {
              name: 'AccountListChangeCheck',
              path: 'accountListChangeCheck',
              component: AccountListChangeCheck              
            }
          ]
        },
        {
          name: 'ChangeUserInfo',
          path: 'changeuserinfo',
          component: ChangeUserInfo
        }
      ]
    },
    {
      name: 'AddAccount',
      path: '/addaccount',
      component: AddAccount
    },
    {
      path: '/admin',
      component: DomainAdmin,
      redirect: { name : 'AllProducts' },
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
        {
          path: 'editproduct/:id',
          name: 'EditProduct',
          component: EditProduct
        },
        {
          name: 'SingleProductDetails',
          path: 'singleProductDetails/:id',
          component: SingleProductDetails,
        }
      ]
    },
  ]
})
