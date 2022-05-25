<template>
  <div id="footer">
    <!-- Footer -->
    <footer id="footer" class="bg-dark dark">
      <div class="container">
        <!-- Footer 1nd Row -->
        <div class="footer-second-row">
        <div class="row">
        <div class="col-md-12"> <span class="text-light text-center"
            >2022 © Copyright <a href="#" style="color:orange">Bombay Meat Masala.</a> Made with love by <a href="https://tngwebsolutions.ca/" target="_blank" style="color:orange">T&G Web Solutions.</a></span
          ></div>
        </div>
        </div>
      </div>

      <!-- Back To Top -->
      <button id="back-to-top" class="back-to-top">
        <i class="ti ti-angle-up"></i>
      </button>
    </footer>
    <!-- Footer / End -->

    <!-- Modal / Product -->
    <div class="modal fade product-modal" id="product-modal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-header-lg dark bg-dark">
            <div class="bg-image">
              <img
                src="http://assets.suelo.pl/soup/img/photos/modal-add.jpg"
                alt=""
              />
            </div>
            <h4 class="modal-title">Specify your dish</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-close"></i>
            </button>
          </div>
          <div class="modal-product-details">
            <div class="row align-items-center">
              <div class="col-9">
                <h6 class="mb-1 product-modal-name">Boscaiola Pasta</h6>
                <span class="text-muted product-modal-ingredients"
                  >Pasta, Cheese, Tomatoes, Olives</span
                >
              </div>
              <div class="col-3 text-lg text-right">
                $<span class="product-modal-price"></span>
              </div>
            </div>
          </div>
          <div class="modal-body panel-details-container">
            <!-- Panel Details / Size -->
            <div class="panel-details panel-details-size">
              <h5 class="panel-details-title">
                <label class="custom-control custom-radio">
                  <input
                    name="radio_title_size"
                    type="radio"
                    class="custom-control-input"
                  />
                  <span class="custom-control-indicator"></span>
                </label>
                <a href="#panel-details-sizes-list" data-toggle="collapse"
                  >Size</a
                >
              </h5>
              <div id="panel-details-sizes-list" class="collapse show">
                <div class="panel-details-content">
                  <div class="product-modal-sizes">
                    <div class="form-group">
                      <label class="custom-control custom-radio">
                        <input
                          name="radio_size"
                          type="radio"
                          class="custom-control-input"
                          checked
                        />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"
                          >Small - 100g ($9.99)</span
                        >
                      </label>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio">
                        <input
                          name="radio_size"
                          type="radio"
                          class="custom-control-input"
                        />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"
                          >Medium - 200g ($14.99)</span
                        >
                      </label>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio">
                        <input
                          name="radio_size"
                          type="radio"
                          class="custom-control-input"
                        />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"
                          >Large - 350g ($21.99)</span
                        >
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Panel Details / Additions -->
            <div class="panel-details panel-details-additions">
              <h5 class="panel-details-title">
                <label class="custom-control custom-radio">
                  <input
                    name="radio_title_additions"
                    type="radio"
                    class="custom-control-input"
                  />
                  <span class="custom-control-indicator"></span>
                </label>
                <a
                  href="#panel-details-additions-content"
                  data-toggle="collapse"
                  >Additions</a
                >
              </h5>
              <div id="panel-details-additions-content" class="collapse">
                <div class="panel-details-content">
                  <!-- Additions List -->
                  <div class="row product-modal-additions">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Tomato ($1.29)</span
                          >
                        </label>
                      </div>
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Ham ($1.29)</span
                          >
                        </label>
                      </div>
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Chicken ($1.29)</span
                          >
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Cheese($1.29)</span
                          >
                        </label>
                      </div>
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Bacon ($1.29)</span
                          >
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Panel Details / Other -->
            <div class="panel-details panel-details-form">
              <h5 class="panel-details-title">
                <label class="custom-control custom-radio">
                  <input
                    name="radio_title_other"
                    type="radio"
                    class="custom-control-input"
                  />
                  <span class="custom-control-indicator"></span>
                </label>
                <a href="#panel-details-other" data-toggle="collapse">Other</a>
              </h5>
              <div id="panel-details-other" class="collapse">
                <form action="#">
                  <textarea
                    cols="30"
                    rows="4"
                    class="form-control"
                    placeholder="Put this any other informations..."
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="modal-btn btn btn-secondary btn-block btn-lg"
            data-action="add-to-cart"
          >
            <span>Add to Cart</span>
          </button>
          <button
            type="button"
            class="modal-btn btn btn-secondary btn-block btn-lg"
            data-action="update-cart"
          >
            <span>Update</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Panel Mobile -->
    <nav id="panel-mobile">
      <div class="module module-logo bg-dark dark">
        <a href="#">
          <img src="@/assets/logo.png" alt="" width="88" />
        </a>
        <button class="close" data-toggle="panel-mobile">
          <i class="ti ti-close"></i>
        </button>
      </div>
      <nav class="module module-navigation"></nav>
      <div class="module module-social">
        <h6 class="text-sm mb-3">Follow Us!</h6>
        <a href="https://www.facebook.com/sizzlinggrill.ca" class="icon icon-social icon-circle icon-sm icon-facebook"
          ><i class="fa fa-facebook"></i
        ></a>
        <a href="https://www.instagram.com/sizzlinggrill.ca/" class="icon icon-social icon-circle icon-sm icon-instagram"
          ><i class="fa fa-instagram"></i
        ></a>
      </div>
    </nav>
    <div class="footer_cart" @click="openCart()">
      <div class="footer_cart_icon">
        <span class="notification d-block" v-if="item">{{ item?item.length:0 }}</span>
          <i class="ti ti-shopping-cart"></i>
      </div>
  </div>
  </div>
</template>
<script>
import { getLocalStorage } from '@/store/service'
export default {
  props: ['newCart'],
  data () {
    return {
      item: []
    }
  },
  watch: {
    newCart () {
      if (this.newCart) {
        this.item = this.newCart
      }
    }
  },
  mounted () {
    this.showItem()
  },
  methods: {
    showItem () {
      this.user = getLocalStorage('userData')
      this.item = getLocalStorage('cart')
    },
    openCart () {
      if (this.item.length > 0) {
        this.$router.push('/checkout')
      }
    }
  }
}
</script>
<style>
.footer_cart {
  position: fixed;
    bottom: 40px;
    left: 80px;
    padding: 10px 17px;
    border: 2px solid #e26f2f;
    border-radius: 50px;
    background: #606467;
    cursor: pointer;
}
.footer_cart_icon{
  color: #fff;
  font-size: 20px;
}
ul.list-posts li a {
  color: white;
}
.btn-footer {
  border-color: #ddae71;
  background-color: #ddae71;
  color: #fff;
}
input#mce-EMAIL {
  background: transparent;
  padding: 22px;
  border: 1px solid #ffff;
}
button.btn.btn-footer.btn-submit {
  width: 133px;
  border-radius: 0px;
}
.footer-logo {
  width: 130px;
}
.icon.icon-circle.icon-facebook:focus, .icon.icon-circle.icon-facebook:hover {
    color: #fff;
    background-color: #ddae71;
}
.icon.icon-circle.icon-instagram:focus, .icon.icon-circle.icon-instagram:hover {
    color: #fff;
    background-color: #ddae71;
}
</style>
