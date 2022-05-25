<template>
<div>
    <!-- Header -->
    <header id="header" class="light">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="module module-logo light ml-5 text-right">
                        <router-link to="/">
                            <img alt="Vue logo" src="@/assets/logo.png" class="main-logo" />
                        </router-link>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                     <!--Navigation-->
                    <nav class="module module-navigation left">
                        <ul id="nav-main" class="nav nav-main">
                            <!--<li class="has-dropdown">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="has-dropdown">
                                <router-link to="/about">About</router-link>
                            </li>-->
                            <li class="has-dropdown text-left mr-3">
                                <router-link to="/">Menu</router-link>
                            </li>
                            <!--<li class="has-dropdown">
                                <router-link to="/contact">Contact Us</router-link>
                            </li>-->
                        </ul>
                    </nav>
                    <div class="module left">
                        <router-link class="btn btn-outline-secondary" to="/login" v-if="!user">
                            <span class="order">Login</span></router-link>
                        <router-link class="btn btn-outline-secondary" to="/myaccount" v-if="user">
                            <span class="order">My Account</span></router-link>
                    </div>
                </div>
                <div class="col-md-2">
                    <a href="#" class="module module-cart right" data-toggle="panel-cart" @click="slideMinicart(classSlider)">
                        <span class="cart-icon">
                            <i class="ti ti-shopping-cart"></i>
                            <span class="notification d-block">{{ item?item.length:0 }}</span>
                        </span>
                        <span class="cart-value">$<span>{{ orderTotal.toFixed(2) }}</span></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <!-- Header / End -->

    <!-- Header -->
    <header id="header-mobile" class="light">
        <div class="module module-nav-toggle">
            <a href="#" id="nav-toggle" data-toggle="panel-mobile" ><span></span><span></span><span></span><span></span></a>
        </div>

        <div class="module module-logo">
            <a href="#">
                <img src="@/assets/logo.png" alt="" />
            </a>
        </div>

        <a href="#" class="module module-cart" data-toggle="panel-cart">
            <i class="ti ti-shopping-cart"></i>
            <span class="notification" data-cart-qty>2</span>
        </a>
    </header>
    <!-- Header / End -->

    <!-- Panel Mobile -->
    <nav id="panel-mobile" class="">
        <div class="module module-logo bg-dark dark">
            <a href="#">
                <img src="@/assets/logo.png" alt="" width="100px" height="100px"/>
            </a>
            <button class="close" data-toggle="panel-mobile">
                <i class="ti ti-close"></i>
            </button>
        </div>
        <nav class="module module-navigation"></nav>
        <div class="module module-social">
            <h6 class="text-sm mb-3">Follow Us!</h6>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-google"><i class="fa fa-google"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-youtube"><i class="fa fa-youtube"></i></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"><i class="fa fa-instagram"></i></a>
        </div>
    </nav>

    <!-- Panel Cart -->
    <div id="panel-cart" :class="classSlider" class="">
        <div class="panel-cart-container">
            <div class="panel-cart-title">
                <h5 class="title">Your Cart</h5>
                <button class="close" data-toggle="panel-cart" @click="slideMinicart(classSlider)">
                    <i class="ti ti-close text-danger"></i>
                </button>
            </div>
            <div class="panel-cart-content cart-details" v-if="item && item.length != 0">
                <table class="cart-table d-block">
                    <tr v-for="(it, index) in item" :key="index">
                        <td class="title">
                            <span class="name"><a>{{ it?it.name:'' }}</a></span>
                            <!-- <span class="name"><a href="#product-modal" data-toggle="modal">{{ it?it.name:'' }}</a></span> -->
                            <!-- <span class="caption text-muted">Large (500g)</span> -->
                        </td>
                        <td class="price" v-if="it.addOnTotal">
                          {{ it?it.quantity:'' }}x ${{ it?it.addOnTotal:'' }}
                        </td>
                        <td class="price" v-else>
                          {{ it?it.quantity:'' }}x ${{ it?it.price:'' }}
                          <strike class="text-danger" v-if="it && it.old_price != 0">${{ it?it.old_price:'' }}</strike>
                        </td>
                        <td class="actions">
                            <!-- <a href="#product-modal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a> -->
                            <a href="#" class="action-icon" @click="deleteItem(index)"><i class="ti ti-close"></i></a>
                        </td>
                    </tr>
                    <!-- <tr>
                        <td class="title">
                            <span class="name"><a href="#product-modal" data-toggle="modal">Extra Burger</a></span>
                            <span class="caption text-muted">Small (200g)</span>
                        </td>
                        <td class="price text-success">$9.00</td>
                        <td class="actions">
                            <a href="#product-modal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
                            <a href="#" class="action-icon"><i class="ti ti-close"></i></a>
                        </td>
                    </tr> -->
                </table>
                <div class="cart-summary d-block">
                    <div class="row">
                        <div class="col-7 text-right text-muted">Order total:</div>
                        <div class="col-5">
                            <strong> $<span class="cart-products-total1">{{ orderTotal.toFixed(2) }}</span></strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-7 text-right text-muted">Delivery Charges:</div>
                        <div class="col-5">
                            <strong>+$<span class="cart-products-total">0.00</span></strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-7 text-right text-muted">Total Tax({{ tipTax.taxPercentage.value }}%):</div>
                        <div class="col-5">
                            <strong>+$<span class="cart-delivery1">{{ taxTotal.toFixed(2) }}</span></strong>
                        </div>
                    </div>
                    <hr class="hr-sm" />
                    <div class="row text-lg">
                        <div class="col-7 text-right text-muted">Total:</div>
                        <div class="col-5">
                            <strong>$<span class="cart-total1">{{ totalAmount.toFixed(2) }}</span></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5" v-else>
                <h2><i class="ti ti-shopping-cart"></i></h2>
                <h4>Your cart is empty...</h4>
            </div>
        </div>
        <router-link to="/checkout" class="panel-cart-action btn btn-secondary btn-block btn-lg" v-if="item && item.length != 0"><span>Go to checkout</span></router-link>
    </div>
    <!-- Body Overlay -->
    <div id="body-overlay"></div>
