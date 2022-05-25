<template>
  <div id="checkout">
    <Headbar></Headbar>
    <!-- Page Title -->
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mb-0">My Wallet</h1>
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
                  class="fa fa-money text-primary mr-3"
                  aria-hidden="true"
                ></i>
                My Wallet
              </h4>
              <div class="row mb-5">
                    <div class="card-bottom pt-3 px-3 mb-2">
                      <div class="d-flex flex-row justify-content-between text-align-center">
                          <div class="d-flex flex-column"><span>Balance amount</span>
                              <p><i class="fa fa-usd" aria-hidden="true"></i> <span class="text-white">88,989</span></p>
                          </div> <button class="btn btn-secondary"><i class="fa fa-sign-in" aria-hidden="true"></i></button>
                      </div>
                      <div class="col-md-12"><img src="@/assets/logo.svg" alt="logo" width="80px" class="card-img"></div>
                      <div class="col-md-12 card-text">XXXX-XXXX-XXXX-7888</div>
                      <div class="row">
                      <div class="col-md-6 card-sub">06 / 2025</div>
                      <div class="col-md-6 card-sub">Prepaid Card By Bombay Chowpatty</div>
                      </div>
                  </div>
              </div>
              <!--  -->
              <!--  -->
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

  name: 'Wallet'
}
</script>
<style>
.fa-ellipsis-v {
    font-size: 10px;
    color: #C2C2C4;
    margin-top: 6px;
    cursor: pointer
}

.text-dark {
    font-weight: bold;
    margin-top: 8px;
    font-size: 13px;
    letter-spacing: 0.5px
}

.card-bottom {
    border-radius: 6px;
    background: linear-gradient(
89deg, #161615, #5aab39ed);
}

.flex-column {
    color: #adb5bd;
    font-size: 13px
}

.flex-column p {
    letter-spacing: 1px;
    font-size: 18px
}

.btn-secondary {
    height: 40px !important;
    margin-top: 3px
}

.btn-secondary:focus {
    box-shadow: none
}
.card {
    width: 390px;
    background: #F06292;
    border-radius: 15px;
    border: none
}
.card-text {
    font-size: 36px;
    color: #ffffff;
    position: relative;
    bottom: 24px;
}
.col-md-6.card-sub {
    color: #fff8f8;
    margin-bottom: 17px;
}
.card-bottom.pt-3.px-3.mb-2 {
    margin: auto;
}
.card-img{
  position: relative;
    top: -18px;
    width: 80px;
}
</style>
