<template>
  <div class="cancel">
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <section class="section section-bg-edge text-left">
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-12 text-center">
              <img src="@/assets/cancel.png" alt="" />
            </div>
            <div class="col-md-12 mt-5">
              <h2 class="font-weight-bold text-center">Cancel</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Content / End -->
    <Footer></Footer>
  </div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'

export default {
  methods: {},
  name: 'cancel',
  components: {
    Headbar,
    Footer
  },
  mounted () {
    localStorage.removeItem('submitOrder')
  }
}
</script>
