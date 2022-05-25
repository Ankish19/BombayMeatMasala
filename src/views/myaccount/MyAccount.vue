<template>
  <div id="checkout">
    <Headbar></Headbar>
    <!-- Page Title -->
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mb-0">My Account</h1>
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
                <i class="fa fa-user" aria-hidden="true"></i>
                My Profile
              </h4>
              <div class="row mb-5">
              <div class="col-md-12">
                 <div class="blog-details-wrap ptb-100">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-12 order-xl-2 order-lg-1 order-md-1 order-1">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  class="rounded-circle img-fluid"
                  style="width: 150px"
                />
                <h5 class="my-3 profile">{{ user?user.name:'' }}</h5>
                <p class="text-muted mb-2">
                  <i class="fa fa-map-marker" aria-hidden="true"></i> {{ user.default_address?user.default_address.address:'' }}
                </p>
                <p class="text-muted mb-2">
                  <a href="tel:4434567890"><i class="fa fa-phone" aria-hidden="true"></i> {{ user?user.phone:'' }}</a>
                </p>
                <p class="text-muted mb-4">
                  <a href="mailto:User@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i> {{ user?user.email:'' }}</a>
                </p>
                <div class="row">
                <div class="col-md-6">
                    <div class="d-flex justify-content-center mb-2">
                    <router-link to="/login" class="btn btn-primary w-100"><span><i class="fa fa-pencil" aria-hidden="true"></i>  Update</span></router-link>
                </div>
                </div>
                <div class="col-md-6">
                 <div class="d-flex justify-content-center mb-2">
                  <router-link to="/login" class="btn btn-danger w-100"><span><i class="fa fa-pencil" aria-hidden="true"></i>  Password Changes</span></router-link>
                </div>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              </div>
                <!-- /.col-lg-6 -->
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
import { getLocalStorage } from '@/store/service'
import //   BContainer,
//   BRow,
//   BCol,
//   BForm,
//   BFormGroup,
//   BFormInput
'bootstrap-vue'
export default {
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
      user: []
    }
  },
  mounted () {
    this.userData()
  },
  methods: {
    userData () {
      this.user = getLocalStorage('userData')
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
.profile{
    font-weight: 700;
    color: #ddae71;
    font-family: 'Raleway';
}
</style>
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
