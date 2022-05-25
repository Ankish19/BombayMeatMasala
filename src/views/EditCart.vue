<template>
<div id="checkout">
<Headbar></Headbar>
      <!-- Page Title -->
        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mb-0">Edit Cart</h1>
                        <h4 class="text-muted mb-0">Some information about our restaurant</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Section -->
        <section class="section bg-light">

            <div class="container text-left">
                <div class="row">
                    <div class="col-xl-12 col-lg-5">
                        <div class="cart-details1 shadow bg-white stick-to-content mb-4">
                            <div class="bg-dark dark p-4"><h5 class="mb-0">You order</h5></div>
                            <table class="cart-table">
                                <tr v-for="(it, index) in submitOrder.order" :key="index">
                                    <td class="title text-center">
                                        <span class="name"><a href="#" data-toggle="modal">{{ it?it.name:'' }}</a></span><br>
                                        <table v-if="it.selectedaddons && it.selectedaddons.length >0" align="center">
                                          <tr>
                                            <th>Addon</th>
                                            <th>Price</th>
                                          </tr>
                                          <tr v-for="addon in it.selectedaddons" :key="addon.id">
                                            <td>{{ addon.addon_name }}</td>
                                            <td>{{ addon.price }}</td>
                                          </tr>
                                        </table>
                                        <!--<span class="caption text-muted">26”, deep-pan, thin-crust</span>-->
                                    </td>
                                    <td align="right">
                                      <span class="fa fa-minus" @click="minusQuantity(it, index)"></span>
                                    </td>
                                    <td><input type="number"  class="form-control" v-model="add_quantity[index]" /></td>
                                    <td>
                                      <span class="fa fa-plus" @click="addQuantity(index)"></span>
                                    </td>
                                    <td class="price" v-if="it.addOnTotal">${{ it?it.addOnTotal:'' }}</td>
                                    <td class="price" v-else>${{ it?it.price:'' }}</td>
                                    <td class="actions">
                                        <a class="action-icon cursor-pointer" @click="deleteItem(index)"><i class="ti ti-close"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td>
                                      <button class="btn btn-primary" @click="cartUpdate()">
                                        Update
                                      </button>
                                  </td>
                                </tr>
                            </table>
                            <div class="cart-empty">
                                <i class="ti ti-shopping-cart"></i>
                                <p>Your cart is empty...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

<Footer></Footer>
</div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import { getRestaurantInfo } from '@/store/api'
import { getLocalStorage } from '@/store/service'

export default {
  components: { Headbar, Footer },
  name: 'Editcart',
  data () {
    return {
      add_quantity: [],
      deliveryCharges: 0,
      tipBox: 0,
      showAddress: 0,
      addresses: [],
      amount: 0,
      form: {
        name: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        street: '',
        coupon: ''
      },
      couponDetail: '',
      discountPrice: 0,
      discountPercent: 0,
      discountLimit: '',
      item: [],
      tipTax: {
        tips: {},
        taxPercentage: {},
        tipsvalue: []
      },
      delivery_amount: 0,
      customTip: false,
      user: {},
      orderTotal: 0,
      taxes: [],
      taxTotal: 0,
      totalAmount: 0,
      storeInfo: '',
      delivery_type: '',
      submitOrder: {
        user: {
          data: ''
        },
        order: [],
        coupon: '',
        quantity: 0,
        location: {
          lat: '',
          lng: '',
          address: '',
          house: null,
          tag: null
        },
        order_comment: null,
        total: {
          productQuantity: '',
          totalPrice: '',
          tip_to_driver: ''
        },
        method: 'COD',
        payment_token: '',
        delivery_type: '',
        partial_wallet: '',
        dis: 0,
        pending_payment: '',
        tipAmount: 0
      }
    }
  },
  mounted () {
    getRestaurantInfo().then(res => {
      this.storeInfo = res.data
    })
    this.checkCart()
  },
  methods: {
    checkCart () {
      if (getLocalStorage('cart') && getLocalStorage('cart').length > 0) {
        this.showItem()
      } else {
        this.$router.push('/menu')
      }
    },
    cartUpdate () {
      var storedNames = JSON.parse(localStorage.getItem('cart'))
      var name = []
      for (var j = 0; j < storedNames.length; j++) {
        if (this.add_quantity[j] === '0') {
          console.log(this.add_quantity[j])
          storedNames[j].quantity = 1
          // name.push(storedNames[j])
        } else {
          storedNames[j].quantity = this.add_quantity[j]
          name.push(storedNames[j])
        }
      }
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(name))
      this.$toast.success('Order updated successfully')
      this.$router.push('/checkout')
    },
    addQuantity (index) {
      var storedNames = JSON.parse(localStorage.getItem('cart'))
      var name = []
      for (var j = 0; j < storedNames.length; j++) {
        if (j === index) {
          this.add_quantity[index] = storedNames[index].quantity++
          name.push(storedNames[j])
        } else {
          name.push(storedNames[j])
        }
      }
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(name))
      this.showItem()
    },
    minusQuantity (item, index) {
      if (item.quantity > 1) {
        var storedNames = JSON.parse(localStorage.getItem('cart'))
        var name = []
        // var name = storedNames.slice(index, 1)
        // localStorage.setItem('cart', JSON.stringify(name))
        for (var j = 0; j < storedNames.length; j++) {
          if (j === index) {
            this.add_quantity[index] = storedNames[index].quantity--
            name.push(storedNames[j])
          } else {
            name.push(storedNames[j])
          }
        }
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(name))
        this.showItem()
      }
    },
    showItem () {
      this.item = getLocalStorage('cart')
      this.submitOrder.order = getLocalStorage('cart')
      for (var i = 0; i < this.item.length; i++) {
        this.add_quantity[i] = this.item[i].quantity
      }
    },
    deleteItem (index) {
      var storedNames = JSON.parse(localStorage.getItem('cart'))
      var name = []
      // var name = storedNames.slice(index, 1)
      // localStorage.setItem('cart', JSON.stringify(name))
      for (var j = 0; j < storedNames.length; j++) {
        if (j !== index) {
          name.push(storedNames[j])
        }
      }
      this.$toast.success('An item removed.')
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(name))
      this.showItem()
      this.checkCart()
    },
    getUserData () {
      this.submitOrder.user.data = getLocalStorage('userData')
      this.form.name = getLocalStorage('userData').name
      this.form.email = getLocalStorage('userData').email
      this.form.phone = getLocalStorage('userData').phone
      this.delivery_type = getLocalStorage('userData').delivery_type

      // this.submitOrder.delivery_type = getLocalStorage('userData').delivery_type
      this.submitOrder.total.productQuantity = this.item.length
      this.submitOrder.location.address = getLocalStorage('userData').default_address.address
      this.submitOrder.location.house = getLocalStorage('userData').default_address.house
      this.submitOrder.location.lat = getLocalStorage('userData').default_address.latitude
      this.submitOrder.location.lng = getLocalStorage('userData').default_address.longitude
      this.submitOrder.location.tag = getLocalStorage('userData').default_address.tag
    }
  }
}
</script>

<style lang="scss" scoped>
.cursor-pointer{
  cursor: pointer !important;
}

#checkout{
  li.tipValue {
    list-style: none;
    display: inline-block;
    padding: 5px 20px;
    border: 1px solid #ccc;
    margin: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
}
}
</style>
