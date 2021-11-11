import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from "./LogIn"
import SignUp from "./SignUp"
import Main from "./Main"
import About from "./About"
import SingleProductDetail from "./SingleProductDetail"
import AddItem from "./AddItem"

export default createRouter({
  //Hash
  history: createWebHashHistory(),
  //pages
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/logIn',
      component: LogIn
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/singleproductdetail',
      component: SingleProductDetail
    },
    {
      path: '/addItem',
      component: AddItem
    }
  ]
})
