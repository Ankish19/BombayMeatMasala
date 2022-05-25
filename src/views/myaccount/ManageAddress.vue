<template>
  <div id="manage-address">
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
                <i
                  class="fa fa-home text-primary mr-3"
                  aria-hidden="true"
                ></i>
                Manage Address
              </h4>
              <div class="row mb-5">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <p class="heading-text">Save Address</p>
                    </div>
                    <div class="col-md-6 text-right">
                      <button class="btn btn-primary btn-sm">
                        <span><router-link to='/addmanageaddress'>
                        Add Address   </router-link></span>
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="list-group">
                        <div v-for="(address, index) in addresses" :key="index">
                          <div v-if="index % 2 == 0">
                            <div
                              class="list-group-item list-group-item-action active"
                              aria-current="true"
                            >
                              <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1 font-weight-bold">{{ address.tag }}
                                  <i class="fa fa-star text-white ml-1" aria-hidden="true"></i>
                                </h5>
                                <div>
                                  <small style="font-size:20px; position: relative; top: 14px;" class="text-white mr-2" @click="delAddress(address.id)"><i class="fa fa-trash-o" aria-hidden="true"></i></small>
                                  <small style="font-size:20px; position: relative; top: 14px;" class="text-white" @click="defaultAddress(address.id)">
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                  </small>
                                </div>
                              </div>
                              <p class="mb-1">
                                {{ address.address }}
                              </p>
                            </div>
                        </div>
                        <div v-else>
                          <div
                            class="list-group-item list-group-item-action"
                          >
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1 font-weight-bold">{{ address.tag }}
                                <i class="fa fa-star text-primary ml-1" aria-hidden="true"></i>
                              </h5>
                              <div>
                                <small style="font-size:20px; position: relative; top: 14px;" class="text-danger mr-2" @click="delAddress(address.id)"><i class="fa fa-trash-o" aria-hidden="true"></i></small>
                                <small style="font-size:20px; position: relative; top: 14px;" class="text-danger" @click="defaultAddress(address.id)">
                                  <i class="fa fa-star-o" aria-hidden="true"></i>
                                </small>
                              </div>
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
                  <!-- /input-group -->
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
import { getAddresses, deleteAddress, setDefaultAddress } from '@/store/api'
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
  data () {
    return {
      addresses: [],
      userData: [],
      form: {
        address_name: '',
        address_id: 0
      }
    }
  },
  mounted () {
    this.getAddr()
    this.userDat()
  },
  methods: {
    userDat () {
      this.userData = getLocalStorage('userData')
    },
    getAddr () {
      getAddresses().then(res => {
        console.log(res.data)
        this.addresses = res.data
      })
    },
    defaultAddress (address) {
      this.form.address_id = address
      setDefaultAddress(this.form).then(res => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    delAddress (address) {
      this.form.address_id = address
      deleteAddress(this.form).then(res => {
        console.log(res.data)
        this.getAddr()
      })
    }
  },
  name: 'ManageAddress'
}
</script>
<style>
.card {
    border: none;
    border-radius: 10px;
    width: 275px;
    margin-top: 20%
}

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
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ddae71;
    border-color: #ddae71;
}
</style>
