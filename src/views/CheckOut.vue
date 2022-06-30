<template>
<div id="checkout">
<Headbar></Headbar>
      <!-- Page Title -->
        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mt-6">
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
                        <div class="cart-details1 shadow bg-white stick-to-content1 mb-4">
                            <div class="bg-dark dark p-4">
                            <div class="row">
                              <div class="col-md-6">
                                <h5 class="mb-0">You order</h5>
                              </div>
                              <div class="col-md-6 float-right">
                                <a data-toggle="modal" class="action-icon ml-5" @click="editCart" href="#/"><i class="ti ti-pencil"></i> Edit order</a>
                              </div>
                              </div>
                            </div>
                            <table class="cart-table">
                                <tr v-for="(it, index) in submitOrder.order" :key="index">
                                    <td class="title">
                                        <span class="name"><a href="#" data-toggle="modal">{{ it?it.name:'' }}</a></span>
                                        <!--<span class="caption text-muted">26”, deep-pan, thin-crust</span>-->
                                    </td>
                                    <td>{{ it.quantity }}x</td>
                                    <td class="price" v-if="it.addOnTotal"> ${{ it?it.addOnTotal:'' }}</td>
                                    <td class="price" v-else> ${{ it?it.price:'' }}</td>
                                </tr>
                            </table>
                            <div class="cart-summary">
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Order total:</div>
                                    <div class="col-5"><strong>+$<span class="cart-products-total">{{ orderTotal.toFixed(2) }}</span></strong></div>
                                </div>
                                <div class="row" v-if="discountPrice > 0">
                                    <div class="col-7 text-right text-muted">Discount:</div>
                                    <div class="col-5"><strong>-$<span class="cart-products-total">{{ discountPrice.toFixed(2) }}</span></strong></div>
                                </div>
                                <div class="row" v-if="delivery_amount > 0">
                                    <div class="col-7 text-right text-muted">Delivery:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">{{ delivery_amount }}</span></strong></div>
                                </div>
                               <div class="row">
                                    <div class="col-7 text-right text-muted">Total Tax ({{ tipTax?tipTax.taxPercentage.value:'' }}%):</div>
                                    <div class="col-5">
                                        <strong>+$<span class="cart-delivery">{{ taxTotal?taxTotal.toFixed(2):0 }}</span></strong>
                                    </div>
                                </div>
                                <div class="row" v-if="submitOrder.tipAmount">
                                    <div class="col-7 text-right text-muted">Tip:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">{{ submitOrder.tipAmount }}</span></strong></div>
                                </div>
                                <div class="row" v-if="showWallet == 1 && wallet && wallet.balance > 0">
                                    <div class="col-7 text-right text-muted">Wallet:</div>
                                    <div class="col-5">
                                        <strong>-$<span class="cart-delivery">{{ wallet?wallet.balance.toFixed(2):'' }}</span></strong>
                                    </div>
                                </div>
                                <hr class="hr-sm">
                                <div class="row text-lg">
                                    <div class="col-7 text-right text-muted">Total:</div>
                                    <div class="col-5">
                                      <strong>$
                                        <span class="cart-total">
                                        {{ totalAmount?totalAmount.toFixed(2):0 }}
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
                                            <option selected disabled v-if="storeInfo && storeInfo.is_tabletop !== 0 && submitOrder.user.data.role !== 'table'">-- Select Way --</option>
                                            <option value="2" v-if="storeInfo && (storeInfo.delivery_type === 3 || storeInfo.delivery_type === 2) && submitOrder.user.data.role !== 'table'">
                                             Self PickUp
                                            </option>
                                            <option value="1" v-if="storeInfo && (storeInfo.delivery_type === 3 || storeInfo.delivery_type === 1) && submitOrder.user.data.role !== 'table'">
                                              Delivery
                                            </option>
                                            <option value="3" v-if="storeInfo && storeInfo.is_tabletop === 1 && submitOrder.user.data.role === 'table'">
                                              Tabletop Ordering
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
                                    <h5 class="mb-1 font-weight-bold">{{ storeInfo?storeInfo.name:'' }}<i class="fa fa-star text-warning ml-1" aria-hidden="true"></i></h5>
                                  </div>
                                  <p class="mb-1">
                                    {{ storeInfo?storeInfo.address:'' }}
                                  </p>
                                </div>
                                <div
                                  class="list-group-item list-group-item-action mt-4"
                                  aria-current="true" v-if="submitOrder.delivery_type == 1"
                                >
                                <span class="text-danger" v-if="radiusError && radiusError != 0">{{ 'Kindly select another address.' }}</span>
                                <span class="float-right" v-if="submitOrder.location.address"><a data-toggle="modal" data-target="#exampleModal" class="text-primary cursor-pointer">Change address</a></span>
                                <span class="float-right" v-else><a class="text-primary cursor-pointer" @click="changeAdd('checkout')">Add or select address</a></span>
                                  <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 font-weight-bold">{{ submitOrder.location?'Your default address':'No default address' }}<i class="fa fa-star text-warning ml-1" aria-hidden="true"></i></h5>
                                  </div>
                                  <p class="mb-1">
                                    {{ submitOrder.location?submitOrder.location.address:'' }}
                                  </p>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                  <div class="container">
                                  <div class="row">
                                  <div class="col-md-6"> <h5 class="modal-title" id="exampleModalLabel">Change Address</h5></div>
                                     <div class="col-md-6">
                                     <span type="button" class="fa fa-close" data-dismiss="modal" aria-label="Close">
                                    </span>
                                    </div>
                                    </div>
                                    </div>
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
                                                  <a class="cursor-pointer">{{ address.tag }}</a>
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
                                  <!-- <div class="model-footer">
                                  <div class="continer mt-3 mb-3 float-right mr-4">
                                  <div class="row">
                                  <div class="col-md-12 ml-5">
                                    <router-link to="/addmanageaddress" class="btn btn-primary">Add Address</router-link>
                                    </div>
                                    </div>
                                    </div>
                                  </div> -->
                                </div>
                              </div>
                            </div>
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic information</h4>
                            <div class="row mb-5" v-if="submitOrder.delivery_type != 3">
                                <div class="form-group col-sm-12">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" :value="form.name" disabled>
                                </div>
                            </div>
                            <div class="row mb-5" v-if="submitOrder.delivery_type != 3">
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control" :value="form.phone" disabled>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-mail address:</label>
                                    <input type="email" class="form-control" :value="form.email" disabled>
                                </div>
                            </div>

                            <!--TableTop Order -->
                            <center>
                              <span class="text-danger text-lg">{{ tableOrder.error }}</span>
                            </center>
                            <div class="row mb-5" v-if="submitOrder.delivery_type == 3">
                                <div class="form-group col-sm-12">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" v-model="form.tableOrder.name">
                                </div>
                            </div>
                            <div class="row mb-5" v-if="submitOrder.delivery_type == 3">
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control" v-model="form.tableOrder.phone">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Number of Person:</label>
                                    <input type="number" class="form-control" v-model="form.tableOrder.person">
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
                                      <span class="text-success" v-if="coupon_applied">{{ coupon_applied }}</span>
                                    </div>
                                </div>
                              </div>

                                <div class="row" v-if="submitOrder.delivery_type == 1 || submitOrder.delivery_type == 3">
                                  <div class="col-md-12">
                                    <p>Tips</p>
                                    <button class="tipValue btn btn-outline-primary btn-md ml-3" v-for="tip in tipTax.tipsvalue" :key="tip" @click="selectTip(tip)">
                                      <span v-if="!tipTax.tipsPercentage">$</span>
                                      <span>{{ tip }}</span>
                                      <span v-if="tipTax.tipsPercentage">%</span>
                                    </button>
                                    <button class="tipValue  btn btn-outline-primary btn-md ml-3" @click="selectTip('custom')"><span>Custom</span></button>
                                  <div class="form-group" style="margin-top:20px;" v-if="customTip">
                                          <input type="number" maxlength="6" class="form-control" @keyup="customTipEvnt" v-model="selected_tip">
                                        </div>
                                  </div>
                                </div>
                                <div class="row">
                                <div class="col-md-12 mt-3" v-if="submitOrder.tipAmount > 0">
                                  <button class="badge bg-danger text-white px-2 py-2 ml-3" @click="selectTip(0)"><span><i class="ti ti-close mr-3 text-light"></i> <big>Clear Tip</big></span></button>
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
                                <div class="col-md-12 form-group">
                                <div class="row">
                                    <label class="custom-control custom-radio" v-if="wallet && wallet.balance > 0 && wallet.balance < totalAmount">
                                        <input type="checkbox" name="wallet" value="wallet" v-model="getWallet" @change="selectWallet($event)">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">Wallet Balance <br/>${{ wallet.balance?wallet.balance.toFixed(2):0 }}</span>
                                    </label>
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" checked  value="COD" v-model="submitOrder.method" @change="selectMethod($event)">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">COD</span>
                                    </label>
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" checked  value="CARD" v-model="submitOrder.method" @change="selectMethod($event)">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">Card/Online Payment</span>
                                    </label>
                                </div>
                               <!-- <div v-if="paymentForm == 1">
                                  <div class="bg-white mt-5">
                                      <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Card Details</h4>

                                      <div class="row mb-5">
                                          <div class="form-group col-sm-12">
                                              <label>Card Number:</label>
                                              <input type="text" class="form-control" placeholder="Enter card number" v-model="cardNumber">
                                              <span class="text-danger">{{ error.cardNumber }}</span>
                                          </div>
                                      </div>
                                      <div class="row mb-5">
                                          <div class="form-group col-sm-12">
                                              <label>Card Holder's Name:</label>
                                              <input type="text" class="form-control" placeholder="Enter card holder name" v-model="cardHolderName">
                                              <span class="text-danger">{{ error.cardHolderName }}</span>
                                          </div>
                                      </div>
                                      <div class="row mb-5">
                                          <div class="form-group col-sm-8">
                                              <label>Card Expiry Date:</label>
                                              <input type="text" class="form-control" placeholder="Enter card expiry date" v-model="cardExpiryDate">
                                              <span class="text-danger">{{ error.cardExpiryDate }}</span>
                                          </div>
                                          <div class="form-group col-sm-4">
                                              <label>CVV:</label>
                                              <input type="password" class="form-control" placeholder="Enter CVV" v-model="cvv">
                                              <span class="text-danger">{{ error.cvv }}</span>
                                          </div>
                                      </div>
                                      <div class="row mb-5">
                                        <div class="form-group col-sm-6">
                                            <label>Card Type</label>
                                              <div class="select-container">
                                                  <select class="form-control" v-model="cardType">
                                                      <option selected disabled>-- Card Type --</option>
                                                      <option value="VISA">
                                                      VISA
                                                      </option>
                                                      <option value="DISCOVER">
                                                        DISCOVER
                                                      </option>
                                                  </select>
                                              </div>
                                              <span class="text-danger">{{ error.cardType }}</span>
                                        </div>
                                        <div class="form-group col-sm-6 text-center">
                                          <button class="btn btn-primary btn-md" style="margin-top:38px;" @click="payment1"><span>Pay Now !</span></button>
                                        </div>
                                      </div>
                                  </div>
                                </div>-->
                                 <div v-if="(paymentForm == 1 && showAddress == 1 && radiusError == null) ||
                                    submitOrder.user.data.role == 'table' &&
                                    submitOrder.method == 'Clover'">
                                  <button class="btn btn-primary btn-md" style="margin-top:38px;" @click="payment(totalAmount)"><span>Go to payment page</span></button>
                                </div>
                              </div>
                            </div>

                        </div>
                        <div class="text-center mt-5" v-if="((showAddress == 1 && radiusError == null) || submitOrder.delivery_type === 3) && orderNow == 1">
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
import { getRestaurantInfo, getAddresses, getSettings, checkCoupon, CardToken, getUserWallet, placeOrder } from '@/store/api'
import { getLocalStorage, saveLocalStorage } from '@/store/service'
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'

