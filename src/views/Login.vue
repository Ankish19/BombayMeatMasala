<template>
  <div>
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
       <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mt-5">
              <h1 class="mb-0 text-center">login</h1>
              <h4 class="text-muted  text-center mb-0">
                Some information about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>
      <!-- Section -->
      <section class="sectionbg">
        <b-container>
          <b-form @submit.prevent="userLogin">
            <b-row>
               <!-- <b-form-input
                  v-model="form.email"
                  placeholder="Email"
                ></b-form-input> -->
              <b-col cols="12"  md="6" class="mx-auto">
                <!--<b-col cols="12">
                  <h2 class="font-weight-bold">Login Form</h2>
                </b-col>-->
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.email"
                        type="email"
                        placeholder="Email"
                        :class="[error !== ''?'border-danger':'']"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
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
                </b-col>
                <div class="text-danger text-left">
                  <span v-if="error">
                  {{ error }}
                </span>
                </div>
                <b-col cols="12" class="mt-3">
                  <b-form-group>
                    <b-button class="w-100" type="submit"
                      ><span>Login</span></b-button
                    >
                  </b-form-group>
                </b-col>
                <!-- <b-col cols="12" class="mt-3"
                  ><h4 class="font-weight-bold text-center">OR</h4></b-col
                >
                <b-col cols="12" class="mt-3">
                  <b-form-group>
                    <router-link to="/otp" class="btn btn-primary w-100"
                      ><span>Login With OTP</span>
                    </router-link>
                  </b-form-group>
                </b-col> -->
                <b-row>
                  <b-col cols="6" class="mt-3">
                    <p class="text-left">
                      <router-link to="/register"
                        ><strong>Create an Account ?</strong></router-link
                      >
                    </p>
                  </b-col>
                  <b-col cols="6" class="mt-3">
                    <p class="text-right">
                      <router-link to="/forget"
                        ><strong>Forget password</strong></router-link
                      >
                    </p>
                  </b-col>
                </b-row>
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
import { login } from '@/store/api'
import { saveLocalStorage } from '@/store/service'
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
  props: {
  },
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  components: {
    BForm,
    Headbar,
    Footer,
    BFormGroup,
    BFormInput,
    BButton,
    BRow,
    BCol,
    BContainer
  },
  methods: {
    userLogin () {
      this.error = ''
      login(this.form).then((res) => {
        if (res.data.success === true) {
          // localStorage.setItem('userData', res.data.data)
          saveLocalStorage('userData', JSON.stringify(res.data.data))
          saveLocalStorage('userDataVerify', res.data.data.verified_at ? 'true' : 'false')
          this.$router.push('/myaccount')
        } else {
          this.error = 'Invalid email/ password'
          this.$toast.error('Invalid email/ password')
        }
      })
    }
  }
}
</script>
