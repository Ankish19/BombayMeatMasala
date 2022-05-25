<template>
  <div>
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="mb-0">OTP Verify</h1>
              <h4 class="text-muted mb-0">
                Some information about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="sectionbg">
        <b-container>
            <b-form @submit.prevent="verOtp">
            <b-row>
              <b-col cols="6" class="mx-auto">
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.otp"
                        placeholder="Enter OTP"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-button class="w-100" type="submit"><span>Verify OTP</span></b-button>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="text-right">
                  <p class="pd-a1">
                    <router-link to="#"
                      @click="resend_otp"><strong>Resend Code </strong></router-link
                    >
                  </p>
                </b-col>
              </b-col>
            </b-row>
          </b-form>
        </b-container>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import { getLocalStorage } from '@/store/service'
import { verifyOtp, resendVerifyOtp } from '@/store/api'
import {
  BForm,
  BFormGroup,
  BButton,
  BRow,
  BFormInput,
  BCol,
  BContainer
} from 'bootstrap-vue'
export default {
  name: 'Login',
  components: {
    Headbar,
    Footer,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BRow,
    BCol,
    BContainer
  },
  data () {
    return {
      form: {
        email: getLocalStorage('userData').email,
        phone: getLocalStorage('userData').phone,
        otp: ''
      }
    }
  },
  methods: {
    verOtp () {
      verifyOtp(this.form).then(res => {
        if (res.data.valid_otp === true) {
          this.$router.push('/myaccount')
        } else {
          console.log('otp invalid')
        }
      })
    },
    resend_otp () {
      resendVerifyOtp(this.form).then(res => {
        console.log(res.dat)
      })
    }
  }
}
</script>
<style>
.pd-a1 {
  position: relative;
  top: -3px;
  right: -1px;
}
</style>
