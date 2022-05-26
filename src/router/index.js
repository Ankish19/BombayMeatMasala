import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'
import { getLocalStorage } from '../store/service'
import { resendVerifyOtp } from '../store/api'

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
    component: () => import('@/views/About.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/Forget.vue')
  },
  {
    path: '/otp',
    name: 'Otp',
    component: () => import('@/views/Otp.vue')
  },
  {
    path: '/otpverify',
    name: 'OtpVerify',
    component: () => import('@/views/OtpVerify.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/CheckOut.vue')
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: () => import('@/views/myaccount/MyAccount.vue')
  },
  {
    path: '/manageaddress',
    name: 'ManageAddress',
    component: () => import('@/views/myaccount/ManageAddress.vue')
  },
  {
    path: '/addmanageaddress',
    name: 'AddManageAddress',
    component: () => import('@/views/myaccount/AddManageAddress.vue')
  },
  {
    path: '/myorder',
    name: 'MyOrder',
    component: () => import('@/views/myaccount/MyOrder.vue')
  },
  {
    path: '/orderdetails/:id/:uniqueId',
    name: 'OrderDetails',
    component: () => import('@/views/myaccount/OrderDetails.vue')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('@/views/myaccount/Wallet.vue')
  },
  {
    path: '/editcart',
    name: 'EditCart',
    component: () => import('@/views/EditCart.vue')
  },
  // {
  //   path: '/updateprofile',
  //   name: 'UpdateProfile',
  //   component: () => import('@/views/myaccount/UpdateProfile.vue')
  // },
  // {
  //   path: '/privacypolicy',
  //   name: 'privacypolicy',
  //   component: () => import('@/views/PrivacyPolicy.vue')
  // },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/ResetPassword.vue')
  },
  // {
  //   path: '/change-password',
  //   name: 'ChangePassword',
  //   component: () => import('../views/ChangePassword.vue')
  // },
  {
    path: '/table-login/:table',
    name: 'tableLogin',
    component: () => import('../views/Table_login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  const userData = getLocalStorage('userData')
  const userDataVerify = getLocalStorage('userDataVerify') ?? false

  if (userData) {
    if (to.path === '/login' || to.path === '/register' || to.path === '' || to.path === '/forget' || to.path === '/reset-password') {
      return next('/')
    } else if (userData.verified_at === null || userDataVerify === false) {
      if (to.path !== '/otpverify' || to.path === '/myaccount' || to.path === '/checkout' || to.path === '/editcart' || to.path === '/ManageAddress' || to.path === '/addmanageaddress' || to.path === '/myorder' || to.path === '/wallet') {
        // console.log(userData.verified_at)
        const form = {
          email: userData.email,
          phone: userData.phone
        }
        resendVerifyOtp(form).then(res => {
          console.log(res.data)
        })
        return next({
          path: '/otpverify',
          query: { redirect: 'email' }
        })
      } else {
        return next()
      }
    }
  } else if (!userData) {
    if (to.path === '/myaccount' || to.path === '/checkout' || to.path === '/editcart' || to.path === '/ManageAddress' || to.path === '/addmanageaddress' || to.path === '/myorder' || to.path === '/wallet') {
      return next('/login')
    }
  } else {
    return next()
  }
  return next()
})
export default router
