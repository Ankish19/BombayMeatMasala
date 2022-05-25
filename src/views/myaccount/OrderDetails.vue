/* eslint-disable no-tabs */
<template>
  <div id="checkout">
    <Headbar></Headbar>
    <!-- Page Title -->
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mb-0">Orders Details</h1>
            <h4 class="text-muted mb-0">
              Some informations about our restaurant
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
                Orders #1215451<br/>
                   <span class="middle-price">Delivered, 2 Items, $269</span>
              </h4>
              <div class="row mb-5">
                <div class="col-md-12">
                    <div class="md-stepper-horizontal orange">
                      <div class="md-step active done">
                        <div class="md-step-circle"><span>1</span></div>
                        <div class="md-step-title">Order</div>
                        <div class="md-step-bar-left"></div>
                        <div class="md-step-bar-right"></div>
                      </div>
                      <div class="md-step active editable">
                        <div class="md-step-circle"><span>2</span></div>
                        <div class="md-step-title">Prepare Food</div>
                        <!-- <div class="md-step-optional">Optional</div> -->
                        <div class="md-step-bar-left"></div>
                        <div class="md-step-bar-right"></div>
                      </div>
                      <div class="md-step active done">
                        <div class="md-step-circle"><span>4</span></div>
                        <div class="md-step-title">Delivered</div>
                        <div class="md-step-bar-left"></div>
                        <div class="md-step-bar-right"></div>
                      </div>
                    </div>
                </div>
                <div class="col-md-12 text-center mb-3">
                <p class="text-success font-weight-bold"><i class="fa fa-check" ></i> Order Delivered on 29 December 29, 11:00 AM By John</p>
                </div>
                 <div class="col-md-12 text-center mb-3">
                  <h4 class="border-bottom pb-4">
                Bill Details
              </h4>
                 </div>
                 <div class="col-md-12">
                 <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Veg Momos x 1</td>
                    <td class="text-right">$115</td>
                  </tr>
                  <tr>
                    <td>Masala Chaap x 1</td>
                    <td class="text-right">$220</td>
                  </tr>
                  </tbody>
                 </table>
                <table class="table table-bordered" style="font-size:12px;">
                <tbody>
                   <tr>
                    <td>Order Packing Charges</td>
                    <td class="text-right">$14</td>
                  </tr>
                  <tr>
                    <td>Delivery Partner fee</td>
                    <td class="text-right">$14</td>
                  </tr>
                  <tr>
                    <td>Discount Applied (FreeTest)</td>
                    <td class="text-right">-$74</td>
                  </tr>
                  <tr>
                    <td>Taxes</td>
                    <td class="text-right">$13</td>
                  </tr>
                  <tr>
                    <td>Item Total</td>
                    <td class="text-right">$261</td>
                  </tr>
                  <tr>
                    <td>Paid Via Card</td>
                    <td class="text-right">$261</td>
                  </tr>
                </tbody>
              </table>
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
import //   BContainer,
//   BRow,
//   BCol,
//   BForm,
//   BFormGroup,
//   BFormInput
'bootstrap-vue'
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
span.middle-price {
    font-size: 14px;
    margin-left: 47px;
    color: black;
    font-weight: 500;
}

html {
-webkit-font-smoothing: antialiased!important;
-moz-osx-font-smoothing: grayscale!important;
-ms-font-smoothing: antialiased!important;
}
body {
  font-family: 'Open Sans', sans-serif;
  font-size:16px;
  color:#555555;
}

.md-stepper-horizontal {
display:table;
width:100%;
margin:0 auto;
background-color:#FFFFFF;
}

.md-stepper-horizontal .md-step {
display:table-cell;
position:relative;
padding:24px;
}
.md-stepper-horizontal .md-step:hover,
.md-stepper-horizontal .md-step:active {
background-color:rgba(0,0,0,0.04);
}
.md-stepper-horizontal .md-step:active {
border-radius: 15% / 75%;
}
.md-stepper-horizontal .md-step:first-child:active {
border-top-left-radius: 0;
border-bottom-left-radius: 0;
}
.md-stepper-horizontal .md-step:last-child:active {
border-top-right-radius: 0;
border-bottom-right-radius: 0;
}
.md-stepper-horizontal .md-step:hover .md-step-circle {
background-color:#757575;
}
.md-stepper-horizontal .md-step:first-child .md-step-bar-left,
.md-stepper-horizontal .md-step:last-child .md-step-bar-right {
display:none;
}
.md-stepper-horizontal .md-step .md-step-circle {
width:30px;
height:30px;
margin:0 auto;
background-color:#999999;
border-radius: 50%;
text-align: center;
line-height:30px;
font-size: 16px;
font-weight: 600;
color:#FFFFFF;
}
.md-stepper-horizontal.green .md-step.active .md-step-circle {
background-color:#00AE4D;
}
.md-stepper-horizontal.orange .md-step.active .md-step-circle {
background-color:#ddae71;
}
.md-stepper-horizontal .md-step.active .md-step-circle {
background-color: rgb(33,150,243);
}
.md-stepper-horizontal .md-step.done .md-step-circle:before {
font-family:'FontAwesome';
font-weight:100;
content: "\f00c";
}
.md-stepper-horizontal .md-step.done .md-step-circle *,
.md-stepper-horizontal .md-step.editable .md-step-circle * {
display:none;
}
.md-stepper-horizontal .md-step.editable .md-step-circle {
-moz-transform: scaleX(-1);
-o-transform: scaleX(-1);
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
}
.md-stepper-horizontal .md-step.editable .md-step-circle:before {
font-family:'FontAwesome';
font-weight:100;
content: "\f040";
}
.md-stepper-horizontal .md-step .md-step-title {
margin-top:16px;
font-size:16px;
font-weight:600;
}
.md-stepper-horizontal .md-step .md-step-title,
.md-stepper-horizontal .md-step .md-step-optional {
text-align: center;
color:rgba(0,0,0,.26);
}
.md-stepper-horizontal .md-step.active .md-step-title {
font-weight: 600;
color:rgba(0,0,0,.87);
}
.md-stepper-horizontal .md-step.active.done .md-step-title,
.md-stepper-horizontal .md-step.active.editable .md-step-title {
font-weight:600;
}
.md-stepper-horizontal .md-step .md-step-optional {
font-size:12px;
}
.md-stepper-horizontal .md-step.active .md-step-optional {
color:rgba(0,0,0,.54);
}
.md-stepper-horizontal .md-step .md-step-bar-left,
.md-stepper-horizontal .md-step .md-step-bar-right {
position:absolute;
top:36px;
height:1px;
border-top:1px solid #DDDDDD;
}
.md-stepper-horizontal .md-step .md-step-bar-right {
right:0;
left:50%;
margin-left:20px;
}
.md-stepper-horizontal .md-step .md-step-bar-left {
left:0;
right:50%;
margin-right:20px;
}
.md-stepper-horizontal .md-step.editable .md-step-circle:before {
    font-family: 'FontAwesome';
    font-weight: 100;
    content: "\f0f5 ";
}
</style>
