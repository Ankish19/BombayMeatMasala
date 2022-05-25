<template>
  <div class="home">
    <Headbar></Headbar>
    <section class="section section-main section-main-2 bg-dark dark">
      <div id="section-main-2-slider" class="section-slider inner-controls">
        <!-- Slide -->
        <div class="slide">
          <div class="bg-image zooming">
            <img
              src="@/assets/01.jpg"
              alt=""
            />
          </div>
          <div class="container v-center">
            <h1 class="display-2 mb-2">Good Food Choices </h1>
            <h4 class="text-muted mb-5">Are Good Investments!</h4>
            <router-link to="/menu" class="btn btn-outline-primary btn-lg">
              <span>Get it now!</span>
              </router-link>
          </div>
        </div>
        <!-- Slide -->
        <div class="slide">
          <div class="bg-image zooming">
            <img
              src="@/assets/02.jpg"
              alt=""
            />
          </div>
          <div class="container v-center">
            <h1 class="display-2 mb-2">Your Delicious</h1>
            <h4 class="text-muted mb-5">Food Is Here!</h4>
             <router-link to="/menu" class="btn btn-outline-primary btn-lg">
              <span>Order Now</span>
              </router-link>
          </div>
        </div>
        <!-- Slide -->
        <div class="slide">
          <div class="bg-image zooming">
            <img
              src="@/assets/03.jpg"
              alt=""
            />
          </div>
          <div class="container v-center">
            <h1 class="display-2">Discover the New </h1>
               <h4 class="text-muted">Way to Love Food!</h4>
            <div class="btn-group">
 <router-link to="/menu" class="btn btn-outline-primary btn-lg">
              <span>Order Now</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section - About -->
    <section class="section section-bg-edge">
      <div class="image right col-md-6 offset-md-6">
        <div class="bg-image">
          <img
            src="@/assets/bg-burger.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="container">
        <div class="col-lg-5 col-md-9 text-left">
          <div class="rate mb-5 rate-lg">
            <i class="fa fa-star active"></i><i class="fa fa-star active"></i
            ><i class="fa fa-star active"></i><i class="fa fa-star active"></i
            ><i class="fa fa-star"></i>
          </div>
          <h1 class="display-2">About Tandoori <strong style="color:#DDAE71;">Night</strong></h1>
          <p class="lead text-muted mb-5">
            Tandoori Nights reimagine the wonders of Canadian fare in a space that evokes a bygone era of a boisterous yet
            elegant Canada—all within the heart of Calgary City.
          </p>
          <!-- Feature -->
          <div class="feature feature-1">
            <div class="feature-icon icon icon-primary">
              <i class="ti ti-desktop"></i>
            </div>
            <div class="feature-content">
              <h4 class="mb-2"><b class="text-heading">The Best of Us</b></h4>
              <p class="text-muted mb-0">
                At Tandoori Nights, we are dedicated to all things seasonal with a market-driven day-time menu that also offers
                a variety of Veg Appetizers and Non - Veg Appetizers.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="feature feature-1">
            <div class="feature-icon icon icon-primary">
              <i class="ti ti-heart"></i>
            </div>
            <div class="feature-content">
              <h4 class="mb-2"><b class="text-heading">The Dedication and Commitment</b></h4>
              <p class="text-muted mb-0">
                Stock up on bread, pastries, and grab n' go salads and sandwiches. At Tandoori Nights, they continue their dedication to our specials
                with come together to celebrate and savor beloved annual traditions, where each experience brims with culinary delights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section - Menu -->
    <section class="section cover protrude pull-up-10">
      <div
        class="menu-sample-carousel carousel inner-controls"
        data-slick='{
                "dots": true,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "infinite": true,
                "responsive": [
                    {
                        "breakpoint": 991,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1
                        }
                    },
                    {
                        "breakpoint": 690,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }'
      >
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/non-veg.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Non-Veg</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/veg-appetizers.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Veg Appetizers</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/veg-main.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Veg Main</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/breads.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Breads</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/breavages.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Beverages</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/kids.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Kids</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/rice.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Rice</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/sides.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Sides</h3>
          </a>
        </div>
         <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="@/assets/sweets.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Sweets</h3>
          </a>
        </div>
      </div>
    </section>
    <!-- Section - Steps -->
    <section class="section bg-dark dark">
      <div class="container text">
        <div class="row text-left">
          <div class="col-md-4">
            <!-- Step -->
            <div class="feature feature-1">
              <div class="feature-icon icon icon-primary">
                <i class="ti ti-shopping-cart"></i>
              </div>
              <div class="feature-content">
                <h4 class="mb-2 text-white font-weight-bold">
                  <a href="#">Pick a dish</a>
                </h4>
                <p class="text-muted mb-0">
                  Pick a dish from the most exotic flavors on our menu!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Step -->
            <div class="feature feature-1">
              <div class="feature-icon icon icon-primary">
                <i class="ti ti-wallet"></i>
              </div>
              <div class="feature-content">
                <h4 class="mb-2 text-white font-weight-bold">Make a payment</h4>
                <p class="text-muted mb-0">
                  Take the most sizzling flavors for a price that is perfect to pay!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Step -->
            <div class="feature feature-1">
              <div class="feature-icon icon icon-primary">
                <i class="ti ti-package"></i>
              </div>
              <div class="feature-content">
                <h4 class="mb-2 text-white font-weight-bold">
                  Recieve your food!
                </h4>
                <p class="text-muted mb-3">
                  Get the enticing Indian-style dishes for you and your specials at Tandoori Nights!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <!-- Section - About -->
        <section class="section section-bg-edge ">

            <div class="image right col-md-6 offset-md-6">
                <div class="bg-image"><img src="@/assets/bg-ts.jpg" alt=""></div>
            </div>

            <div class="container">
                <div class="col-lg-5 col-md-9">
                    <div class="rate mb-5 rate-lg"><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star"></i></div>
                    <h1>The best food in Calgary!</h1>
                    <div class="blockquotes">
                        <!-- Blockquote -->
                        <blockquote class="blockquote light animated" data-animation="fadeInLeft">
                            <div class="blockquote-content">
                                <div class="rate rate-sm mb-3"><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star"></i></div>
                                <p>It’ was amazing feeling for my belly!</p>
                            </div>
                            <footer>
                                <img src="http://assets.suelo.pl/soup/img/avatars/avatar02.jpg" alt="">
                                <span class="name">Mark Johnson<span class="text-muted">, Google</span></span>
                            </footer>
                        </blockquote>
                        <!-- Blockquote -->
                        <blockquote class="blockquote animated" data-animation="fadeInRight" data-animation-delay="300">
                            <div class="blockquote-content dark">
                                <div class="rate rate-sm mb-3"><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star"></i></div>
                                <p>Great food and great atmosphere!</p>
                            </div>
                            <footer>
                                <img src="http://assets.suelo.pl/soup/img/avatars/avatar01.jpg" alt="">
                                <span class="name">Kate Hudson<span class="text-muted">, LinkedIn</span></span>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>

        </section>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
