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
                  class="fa fa fa-plus-square text-primary mr-3"
                  aria-hidden="true"
                ></i>
                Add Manage Address
              </h4>
              <div class="row mb-5">
                <div class="col-md-6">
                  <div ref="mapDiv" style="width: 100%; height: 61vh" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18876468.20030772!2d-113.72221585646197!3d54.7227051740391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1640674008590!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div class="col-md-6">
                <validation-observer ref="addressValidate">
                  <b-form @submit.prevent="address">
                  <b-form-group
                      label="Address"
                      label-for="address" >
                      <validation-provider
                          #default="{ errors }"
                          name="Address"
                          rules="required"
                      >
                          <vue-google-autocomplete
                            ref="address"
                            id="map"
                            classname="form-control"
                            placeholder="Search Location"
                            v-on:placechanged="getAddressData"
                            country="ca"
                            name="address"
                          >
                          </vue-google-autocomplete>
                          <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                  </b-form-group>
                        <div class="display-list mt-1">
                          <p>
                            <a href="#"
                              ><i class="fa fa-location-arrow" aria-hidden="true"></i>
                              Use My Current Location</a
                            >
                          </p>
                        </div>
                  <hr />
                  <div class="row">
                    <div class="col-md-12">
                      <h2 style="font-size: 16px" class="font-weight-bold">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>  New Address
                      </h2>
                    </div>
                      <b-form-input
                        type="text"
                        id="house"
                        class="form-control"
                        v-model="form.house"
                        placeholder="Full Address"
                      />
                    <div class="input-group mt-2">
                      <select
                        class="form-control form-select"
                        aria-label="Default select example"
                        v-model="form.tag"
                      >
                        <option selected>Save Favorites Address</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                      </select>
                    </div>
                    <div class="col-md-12 mt-2">
                      <button class="btn btn-primary w-100" type="submit">
                        <span>Save Address</span>
                      </button>
                    </div>
                  </div>
                  <!-- /input-group -->
                  </b-form>
                  </validation-observer>
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
import { ref, onMounted } from 'vue'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { Loader } from '@googlemaps/js-api-loader'
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import SildeBar from '@/views/myaccount/SildeBar.vue'
import { saveAddress } from '@/store/api'
import { required } from 'validations'
import {
  BForm,
  BFormGroup,
  BFormInput
} from 'bootstrap-vue'

export default {
  setup () {
    const GOOGLE_MAPS_API_KEY = 'AIzaSyBLVIcbGHiO0lFwfgZgKBx9UlSz_yrl_IU'
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    // const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer()
    const map = ref(null)
    const mapDiv = ref(null)

    onMounted(async () => {
      console.log('load map')
      await loader.load()
      map.value = new window.google.maps.Map(mapDiv.value, {
        center: { lat: 54.78122724085885, lng: -125.01301671032266 },
        // center: { lat: 51.033332421752895, lng: -114.07961939718315 },
        // center: currPos.value,
        zoom: 10
      })
      directionsRenderer.setMap(map.value)
    })

    return { mapDiv }
  },
  data () {
    return {
      form: {
        house: '',
        address: '',
        search: '',
        tag: '',
        required
      }
    }
  },
  created () {},
  components: {
    Headbar,
    Footer,
    SildeBar,
    VueGoogleAutocomplete,
    // BContainer,
    BForm,
    BFormGroup,
    BFormInput,
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    getAddressData (addressData, placeResultData) {
      this.form.address = placeResultData.formatted_address
      this.form.longitude = addressData.longitude
      this.form.latitude = addressData.latitude
    },
    address () {
      this.$refs.addressValidate.validate().then(success => {
        if (success) {
          saveAddress(this.form).then(res => {
            console.log(res.data)
          }).catch((err) => {
            console.log(err)
          })
        }
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
</style>
