<template>
  <div id="checkout">
    <Headbar></Headbar>
    <!-- Page Title -->
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mb-0">My Orders</h1>
            <h4 class="text-muted mb-0">
              Some information about our restaurant
            </h4>
          </div>
        </div>
      </div>
    </div>
    <!-- Section -->
    <section class="section bg-light">
      <div class="container text-left">
        <div class="row">
           <div class="col-xl-4 col-lg-5">
            <SildeBar></SildeBar>
          </div>
          <!-- <div class="col-xl-8 col-lg-7">
                        <div class="bg-white p-4 p-md-5 mb-4">
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>My Account</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Name:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Surename:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Street and number:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>City:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-mail address:</label>
                                    <input type="email" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div> -->
          <div class="col-xl-8 col-lg-7">
            <div class="bg-white p-4 p-md-5 mb-4">
              <h4 class="border-bottom pb-4">
                <i
                  class="fa fa-shopping-bag text-primary mr-3"
                  aria-hidden="true"
                ></i>
                My Orders
              </h4>
              <div class="row mb-5">
                <div class="container">
                <div class="row">
                <div class="col-md-12 mb-20">
                <div class="wishlist-table ">
                <table class="table table-bordered">
                <thead>
                <tr>
                <th scope="col">Order Id </th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Total Price</th>
                </tr>
                </thead>
                <tbody>
                <tr class="line" v-for="order in orders" :key="order.id">
                  <td>
                    <div class="wh-item-info">
                      <a href="#" class="font-weight-bold">{{ order.unique_order_id }}</a>
                      <p>{{ order.created_at }}</p>
                    </div>
                  </td>
                  <td>
                    <div class="wh-item-info">
                      <a href="#" class="font-weight-bold">{{ order.restaurant.name }}</a>
                      <p> <span v-for="orderItems in order.orderitems" :key="orderItems.id">{{ orderItems.name }}, </span></p>
                    </div>
                  </td>
                  <td>
                    <span class="wh-tem-status text-warning font-weight-bold" v-if="order.orderstatus_id === 1"><router-link to="/orderdetails"> Order Placed  &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-warning font-weight-bold" v-if="order.orderstatus_id === 2"><router-link to="/orderdetails"> Order Accepted &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-warning font-weight-bold" v-if="order.orderstatus_id === 3"><router-link to="/orderdetails"> Delivery Assigned &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-warning font-weight-bold" v-if="order.orderstatus_id === 4"><router-link to="/orderdetails"> Picked Up &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-success font-weight-bold" v-if="order.orderstatus_id === 5"><router-link to="/orderdetails">Completed &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-danger font-weight-bold" v-if="order.orderstatus_id === 6"><router-link to="/orderdetails">Cancelled &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-warning font-weight-bold" v-if="order.orderstatus_id === 7"><router-link to="/orderdetails"> Ready for Pickup  &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-warning font-weight-bold hide" v-if="order.orderstatus_id === 8"><router-link to="/orderdetails">Awaiting Payment &rsaquo;</router-link></span>
                    <span class="wh-tem-status text-danger font-weight-bold hide" v-if="order.orderstatus_id === 9"><router-link to="/orderdetails">Payment Failed &rsaquo;</router-link></span>
                  </td>
                  <td>
                    <span class="wh-tem-price">${{ order.total }}</span>
                  </td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
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
import SildeBar from '@/views/myaccount/SildeBar.vue'
import { getOrders } from '@/store/api'

export default {
  created () {},
  components: {
    Headbar,
    Footer,
    SildeBar
    // BContainer,
    // BRow,
    // BCol,
    // BForm,
    // BFormGroup,
    // BFormInput
  },
  data () {
    return {
      form: {
        value: ''
      },
      orders: []
    }
  },
  mounted () {
    this.getOrder()
    setInterval(() => {
      this.getOrder()
    }, 10000)
  },
  methods: {
    getOrder () {
      getOrders(this.form).then(res => {
        console.log(res.data.data)
        this.orders = res.data.data
      })
    }
  },

  name: 'checkout'
}
</script>
<style>
ul.text-list li.text-link {
  list-style: none;
  font-size: 15px;
  line-height: 3;
}
ul.text-list {
  padding-left: 7px;
}
li.text-link i {
  color: #ddae71;
}
a.text-left {
  margin-left: 15px;
}
a.text-left.active {
  color: #ddae71;
  font-weight: 600 !important;
}
.heading-text {
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
}
.wishlist-table table tbody tr td .wh_item .wh-item-info a {
    font-size: 22px;
    font-weight: 700;
}
.wishlist-table {
    margin: 0 0 25px;
    -webkit-box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    box-shadow: 0 0 15px rgb(0 0 0 / 10%);
}
.wishlist-table table thead tr th {
    border: none;
    background: #f6f6f6;
    color: #545454;
    padding: 4px 21px;
    font-family: nunito,sans-serif;
    font-weight: 600;
    text-align: left;
    font-size: 13px;
}
p {
    font-size: 12px;
    line-height: 2;
    color: #545454;
}s
.wishlist-table table tbody tr td .wh_item .wh-item-info span.wh-tem-price {
    color: #f41f31;
    font-weight: 600;
}
.wishlist-table table tbody tr td .wh_item img {
    max-width:50px;
    display: block;
    border-radius: 5px;
}
.wishlist-table table tbody tr td {
    padding: 18px 20px;
    text-align: left;
    border: none;
}
.product-quantity.style2 .qtySelector input {
    left: 0;
    border: none;
    background-color: #efefef;
    border-radius: 50px;
    margin: 0 10px;
    color: #f41f31;
}

span.wh-tem-price {
    color: red;
    font-weight: 500;
    font-size: 15px;
}
tr.line {
    border-bottom: 2px solid #f6f6f6;
}
.hide {
  display:none !important;
}
tr.line:hover {
    border-bottom: 2px solid #f6f6f6;
    background: #dfdedd;
}
@media (max-width: 991px){
.menu-sample .title {
    font-size: 4rem;
}}
</style>
