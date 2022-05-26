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
              <h1 class="mb-0">Register</h1>
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
          <b-form @submit.prevent="save">
            <b-row>
              <b-col cols="12"  md="6" class="mx-auto">
                <b-col cols="12">
                  <b-form-group>
                    <b-form-input
                      v-model="form.name"
                      placeholder="Name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.phone"
                        placeholder="Phone"
                        :class="[(error.error !== ''?'border-danger':'') || (err !== ''?'border-danger':'')]"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.email"
                        placeholder="Email"
                        type="email"
                        :class="[(error.error !== ''?'border-danger':'') || (err !== ''?'border-danger':'')]"
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
                  <span v-if="err">
                  {{ err }}
                </span>
                </div>
                <b-col cols="12" class="mt-3">
                  <b-form-group>
                    <b-button class="w-100" type="submit"><span>Submit</span></b-button>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="mt-3">
                  <p>
                    <router-link to="/login"
                      ><strong>Already have an account?</strong></router-link
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
import { register, storeSlug } from '@/store/api'
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
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        password: '',
        storeSlug: storeSlug
      },
      err: '',
      error: {
        error: ''
      }
    }
  },
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
  methods: {
    save () {
      this.error.error = ''
      this.err = ''
      if (!this.form.name || !this.form.email || !this.form.phone || !this.form.password) {
        this.err = 'All fields are required.'
      } else {
        register(this.form).then(res => {
          console.log(res.data)
          if (res.data.success === true) {
            // localStorage.setItem('userData', res.data.data)
            saveLocalStorage('userData', JSON.stringify(res.data.data))
            saveLocalStorage('userDataVerify', false)
            this.$router.push('/otpverify?type=' + res.data.verification.type)
          } else if (res.data.email_phone_already_used === true) {
            this.error.error = 'this email/ phone already exists'
            this.$toast.error('this email/ phone already exists')
          } else {
            this.error.error = 'Registration failed'
            this.$toast.error('Registration failed')
          }
        })
      }
    }
  }
}
</script>