export default {
  watch: {
  },
  components: { Headbar, Footer },
  name: 'checkout',
  data () {
    return {
      showButton: null,
      user: [],
      storeInfo: '',
      radiusError: '',
      addresses: [],
      delivery_amount: 0,
      deliveryTotal: 0,
      taxTotal: 0,
      totalAmount: 0,
      orderTotal: 0,
      discountPrice: 0,
      discountLimit: '',
      coupon_applied: '',
      customTip: false,
      selected_tip: 0,
      showAddress: 0,
      orderNow: 0,
      paymentForm: 0,
      wallet: {
        balance: 0
      },
      getWallet: '',
      showWallet: 0,
      tipTax: {
        tips: {},
        tipsPercentage: false,
        taxPercentage: {},
        tipsvalue: []
      },
      submitOrder: {
        user: {
          data: ''
        },
        order: [],
        delivery_amount: 0,
        coupon: '',
        quantity: 0,
        location: {
          latitude: '',
          longitude: '',
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
        method: '',
        payment_token: '',
        delivery_type: 0,
        partial_wallet: false,
        dis: 0,
        pending_payment: '',
        tipAmount: 0
      },
      item: [],
      form: {
        name: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        street: '',
        coupon: '',
        tableOrder: {
          name: null,
          phone: null,
          person: null
        }
      },
      tableOrder: {
        error: null
      }
    }
  },
  mounted () {
    this.user = getLocalStorage('userData')
    this.getResInfo()
    this.checkCart()
    const data = ''
    getUserWallet(data).then(res => {
      this.wallet = res.data
    })
    this.getTableOrderInfo()
  },
  methods: {
    getTableOrderInfo () {
      if (getLocalStorage('tableOrder')) {
        this.form.tableOrder.name = getLocalStorage('tableOrder').name
        this.form.tableOrder.phone = getLocalStorage('tableOrder').phone
        this.form.tableOrder.person = getLocalStorage('tableOrder').person
      }
    },
    getResInfo () {
      getRestaurantInfo().then(res => {
        this.storeInfo = res.data
        if (!this.user) {
          if (this.storeInfo.open === 1) {
            this.showButton = true
          } else {
            this.showButton = false
          }
        } else {
          if (this.user && !this.user.role) {
            console.log('user')
            if (this.storeInfo.open === 1) {
              this.showButton = true
            } else {
              this.showButton = false
            }
          } else {
            if (this.storeInfo.table_order_open === 1) {
              this.showButton = true
            } else {
              this.showButton = false
            }
          }
          if (this.showButton === false) {
            this.$toast.error('Restaurant is now closed.', {
              timeout: 1500
            })
            this.$router.push('/')
          }
        }
        if (this.storeInfo && this.storeInfo.is_tabletop === 1 && this.submitOrder.user.data.role === 'table') {
          this.submitOrder.delivery_type = 3
          var address = {
            address: this.storeInfo.address,
            house: '',
            latitude: this.storeInfo.latitude,
            longitude: this.storeInfo.longitude,
            tag: 'Restaurant'
          }
          this.submitOrder.user.data.default_address = address
          this.submitOrder.location = address
        }
      })
    },
    editCart () {
      this.$router.push('/editCart')
    },
    changeAdd (page) {
      localStorage.setItem('page', page)
      this.$router.push('/addmanageaddress')
    },
    getSetting () {
      this.orderTotal = 0
      this.taxTotal = 0
      this.totalAmount = 0
      getSettings().then(res => {
        this.tipTax.taxPercentage = res.data[45]
        this.tipTax.tips = res.data[109]
        this.tipTax.tipsPercentage = res.data[111].value
        if (res.data[111].value === 'true') {
          this.tipTax.tipsvalue = res.data[110].value.split(',')
        } else {
          this.tipTax.tipsvalue = res.data[109].value.split(',')
        }
        for (var i = 0; i < this.item.length; i++) {
          if (this.item[i].addOnTotal) {
            this.orderTotal += parseInt(this.item[i].quantity) * parseFloat(this.item[i].addOnTotal)
          } else {
            this.orderTotal += parseInt(this.item[i].quantity) * parseFloat(this.item[i].price)
          }
        }
        var taxTotal = this.orderTotal * this.tipTax.taxPercentage.value / 100
        this.taxTotal = taxTotal
        this.totalAmount = this.orderTotal + taxTotal
        this.submitOrder.total.totalPrice = this.totalAmount
      })
    },
    selectAdd (event) {
      if (event.target.value === '2') {
        this.showAddress = 1
        this.submitOrder.tipAmount = 0
        this.deliveryCharges = 0
        this.radiusError = null
        this.totalAmount = 0
        this.taxTotal = 0
        this.totalAmount = 0
        this.deliveryTotal = (parseFloat(this.orderTotal) + 0) - this.discountPrice
        this.taxTotal = this.deliveryTotal * parseInt(this.tipTax.taxPercentage.value) / 100
        this.totalAmount = parseFloat(this.deliveryTotal) + parseFloat(this.taxTotal) + parseFloat(this.submitOrder.tipAmount)
        this.submitOrder.total.totalPrice = this.totalAmount
        this.delivery_amount = 0
        this.submitOrder.delivery_amount = 0
        this.submitOrder.dis = 0
      } else if (event.target.value === '1') {
        this.showAddress = 1
        this.tipBox = 1
        this.getAddress()
        this.jGetDistance(this.storeInfo.latitude, this.storeInfo.longitude)
        this.deliveryCharges = 1
      }
    },
    jGetDistance (latitude, longitude) {
      var origin = new window.google.maps.LatLng(latitude, longitude)
      var destination = new window.google.maps.LatLng(this.submitOrder.location.latitude, this.submitOrder.location.longitude)
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
        console.log(response)
        // put response
        if (response.rows[0].elements[0].distance) {
          // console.log(this.storeInfo.delivery_radius)
          this.submitOrder.dis = parseFloat(response.rows[0].elements[0].distance.text.split(' ')[0].replace(',', ''))
          this.jDelivery_charges_calculate(parseFloat(response.rows[0].elements[0].distance.text.split(' ')[0].replace(',', '')))
        } else {
          this.radiusError = 'Kindly select another address'
          this.delivery_amount = 0
        }
      })
    },
    jDelivery_charges_calculate (dis) {
      if (dis > parseFloat(this.storeInfo.delivery_radius)) {
        this.radiusError = 'Kindly select another address'
        this.delivery_amount = 0
      } else {
        this.radiusError = null
        if (this.storeInfo.free_delivery_subtotal !== 0 && this.orderTotal.toFixed(2) <= this.storeInfo.free_delivery_subtotal) {
          this.delivery_amount = 0
        } else if (this.storeInfo.delivery_charge_type === 'DYNAMIC') {
          if (dis > this.storeInfo.base_delivery_distance) {
            var extraDistance = parseFloat(dis) - parseFloat(this.storeInfo.base_delivery_distance)
            var extraCharge = (parseFloat(extraDistance) / parseFloat(this.storeInfo.extra_delivery_distance)) * parseFloat(this.storeInfo.extra_delivery_charge)
            var dynamicDeliveryCharge = parseFloat(this.storeInfo.base_delivery_charge) + parseFloat(extraCharge)
            this.delivery_amount = Math.ceil(dynamicDeliveryCharge)
            this.submitOrder.delivery_amount = this.delivery_amount
          } else {
            this.delivery_amount = Math.round(this.storeInfo.base_delivery_charge)
            this.submitOrder.delivery_amount = this.delivery_amount
          }
        } else {
          this.delivery_amount = Math.round(this.storeInfo.delivery_charges)
          this.submitOrder.delivery_amount = this.delivery_amount
        }
      }
      this.calculate(this.orderTotal, this.delivery_amount, 0, this.submitOrder.tipAmount)
    },
    checkCart () {
      if (getLocalStorage('cart') && getLocalStorage('cart').length > 0) {
        this.showItem()
        this.getSetting()
        this.submitOrder.order = getLocalStorage('cart')
        this.getUserData()
      } else {
        this.$router.push('/menu')
      }
    },
    payment (amount) {
      this.tableOrder.error = ''
      if (this.submitOrder.user.data.role === 'table' && (!this.form.tableOrder.name || !this.form.tableOrder.phone || !this.form.tableOrder.person)) {
        this.tableOrder.error = '*All Fields are required.'
      } else {
        localStorage.removeItem('tableOrder')
        saveLocalStorage('tableOrder', JSON.stringify(this.form.tableOrder))
        saveLocalStorage('submitOrder', JSON.stringify(this.submitOrder))
        // const card = {
        //   ecomind: 'ecom',
        //   amount: '3000',
        //   currency: 'CAD',
        //   capture: true,
        //   source: 'clv_1TSTS3Lo3tNdThBrFsRFV4M6'
        // }
        this.getSetting('final')
        var card = {
          customer: {
            email: this.submitOrder.user.data.email,
            firstName: this.submitOrder.user.data.name,
            lastName: '',
            phoneNumber: this.submitOrder.user.data.phone.renderToString
          },
          shoppingCart: {
            lineItems: []
          }
        }
        if (getLocalStorage('submitOrder') && getLocalStorage('submitOrder').total) {
          if (this.showWallet === 1 && this.wallet.balance < amount.toFixed(2)) {
            amount = amount - this.wallet.balance
            this.submitOrder.total.totalPrice = amount - this.wallet.balance
          } else {
            this.submitOrder.total.totalPrice = getLocalStorage('submitOrder').total.totalPrice
          }
        }
        var arr = { }
        arr = {
          name: 'Total Amount',
          unitQty: '1',
          price: parseFloat(amount.toFixed(2)) * 100
        }
        card.shoppingCart.lineItems.push(arr)
        CardToken(JSON.stringify(card)).then(res => {
          console.log(res.data)
          window.location.href = res.data.href
        }).catch(err => {
          console.log(err)
        })
      }
    },
    showItem () {
      this.item.splice(0)
      this.item = getLocalStorage('cart')
      this.submitOrder.order = getLocalStorage('cart')
    },
    getUserData () {
      this.submitOrder.user.data = getLocalStorage('userData')
      this.form.name = getLocalStorage('userData').name
      this.form.email = getLocalStorage('userData').email
      this.form.phone = getLocalStorage('userData').phone
      this.delivery_type = getLocalStorage('userData').delivery_type

      // this.submitOrder.delivery_type = getLocalStorage('userData').delivery_type
      this.submitOrder.total.productQuantity = this.item.length
      if (getLocalStorage('userData').default_address && getLocalStorage('userData').default_address.address) {
        this.submitOrder.location.address = getLocalStorage('userData').default_address.address
      }
      this.submitOrder.location.house = getLocalStorage('userData').default_address ? getLocalStorage('userData').default_address.house : ''
      this.submitOrder.location.latitude = getLocalStorage('userData').default_address ? getLocalStorage('userData').default_address.latitude : ''
      this.submitOrder.location.longitude = getLocalStorage('userData').default_address ? getLocalStorage('userData').default_address.longitude : ''
      this.submitOrder.location.tag = getLocalStorage('userData').default_address ? getLocalStorage('userData').default_address.tag : ''
    },
    getAddress () {
      getAddresses().then(res => {
        this.addresses = res.data
        if (this.addresses.length === 1) {
          this.submitOrder.location.address = this.addresses[0].address
          this.submitOrder.location.latitude = this.addresses[0].latitude
          this.submitOrder.location.longitude = this.addresses[0].longitude
          this.submitOrder.location.tag = this.addresses[0].tag
          this.submitOrder.location.house = this.addresses[0].house
          this.jGetDistance(this.addresses[0].latitude, this.addresses[0].longitude)
        }
      })
    },
    selectAddress (address) {
      this.submitOrder.location.address = address.address
      this.submitOrder.location.house = address.house
      this.submitOrder.location.latitude = address.latitude
      this.submitOrder.location.longitude = address.longitude
      this.submitOrder.location.tag = address.tag

      this.submitOrder.user.data.default_address = this.submitOrder.location
      this.$toast.success('New address selected successfully.')
      // this.getDistance(this.storeInfo.latitude, this.storeInfo.longitude)
      this.jGetDistance(this.storeInfo.latitude, this.storeInfo.longitude)
    },
    couponVerify () {
      this.discountPrice = 0
      this.coupon_applied = ''
      this.discountLimit = ''
      const data = {
        coupon: this.form.coupon,
        subTotal: this.orderTotal,
        restaurant_id: this.storeInfo.id
      }
      checkCoupon(data).then(res => {
        if (res.data.success === false) {
          this.discountLimit = res.data.message ?? 'Coupon not available'
        } else {
          this.couponDetail = res.data
          this.submitOrder.coupon = {
            code: res.data.code
          }
          if (res.data.discount_type === 'AMOUNT' && this.orderTotal >= res.data.min_subtotal) {
            this.discountPrice = res.data.discount
            this.coupon_applied = 'Coupon Applied'
          } else if (res.data.discount_type === 'PERCENTAGE' && this.orderTotal >= res.data.min_subtotal) {
            this.discountPercent = res.data.discount
            this.discountPrice = ((this.discountPercent / 100) * this.orderTotal)
            this.coupon_applied = 'Coupon Applied'
          } else if (this.orderTotal < res.data.min_subtotal) {
            this.discountLimit = 'Your order value should be atleast $' + res.data.min_subtotal
          }
        }
        this.calculate(this.orderTotal, this.delivery_amount, this.discountPrice, this.submitOrder.tipAmount)
      })
    },
    selectTip (tip) {
      if (tip !== 'custom') {
        if (this.tipTax.tipsPercentage === 'true') {
          this.selected_tip = (parseFloat(this.orderTotal) * tip / 100).toFixed(2)
          this.submitOrder.tipAmount = (parseFloat(this.orderTotal) * tip / 100).toFixed(2)
          this.customTip = false
        } else {
          this.selected_tip = tip
          this.submitOrder.tipAmount = tip
          this.customTip = false
        }

        this.calculate(this.orderTotal, this.delivery_amount, this.discountPrice, this.submitOrder.tipAmount)
      } else {
        this.customTip = !this.customTip
      }
    },
    customTipEvnt (event) {
      var tip = event.target.value
      if (tip === '') {
        tip = 0
      }
      this.calculate(this.orderTotal, this.delivery_amount, this.discountPrice, tip)
    },
    selectWallet (event) {
      if (!this.getWallet) {
        this.getWallet = ''
        this.showWallet = 0
        console.log('1')
      } else {
        this.getWallet = 'wallet'
        this.showWallet = 1
        console.log('2')
      }
      if (this.getWallet === 'wallet') {
        this.submitOrder.partial_wallet = false
        if (this.wallet.balance > 0 && this.wallet.balance < this.totalAmount) {
          console.log('3')
          this.submitOrder.partial_wallet = true
          this.totalAmount = parseFloat(this.totalAmount.toFixed(2)) - parseFloat(this.wallet.balance.toFixed(2))
        } else {
          this.submitOrder.partial_wallet = false
        }
      }
    },
    selectMethod (event) {
      // console.log(this.paymentForm)
      // console.log(this.showAddress)
      // console.log(this.radiusError)
      // console.log(this.submitOrder.user.data.role)
      // console.log(this.submitOrder.method)
      // if (paymentForm == 1 && showAddress == 1 && radiusError == null) ||
      //                               submitOrder.user.data.role == 'table' &&
      //                               submitOrder.method == 'Clover'
      // console.log('hello World')
      // console.log(event.target.value)
      if (event.target.value === 'COD') {
        this.paymentForm = 0
        this.submitOrder.method = 'COD'
        this.orderNow = 1
      } else if (event.target.value === 'CARD') {
        this.paymentForm = 1
        this.submitOrder.method = 'Clover'
        this.orderNow = 0
      }
    },
    placeOrder () {
      this.tableOrder.error = ''
      if (this.submitOrder.delivery_type === 3) {
        this.submitOrder.order_comment = `Name: ${this.form.tableOrder.name}, Phone: ${this.form.tableOrder.phone}, Number of person: ${this.form.tableOrder.person}`
      }
      if (this.submitOrder.user.data.role === 'table' && (!this.form.tableOrder.name || !this.form.tableOrder.phone || !this.form.tableOrder.person)) {
        this.tableOrder.error = '*All Fields are required.'
      } else {
        this.orderNow = 0
        localStorage.removeItem('tableOrder')
        saveLocalStorage('tableOrder', JSON.stringify(this.form.tableOrder))
        placeOrder(this.submitOrder).then(res => {
          if (res.data.success === true) {
            localStorage.removeItem('cart')
          }
          this.$toast.success('Order place successfully')
          this.$router.push('/myorder')
        })
      }
    },
    calculate (orderAmount, delivery, discount, tip) {
      this.taxTotal = 0
      this.totalAmount = 0
      this.submitOrder.tipAmount = tip
      this.deliveryTotal = (parseFloat(orderAmount) + parseFloat(delivery)) - discount
      this.taxTotal = this.deliveryTotal * parseInt(this.tipTax.taxPercentage.value) / 100
      this.totalAmount = parseFloat(this.deliveryTotal) + parseFloat(this.taxTotal) + parseFloat(tip)
      this.submitOrder.total.totalPrice = this.totalAmount
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
span.fa.fa-close {
    float: right;
}

.col-lg-12 {
    text-align: center !important;
}
</style>
