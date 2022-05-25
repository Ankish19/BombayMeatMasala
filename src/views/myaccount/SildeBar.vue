<template>
  <div>
        <div class="cart-details shadow bg-white stick-to-content mb-4">
              <div class="bg-dark dark p-4">
                <h5 class="mb-0">My Account</h5>
              </div>
              <div class="cart-summary">
                <ul class="text-list">
                  <li class="text-link">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <router-link to="/ManageAddress" class="text-left active">Manage Address</router-link>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    <router-link to="/myorder" class="text-left">My Order</router-link>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-money" aria-hidden="true"></i>
                     <router-link to="/wallet" class="text-left">My Wallet</router-link>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-question-circle" aria-hidden="true"></i
                    > <router-link to="/" class="text-left"> Help & FAQs</router-link>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-sign-out" aria-hidden="true"></i
                    > <a href="#" class="text-left" @click="logOut"> Logout</a>
                  </li>
                </ul>
              </div>
            </div>
  </div>
</template>
<script>
export default {
  methods: {
    logOut () {
      localStorage.removeItem('userData')
      this.$router.push('/')
    }
  },
  name: 'slidebar'
}
</script>
