<template>
  <div class="about">
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="mb-0">About Us</h1>
              <h4 class="text-muted mb-0">
                Some informations about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="section section-bg-edge text-left">
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-6">
              <img src="@/assets/bg-chef.jpg" alt="" />
            </div>
            <div class="col-md-6 mt-3">
              <h2 class="font-weight-bold">Our Story</h2>
              <p class="lead">
               Tandoori Nights is a nostalgic Calgary-based restaurant. The restaurant's design evokes the warmth and casual elegance of the quintessential Calgary
                restaurants that serve as our inspiration, updated for today.
              </p>
              <p class="mt-1">
                Our menu spotlights a seasonal selection of salads, vegetables, and many more to explore. Indian style dishes and Kids menu celebrates iconic
                 recipes.  Through it all, Tandoori Nights has never veered from its mission to keep the fun in Tandoori recipes. By mixing high-quality
                 ingredients with guilty pleasures, traditional flavors with the unexpected, & a youngster's imagination with an adult’s knowing wink & satirical tongue, we spin a new take on the old-school Indian Style experience. It's both for kids & for those of us who are kids at heart.
              </p>
            </div>
          </div>
        </div>
         <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-6 mt-3">
              <h2 class="font-weight-bold">Get an Experience</h2>
              <p class="lead">
               Tandoori Nights flavors are the best to experience ever. Making everything in small batches allows us to be creative and rotate our menu constantly.
               We hope to welcome you soon.
              </p>
            </div>
                <div class="col-md-6">
              <img src="@/assets/about2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <!-- Section -->
      <section class="section section-lg dark bg-dark">
        <!-- BG Image -->
        <div class="bg-image bg-parallax">
          <img src="../assets/bg-croissant.jpg" alt="" />
        </div>

        <div class="container text-center mt-3">
          <div class="col-lg-8 offset-lg-2">
            <h2 class="mb-3">Would you like to visit Us?</h2>
            <h5 class="text-muted">
              Book a table even right now or make an online order!
            </h5>
            <router-link class="btn btn-outline-primary" to="/menu">
              <span>Order Online</span></router-link>
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
  name: 'About',
  components: {
    Headbar,
    Footer
  }
}
</script>