</div>
</template>

<script>
import { getSettings } from '@/store/api'
import { getLocalStorage, tipTax } from '@/store/service'
export default {
  name: 'header',
  props: ['newCart', 'cartshow'],
  data () {
    return {
      user: [],
      classSlider: 'hide',
      item: [],
      tipTax: {
        tips: {},
        taxPercentage: {}
      },
      orderTotal: 0,
      taxes: [],
      taxTotal: 0,
      totalAmount: 0
    }
  },
  watch: {
    newCart () {
      if (this.newCart) {
        this.item = this.newCart
        this.orderTotal = 0
        this.taxTotal = 0
        this.totalAmount = 0
        this.getCalc()
      }
    },
    cartshow () {
      this.slideMinicart(this.cartshow ? 'show' : 'hide')
    }
  },
  mounted () {
    this.getSetting()
    this.showItem()
    this.getCalc()
  },
  methods: {
    showItem () {
      this.user = getLocalStorage('userData')
      this.item = getLocalStorage('cart')
    },
    slideMinicart (event) {
      if (event === 'hide') {
        this.classSlider = 'show'
      } else {
        this.classSlider = 'hide'
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
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(name))
      this.showItem()
      this.orderTotal = 0
      this.getCalc()
    },
    getSetting () {
      getSettings().then(res => {
        this.tipTax.taxPercentage = res.data[45]
        this.tipTax.tips = res.data[109]
        tipTax('taxes', JSON.stringify(this.tipTax))
      })
    },
    getCalc () {
      this.taxes = getLocalStorage('taxes')
      if (this.item) {
        for (var i = 0; i < this.item.length; i++) {
          if (this.item[i].addOnTotal) {
            this.orderTotal += parseInt(this.item[i].quantity) * parseFloat(this.item[i].addOnTotal)
          } else {
            this.orderTotal += parseInt(this.item[i].quantity) * parseFloat(this.item[i].price)
          }
        }
      }
      this.taxTotal = parseFloat(this.orderTotal) * parseInt(this.taxes.taxPercentage.value) / 100
      this.totalAmount = parseFloat(this.orderTotal) + parseFloat(this.taxTotal)
    }
  }
}
</script>

<style>
#header .module-logo {
    position: absolute;
    top: 0 !important;
    right: 0px;
    text-align: left;
    padding: 3rem 3rem !important;
}

#header .module-logo img {
    max-width: 71px;
}

input#mce-EMAIL {
    background: transparent;
    padding: 22px;
    border: 1px solid #ffff;
    background: white !important;
}

.page-title {
    position: relative !important;
    padding: 0rem 0 0rem !important;
}
#header .module-logo {
    right: 0px;
    padding: 0rem 0rem !important;
    width: 100px;
}
.main-logo {
    height: 96px;
    padding-top: 3px;
    margin-left: 50%;
}
</style>
