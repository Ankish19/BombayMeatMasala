<template>
  <div class="menu">
    <div id="dogra"></div>
    <Headbar :newCart="newCart" :cartshow="cartshow"></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="mb-0">Menu</h1>
              <h4 class="text-muted mb-0">
                Some information about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>
      <!--<button type="button"
            class="navbar-toggle collapsed text-left mobile-menu"
            id="nav-toggle"
            data-toggle="collapse"
            data-target="#collapsable-nav"
            aria-expanded="false">
              <span class="sr-only">
                Toggle navigation
              </span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>-->
      <div class="module module-nav-toggle mobile-menu" id="nav-toggle"
        data-toggle="collapse"
        data-target="#collapsable-nav"
        aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- Page Content -->
      <div class="page-content">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-md-3 left-bar-fixed text-left" id="collapsable-nav">
              <!-- Menu Navigation -->
              <nav id="menu-navigation" class="stick-to-content"  @scroll="data-local-scroll">
                <ul class="nav nav-menu bg-dark dark">
                  <li v-for="(item, value, index) in Items" :key="index">
                    <a :href="`#${value}`" class="menu-link">{{ value }}</a>
                    <!-- <span v-for="(item1, index1) in Items[value]" :key="index1">
                        {{ item1.name }}
                      </span> -->
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-9 box-line">
              <!-- Menu Category / Burgers -->
              <MenuComp :items="Items" v-on:addItem="addItem($event)"></MenuComp>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content / End -->

    <Footer :newCart="newCart" v-on:opencartpopup="opencartpopup($event)"></Footer>
    <!-- Modal / Product -->
  </div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import { getMenu } from '@/store/api'
import MenuComp from '@/views/layouts/MenuComp.vue'
export default {
  props: {
  },
  name: 'Menu',
  components: {
    Headbar,
    Footer,
    MenuComp
  },
  data () {
    return {
      Items: [],
      newCart: [],
      cartshow: false
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    getMenu().then((res) => {
      // console.log(res.data['items']['Fast food'])
      let arr = []
      arr = res.data.items

      Object.keys(arr).map((e) => {
        console.log(res.data.items[e][0].price)
      })

      // Object.keys(res.data.items).map((item) => (
      //     console.log(item)
      // ));

      console.log(arr)
      this.Items = res.data.items
    // eslint-disable-next-line no-sequences
    })
  },
  methods: {
    addItem (event) {
      this.newCart = event
    },
    opencartpopup (event) {
      // this.cartshow = !this.cartshow
      console.log(event)
    }
  }
}

</script>

<style lang="scss" scoped>
// .bg-image img {
//   width: 100% !important;
//   height: 100% !important;
//   display: block;
// }
// .fixed {
//   width: 350px;
//   position: fixed;
//   top: 0px;
//   z-index: 999;
// }
// .box-line {
//     float: right;
//     position: relative;
//     left:350px;
// }
.menu{
 scroll-behavior: smooth;
 }
 h1.mb-0 {
    color: #383c40;
    font-family: Helvetica Neue, Raleway, sans-serif;
}
.page-title h1 {
    font-size: 77px;
    font-size: 5.5rem;
}
.mb-0, .my-0 {
    margin-bottom: 0 !important;
}
.text-muted {
    color:#a4a7a9 !important;
    font-family: Helvetica Neue, Raleway, sans-serif;
}
#nav-toggle {
    display: none !important;
}

@media only screen and (min-width: 500px) {
div#collapsable-nav {
    display: block !important;
}
}

@media only screen and (max-width: 460px) {
#nav-toggle {
    display: block !important;
    margin:15px;
}
}
</style>
