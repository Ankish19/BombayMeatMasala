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
                  <div ref="mapDiv" style="width: 100%; height: 400px" />

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
                            <a
                              @click="currentLoc" class="cursor-pointer"><i class="fa fa-location-arrow" aria-hidden="true"></i>
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
                        id="location"
                        class="form-control"
                        v-model="form.address"
                        placeholder="Location"
                      />
                      <div class="input-group mt-2">
                      <b-form-input
                        type="text"
                        id="house"
                        class="form-control"
                        v-model="form.house"
                        placeholder="Full Address"
                      />
                      </div>
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
                    <span class="text-danger" v-if="error">{{ error }}</span>
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
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { Loader } from '@googlemaps/js-api-loader'
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import SildeBar from '@/views/myaccount/SildeBar.vue'
import { saveAddress } from '@/store/api'
import axios from 'axios'
import { required } from 'validations'
import {
  BForm,
  BFormGroup,
  BFormInput
} from 'bootstrap-vue'

export default {
  name: 'AddManageAddress',
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
  data () {
    return {
      form: {
        house: '',
        address: '',
        search: '',
        tag: '',
        required
      },
      error: '',
      lat: '',
      lng: '',
      map: null
    }
  },
  mounted () {
    this.showMap()
  },
  methods: {
    currentLoc () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      } else {
        this.error = 'Geolocation is not supported.'
      }
    },
    showPosition (position) {
      this.form.latitude = position.coords.latitude
      this.form.longitude = position.coords.longitude

      const marker = new window.google.maps.Marker({
        position: { lat: this.form.latitude, lng: this.form.longitude }
      })
      marker.setMap(this.map)

      this.getCurrentLoc(this.form.latitude, this.form.longitude)
    },
    async showMap () {
      const directionsRenderer = new window.google.maps.DirectionsRenderer()
      const GOOGLE_MAPS_API_KEY = 'AIzaSyBLVIcbGHiO0lFwfgZgKBx9UlSz_yrl_IU'
      const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
      const mapDiv = this.$refs.mapDiv
      await loader.load()
      this.map = new window.google.maps.Map(mapDiv, {
        center: { lat: 51.033332421752895, lng: -114.07961939718315 },
        // center: currPos.value,
        zoom: 10
      })
      directionsRenderer.setMap(this.map)
    },
    getCurrentLoc (lat, lng) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBLVIcbGHiO0lFwfgZgKBx9UlSz_yrl_IU`).then(res => {
        let loc = ''
        res.data.results.filter(function (item) {
          if (item.types[0] === 'route') {
            loc = item.formatted_address
          }
        })
        // document.getElementById('currentLocation').innerHTML = loc;
        this.form.address = loc
      })
    },
    getAddressData (addressData, placeResultData) {
      this.form.address = placeResultData.formatted_address
      this.form.longitude = addressData.longitude
      this.form.latitude = addressData.latitude
    },
    address () {
      this.error = ''
      if (!this.form.house || !this.form.address || !this.form.tag) {
        this.error = 'All fields are required.'
        this.$toast.error('All fields are required.')
      } if (this.error === '') {
        saveAddress(this.form).then(res => {
          console.log(res.data)
          this.$toast.success('New address successfully')
          if (localStorage.getItem('page') === 'checkout') {
            localStorage.removeItem('page')
            this.$router.push('/checkout')
          } else {
            this.$router.push('/manageaddress')
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
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
.cursor-pointer{
  cursor: pointer !important;
}
</style>
