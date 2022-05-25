<template>
<div id="checkout">
<Headbar></Headbar>
      <!-- Page Title -->
        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mb-0">Checkout</h1>
                        <h4 class="text-muted mb-0">Some information about our restaurant</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Section -->
        <section class="section bg-light">

            <div class="container text-left">
                <div class="row">
                    <div class="col-xl-4 col-lg-5">
                        <div class="cart-details shadow bg-white stick-to-content mb-4">
                            <div class="bg-dark dark p-4"><h5 class="mb-0">You order</h5></div>
                            <table class="cart-table">
                                <tr v-for="(it, index) in submitOrder.order" :key="index">
                                    <td class="title">
                                        <span class="name"><a href="#product-modal" data-toggle="modal">{{ it?it.name:'' }}</a></span>
                                        <!--<span class="caption text-muted">26”, deep-pan, thin-crust</span>-->
                                    </td>
                                    <td>
                                        <span class="fa fa-plus" @click="addQuantity(index)"></span>
                                          {{ it.quantity }}
                                        <span class="fa fa-minus" @click="minusQuantity(it, index)"></span>
                                    </td>
                                    <td class="price" v-if="it.addOnTotal">{{ it.quantity }}x ${{ it?it.addOnTotal:'' }}</td>
                                    <td class="price" v-else>{{ it.quantity }}x ${{ it?it.price:'' }}</td>
                                    <td class="actions">
                                        <a href="#" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
                                        <a href="#/" class="action-icon" @click="deleteItem(index)"><i class="ti ti-close"></i></a>
                                    </td>
                                </tr>
                                <!--<tr>
                                    <td class="title">
                                        <span class="name">Weekend 20% OFF</span>
                                    </td>
                                    <td class="price text-success">-$8.22</td>
                                    <td class="actions"></td>
                                </tr>-->
                            </table>
                            <div class="cart-summary">
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Order total:</div>
                                    <div class="col-5"><strong>+$<span class="cart-products-total">{{ orderTotal.toFixed(2) }}</span></strong></div>
                                </div>
                                <div class="row" v-if="orderTotal >= 10 && discountPrice > 0">
                                    <div class="col-7 text-right text-muted">Discount:</div>
                                    <div class="col-5"><strong>-$<span class="cart-products-total">{{ discountPrice }}</span></strong></div>
                                </div>
                                <div class="row" v-if="deliveryCharges == 1">
                                    <div class="col-7 text-right text-muted">Delivery:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">{{ delivery_amount }}</span></strong></div>
                                </div>
                                <div class="row" v-if="submitOrder.tipAmount">
                                    <div class="col-7 text-right text-muted">Tip:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">{{ submitOrder.tipAmount }}</span></strong></div>
                                </div>
                               <div class="row">
                                    <div class="col-7 text-right text-muted">Total Tax({{ tipTax?tipTax.taxPercentage.value:'' }}%):</div>
                                    <div class="col-5">
                                        <strong>+$<span class="cart-delivery">{{ taxTotal?taxTotal.toFixed(2):0 }}</span></strong>
                                    </div>
                                </div>
                                <hr class="hr-sm">
                                <div class="row text-lg">
                                    <div class="col-7 text-right text-muted">Total:</div>
                                    <div class="col-5">
                                      <strong>$
                                        <span class="cart-total" v-if="deliveryCharges == 1">
                                          {{ totalAmount?(parseFloat(totalAmount.toFixed(2))+parseFloat(submitOrder.tipAmount)+parseFloat(delivery_amount.toFixed(2))).toFixed(2):0 }}
                                        </span>
                                        <span class="cart-total" v-else>
                                          {{ totalAmount?parseFloat(totalAmount.toFixed(2))+parseFloat(submitOrder.tipAmount.toFixed(2)):0 }}
                                        </span>
                                      </strong>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-empty">
                                <i class="ti ti-shopping-cart"></i>
                                <p>Your cart is empty...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-7 order-lg-first">
                        <div class="bg-white p-4 p-md-5 mb-4">
                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Pickup Address</h4>
                            <div class="row mb-5">
                              <!-- <div v-for="(rest, index) in restaurants" :key="index">
                                <div class="jumbotron">{{ rest.name }}
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 font-weight-bold">{{ rest.address }}<i class="fa fa-star text-white ml-1" aria-hidden="true"></i></h5>
                                    </div>
                                    <p class="mb-1">
                                    </p>
                                </div>
                              </div> -->
                                <div class="form-group col-sm-6">
                                    <label>Select way</label>
                                    <div class="select-container">
                                        <select class="form-control" v-model="submitOrder.delivery_type" @change="selectAdd($event)">
                                            <option selected disabled>-- Select Way --</option>
                                            <option value="2" v-if="storeInfo && storeInfo.delivery_type === 3 || storeInfo.delivery_type === 2">
                                             Self PickUp
                                            </option>
                                            <option value="1" v-if="storeInfo && storeInfo.delivery_type === 3 || storeInfo.delivery_type === 1">
                                              Delivery
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mt-3" v-if="submitOrder.delivery_type == 2">
                                  <h4>PickUp your order from restaurant address</h4>
                                </div>
                                <div
                                  class="list-group-item list-group-item-action active bg-primary"
                                  aria-current="true" v-if="submitOrder.delivery_type == 2"
                                >
                                  <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 font-weight-bold">{{ storeInfo?storeInfo.name:'' }}<i class="fa fa-star text-white ml-1" aria-hidden="true"></i></h5>
                                  </div>
                                  <p class="mb-1">
                                    {{ storeInfo?storeInfo.address:'' }}
                                  </p>
                                </div>

                                <div
                                  class="list-group-item list-group-item-action mt-4"
                                  aria-current="true" v-if="submitOrder.delivery_type == 1"
                                >
                                <span class="float-right"><a href="#/" data-toggle="modal" data-target="#exampleModal" class="text-primary">Change address</a></span>
                                  <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 font-weight-bold">Your default address<i class="fa fa-star text-white ml-1" aria-hidden="true"></i></h5>
                                  </div>
                                  <p class="mb-1">
                                    {{ submitOrder.location?submitOrder.location.address:'' }}
                                  </p>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Change Address</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <div class="list-group overflow">
                                          <div v-for="(address, index) in addresses" :key="index">
                                              <div
                                                class="list-group-item list-group-item-action 1"
                                                aria-current="true" @click="selectAddress(address)"
                                              >
                                                <div class="d-flex w-100 justify-content-between">
                                                  <h5 class="mb-1 font-weight-bold">
                                                  <a href="#/" >{{ address.tag }}</a>
                                                  </h5>
                                                </div>
                                                <p class="mb-1">
                                                  {{ address.address }}
                                                </p>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic information</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-12">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" :value="form.name" disabled>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control" v-model="form.phone" disabled>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-mail address:</label>
                                    <input type="email" class="form-control" v-model="form.email" disabled>
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Tip/ Coupon</h4>
                            <div class="mb-5">
                              <div class="row">
                                <div class="form-group col-sm-6">
                                    <label>Coupon Code</label>
                                    <div class="form-group">
                                       <div class="input-group mb-3">
                                          <input type="text" placeholder="Enter coupon code" class="form-control" v-model="form.coupon">
                                          <div class="input-group-append">
                                            <button class="input-group-text bg-primary text-white" @click="couponVerify">Verify</button>
                                          </div>
                                      </div>
                                      <span class="text-danger" v-if="discountLimit">{{ discountLimit }}</span>
                                    </div>
                                </div>
                                </div>

                                <div class="row" v-if="submitOrder.delivery_type == 1">
                                  <div class="col-md-12">
                                    <label>Tips</label>
                                    <ul class="p-0">
                                    <li class="tipValue" v-for="tip in tipTax.tipsvalue" :key="tip" @click="selectTip(tip)">{{ tip }}</li>
                                    <li class="tipValue" @click="selectTip('custom')">Custom</li>
                                    </ul>

                                        <div class="form-group" v-if="customTip">
                                          <input type="text" v-model="submitOrder.tipAmount" class="form-control">
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Payment</h4>
                            <div class="row text-lg">
                                <!-- <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">PayPal</span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Credit Card</span>
                                    </label>
                                </div> -->
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" checked  value="COD" v-model="submitOrder.method">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">COD</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center" v-if="showAddress == 1">
                            <button class="btn btn-primary btn-lg" @click="placeOrder"><span>Order now!</span></button>
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
import { getSettings, getRestaurantInfo, placeOrder, checkCoupon, getAddresses } from '@/store/api'
import { getLocalStorage, tipTax } from '@/store/service'

