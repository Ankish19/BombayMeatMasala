import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'
import { getLocalStorage } from '../store/service'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Forget.vue')
  },
  {
    path: '/otp',
    name: 'Otp',
    component: () => import('../views/Otp.vue')
  },
  {
    path: '/otpverify',
    name: 'OtpVerify',
    component: () => import('../views/OtpVerify.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: () => import('../views/myaccount/MyAccount.vue')
  },
  {
    path: '/manageaddress',
    name: 'ManageAddress',
    component: () => import('../views/myaccount/ManageAddress.vue')
  },
  {
    path: '/addmanageaddress',
    name: 'AddManageAddress',
    component: () => import('../views/myaccount/AddManageAddress.vue')
  },
  {
    path: '/myorder',
    name: 'MyOrder',
    component: () => import('../views/myaccount/MyOrder.vue')
  },
  {
    path: '/orderdetails',
    name: 'OrderDetails',
    component: () => import('../views/myaccount/OrderDetails.vue')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../views/myaccount/Wallet.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  const userData = getLocalStorage('userData')

  if (userData) {
    if (to.path === '/login' || to.path === '/register' || to.path === '') {
      return next('/')
    }
  } else if (!userData) {
    if (to.path === '/myaccount' || to.path === '/checkout' || to.path === '/ManageAddress' || to.path === '/addmanageaddress' || to.path === '/myorder' || to.path === '/wallet') {
      return next('/login')
    }
  } else {
    return next()
  }
  return next()
})
export default router