export default {
  props: {},
  name: 'Home',
  components: {
    Headbar,
    Footer
  },
  data () {
    return {}
  }
}
</script>
<style>
h1.mb-0 {
  color: #383c40;
  font-family: Helvetica Neue, Raleway, sans-serif;
}
h4 {
  color: #383c40;
  font-family: Helvetica Neue, Raleway, sans-serif;
}
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}
.modal-header > .close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}
.modal-header {
  width: 100%;
  border-bottom: 1px solid transparent;
}
.header {
  width: 100%;
  border: none !important;
  background-image: url("../assets/burges.jpg");
  height: 180px;
  background-size: cover;
}
h4.modal-title {
  color: white;
  font-size: 30px;
  position: relative;
}
button.close {
  color: white;
}
a.btn.btn-link {
  text-align: left !important;
  position: relative;
  width: 100%;
}
a.btn.btn-link:after {
  position: absolute;
  top: 9px;
  font-size: 0.8em;
  font-family: "themify-icons";
  content: "\e62a";
  text-align: left !important;
  left: 95%;
}
a.btn.btn-link {
  bottom: 11px;
}
h5.mb-0 {
  height: 15px;
}
a.btn.btn-outline-secondary.btn-md {
  width: 120px !important;
  height: auto;
  padding: 13px !important;
  border: 2px solid #000;
}
li.has-dropdown a {
  color: #383c40 !important;
}
.module.left a {
  width: 112px;
  margin: 0px;
}
a.module.module-cart.right {
  color: #723c40;
}
a.menu-link {
  color: #fff;
}
h5.title {
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
}
span.name a {
  color: #383c40;
  font-weight: 800;
}
.cart-table .price {
  font-weight: 500;
  text-align: right;
  width: 95px;
}
.cart-table .price {
  font-weight: 500;
  text-align: right;
  width: 95px;
}
a.panel-cart-action.btn.btn-secondary.btn-block.btn-lg {
  padding: 22px;
  background: #343a40;
}
a.panel-cart-action.btn.btn-secondary.btn-block.btn-lg {
  padding: 22px;
  background: #343a40;
}
.text-heading{
    color: #ddae71;
    font-weight: 800;
    font-size: 23px;
}
</style>