export default {
  components: { Headbar, Footer },
  name: 'checkout',
  data () {
    return {
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
    if (getLocalStorage('cart')) {
      this.getSetting()
      this.showItem()
      this.submitOrder.order = getLocalStorage('cart')
      this.getUserData()
      this.getAddress()
      this.delivery_charges_calculate('9')
    } else {
      this.$router.push('/menu')
    }
  },
  methods: {
    selectAddress (address) {
      this.submitOrder.location.address = address.address
      this.submitOrder.location.house = address.house
      this.submitOrder.location.lat = address.latitude
      this.submitOrder.location.lng = address.longitude
      this.submitOrder.location.tag = address.tag
    },
    getAddress () {
      getAddresses().then(res => {
        this.addresses = res.data
      })
    },
    addQuantity (index) {
      var storedNames = JSON.parse(localStorage.getItem('cart'))
      var name = []
      for (var j = 0; j < storedNames.length; j++) {
        if (j === index) {
          storedNames[index].quantity++
          name.push(storedNames[j])
        } else {
          name.push(storedNames[j])
        }
      }
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(name))
      this.showItem()
      this.orderTotal = 0
      this.taxTotal = 0
      this.totalAmount = 0
      this.getSetting()
    },
    minusQuantity (item, index) {
      if (item.quantity > 0) {
        var storedNames = JSON.parse(localStorage.getItem('cart'))
        var name = []
        // var name = storedNames.slice(index, 1)
        // localStorage.setItem('cart', JSON.stringify(name))
        for (var j = 0; j < storedNames.length; j++) {
          if (j === index) {
            storedNames[index].quantity--
            name.push(storedNames[j])
          } else {
            name.push(storedNames[j])
          }
        }
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(name))
        this.showItem()
        this.orderTotal = 0
        this.taxTotal = 0
        this.totalAmount = 0
        this.getSetting()
      }
    },
    showItem () {
      this.item = getLocalStorage('cart')
      this.submitOrder.order = getLocalStorage('cart')
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
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(name))
      this.showItem()
      this.orderTotal = 0
      this.taxTotal = 0
      this.totalAmount = 0
      this.getSetting()
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
    },
    selectAdd (event) {
      if (event.target.value === '2') {
        this.showAddress = 1
        this.submitOrder.tipAmount = 0
        this.deliveryCharges = 0
        this.delivery_amount = 0
      } else if (event.target.value === '1') {
        this.showAddress = 1
        this.tipBox = 1
        this.getDistance(this.storeInfo.latitude, this.storeInfo.longitude)
        this.deliveryCharges = 1
      }
    },
    getSetting () {
      getSettings().then(res => {
        this.tipTax.taxPercentage = res.data[45]
        this.tipTax.tips = res.data[109]
        this.tipTax.tipsvalue = res.data[109].value.split(',')
        tipTax('taxes', JSON.stringify(this.tipTax))
        this.taxes = getLocalStorage('taxes')
        for (var i = 0; i < this.item.length; i++) {
          if (this.item[i].addOnTotal) {
            this.orderTotal += parseInt(this.item[i].quantity) * parseFloat(this.item[i].addOnTotal)
          } else {
            this.orderTotal += parseInt(this.item[i].quantity) * parseFloat(this.item[i].price)
          }
        }
        this.taxTotal = (parseFloat(this.orderTotal) - parseFloat(this.discountPrice)) * parseInt(this.taxes.taxPercentage.value) / 100
        this.totalAmount = (parseFloat(this.orderTotal) - parseFloat(this.discountPrice)) + parseFloat(this.taxTotal)
        this.submitOrder.total.totalPrice = this.totalAmount
      })
    },
    couponVerify () {
      const data = {
        coupon: this.form.coupon,
        subTotal: this.orderTotal
      }
      checkCoupon(data).then(res => {
        if (res.data.success === false) {
        } else {
          this.couponDetail = res.data
          this.submitOrder.coupon = {
            code: res.data.code
          }
          if (res.data.discount_type === 'AMOUNT' && this.orderTotal >= 10) {
            this.discountPrice = res.data.discount
          } else if (res.data.discount_type === 'PERCENTAGE' && this.orderTotal >= 10) {
            this.discountPercent = res.data.discount
            this.discountPrice = ((this.discountPercent / 100) * this.orderTotal)
          } else if (this.orderTotal < 10) {
            this.discountLimit = res.data.subtotal_message
          }
          this.taxTotal = 0
          this.totalAmount = 0
          this.orderTotal = 0
          this.getSetting()
        }
      })
    },
    placeOrder () {
      placeOrder(this.submitOrder).then(res => {
        if (res.data.success === true) {
          localStorage.removeItem('cart')
        }
        this.$toast.success('Order place successfully')
        this.$router.push('/myorder')
      })
    },
    selectTip (tip) {
      if (tip !== 'custom') {
        this.submitOrder.tipAmount = tip
        this.customTip = false
      } else {
        this.customTip = !this.customTip
      }
      this.orderTotal = 0
      this.taxTotal = 0
      this.totalAmount = 0
      this.getSetting()
    },
    getDistance (latitude, longitude) {
      var origin = new window.google.maps.LatLng(latitude, longitude)
      var destination = new window.google.maps.LatLng(this.submitOrder.location.lat, this.submitOrder.location.lng)
      const service = new window.google.maps.DistanceMatrixService()
      const request = {
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }
      service.getDistanceMatrix(request).then((response) => {
      // put response
        this.submitOrder.dis = response.rows[0].elements[0].distance.text.split(' ')[0]
        this.delivery_charges_calculate(parseFloat(response.rows[0].elements[0].distance.text.split(' ')[0]))
      })
    },
    delivery_charges_calculate (dis) {
      if (this.storeInfo.free_delivery_subtotal !== 0 && this.orderTotal.toFixed(2) <= this.storeInfo.free_delivery_subtotal) {
        this.delivery_amount = 0
      } else if (this.storeInfo.delivery_charge_type === 'DYNAMIC') {
        if (dis > this.storeInfo.base_delivery_distance) {
          var extraDistance = parseFloat(dis) - parseFloat(this.storeInfo.base_delivery_distance)
          var extraCharge = (parseFloat(extraDistance) / parseFloat(this.storeInfo.extra_delivery_distance)) * parseFloat(this.storeInfo.extra_delivery_charge)
          var dynamicDeliveryCharge = parseFloat(this.storeInfo.base_delivery_charge) + parseFloat(extraCharge)
          this.delivery_amount = Math.ceil(dynamicDeliveryCharge)
        } else {
          this.delivery_amount = Math.round(this.storeInfo.base_delivery_distance)
        }
      } else {
        this.delivery_amount = Math.round(this.storeInfo.delivery_charges)
      }
    }
  }
}
</script>

<style>
 h1.mb-0 {
    color: #383c40;
    font-family: Helvetica Neue, Raleway, sans-serif;
}
.page-title h1 {
    font-size: 77px;
    font-size: 5.5rem;
}
.mb-0, .my-0 {
    margin-bottom: 0 !important;
}
.text-muted {
    color:#a4a7a9 !important;
    font-family: Helvetica Neue, Raleway, sans-serif;
}

</style>
<style lang="scss" scoped>
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
