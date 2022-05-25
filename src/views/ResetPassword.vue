<template>
  <div>
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
       <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mt-6">
              <h1 class="mb-0">Change Password</h1>
              <h4 class="text-muted mb-0">
                Some information about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="sectionbg">
      <h4 class="text-center">Password reset mail sent</h4>
        <b-container>
          <b-form @submit.prevent="resetPassword">
            <b-row>
              <b-col cols="6" class="mx-auto">
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.email"
                        placeholder="Email"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.code"
                        placeholder="Reset Code"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                  <span class="text-danger" v-if="error.code">{{ error.code }}</span>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.password"
                        placeholder="Password"
                        type="password"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                  <span class="text-danger" v-if="error.password">{{ error.password }}</span>
                </b-col>
                <b-col cols="12" class="mt-3">
                  <b-form-group>
                    <b-button class="w-100" type="submit"><span>Submit</span></b-button>
                  </b-form-group>
                </b-col>
                   <!-- <b-col cols="12" class="mt-3">
                  <p>
                    <router-link to="/otp"
                      ><strong>Forget With OTP?</strong></router-link
                    >
                  </p>
                </b-col> -->
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
import { changeUserPassword } from '@/store/api'
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
        email: '',
        code: '',
        password: ''
      },
      error: {
        email: '',
        code: '',
        password: ''
      }
    }
  },
  mounted () {
    this.form.email = this.$route.query.email
  },
  methods: {
    resetPassword () {
      this.error.code = ''
      this.error.password = ''
      if (this.form.password.length < 8) {
        this.error.password = 'Password contains atleast 8 characters'
      } else if (!this.form.code) {
        this.error.code = 'Enter reset code'
      } else {
        changeUserPassword(this.form).then(res => {
          console.log(res.data)
          if (res.data.success === false && res.data.message === 'Invalid OTP') {
            this.error.code = 'Invalid OTP'
          } else if (res.data.success === true) {
            this.$toast.success('Password changed successfully')
            this.$router.push('/login')
          }
        })
      }
    }
  }
}
</script>
