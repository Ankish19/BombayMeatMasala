<template>
  <div>
    <!-- Menu Category / Burgers -->
    <div :id="`${value}`" class="menu-category" v-for="(item, value, index) in items" :key="index">
      <div class="menu-category-title">
        <div class="bg-image">
          <img :src="siteLogo" alt />
        </div>
        <h2 class="title">{{ value }}</h2>
      </div>
      <div class="menu-category-content text-left">
        <!-- Menu Item -->
        <div class="menu-item menu-list-item" v-for="(item1, index1) in items[value]" :key="index1">
          <div class="row align-items-center">
            <div class="col-sm-6 mb-2 mb-sm-0">
              <h6 class="mb-0 font-weight-bold">{{ item1.name }}</h6>
              <span class="text-muted text-sm" v-html="item1.desc"></span>
            </div>
            <div class="col-sm-6 text-sm-right">
              <span class="text-md mr-4">
                <span class="text-muted">from</span>
                <strike class="text-danger" v-if="item1.old_price > 0">${{ item1.old_price }}</strike>$
                <span data-product-base-price>{{ item1.price }}</span>
              </span>
              <button
                class="btn btn-outline-secondary btn-sm"
                data-toggle="modal"
                data-target="#myModal"
                @click="openModal(item1)"
                v-if="item1.addon_categories.length > 0"
              >
                <span>Add to cart</span>
              </button>
              <button class="btn btn-outline-secondary btn-sm" @click="openModal(item1)" v-else>
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The Modal -->
    <div class="modal fade product-modal" id="myModal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-header-lg dark bg-dark">
            <div class="bg-image">
              <img src="http://assets.suelo.pl/soup/img/photos/modal-add.jpg" alt />
            </div>
            <h4 class="modal-title">{{ selectItem.name }}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <i class="ti ti-close"></i>
            </button>
          </div>
          <div class="modal-product-details">
            <div class="row align-items-center text-left">
              <div class="col-8">
                <!-- <h6 class="mb-1 product-modal-name">Boscaiola Pasta</h6> -->
                <span class="text-muted product-modal-ingredients" v-html="selectItem.desc"></span>
              </div>
              <div class="col-4 text-md text-right">
                <strike class="text-danger">${{ selectItem.old_price }}</strike>$
                <span data-product-base-price>{{ selectItem.price }}</span>
                <span class="product-modal-price"></span>
              </div>
            </div>
          </div>
          <div class="modal-body panel-details-container">
            <!-- Panel Details / Size -->
            <div class="panel-details panel-details-size">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <a
                        class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >Options</a>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <form action="#">
                        <div class="row">
                          <div class="col-md-6" v-for="(option, i) in options" :key="i">
                            <div class="form-group text-left">
                              <label for="email">{{ option.name }}</label>
                              <select
                                class="form-control"
                                id="sel1"
                                @change="selectAddon($event, option)"
                              >
                                <option selected disabled>--Select option--</option>
                                <option
                                  v-for="(optionItem, i) in option.addons"
                                  :key="i"
                                  :value="JSON.stringify(optionItem)"
                                >
                                  {{
                                    `${optionItem.name}($${optionItem.price})`
                                  }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <a
                        class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >Additions</a>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="row text-left ml-2" v-for="(addon, j) in addons" :key="j">
                        <div class="col-md-12">{{ addon.name }}</div>
                        <div class="col-md-6" v-for="(addonItem, j) in addon.addons" :key="j">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              :value="JSON.stringify(addonItem)"
                              @change="selectAddon($event, addon)"
                            />
                            {{ addonItem.name }} (${{ addonItem.price }})
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="modal-btn btn btn-secondary btn-block btn-lg"
            data-action="add-to-cart"
            @click="cardModalClose(selectItem)"
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
  </div>
</template>
<script>
import { addCart, getCart } from '@/store/service'
export default {
  setup () { },
  props: ['items'],
  data () {
    return {
      siteLogo: require('../../assets/burges.jpg'),
      selectItem: '',
      options: [],
      cart: [''],
      single: [],
      multi: [],
      addons: [],
      selectedaddons: [],
      addOnTotal: 0
    }
  },
  methods: {
    openModal (item) {
      this.cart = getCart('cart')

      this.selectItem = item
      if (item.addon_categories.length > 0) {
        this.options = []
        this.addons = []
        item.addon_categories.map((data) => {
          if (data.type === 'SINGLE') {
            this.options.push(data)
          } else {
            this.addons.push(data)
          }
        })
      } else {
        if (this.cart !== null && this.cart.length > 0) {
          for (var j = 0; j < this.cart.length; j++) {
            if (this.cart[j].id === item.id) {
              this.cart[j].quantity++
              break
            } else if (
              item.id !== this.cart[j].id &&
              j === this.cart.length - 1
            ) {
              item.quantity = 1
              this.cart.push(item)
              break
            }
          }
        } else {
          item.quantity = 1
          this.cart = [item]
        }
        this.$toast.success('An item added to cart.')
        this.$emit('addItem', this.cart)
        addCart('cart', JSON.stringify(this.cart))
      }
    },
    cardModalClose (item) {
      this.cart = getCart('cart')
      this.cart.push(item)
      // this.cart = item
      addCart('cart', JSON.stringify(this.cart))
    },
    selectAddon (event, category) {
      // console.log(event)
      var addon = JSON.parse(event.target.value)
      var select = {
        addon_category_name: category.name,
        addon_id: addon.id,
        addon_name: addon.name,
        price: addon.price
      }
      console.log(select)
      if (category.type === 'SINGLE') {
        console.log('SINGLE')
        this.single = [select]
        this.addOnTotal = this.single[0].price
        console.log(this.single[0].price)
      } else if (category.type === 'MULTI') {
        if (this.multi.length > 0) {
          for (var j = 0; j < this.multi.length; j++) {
            if (select.addon_id === this.multi[j].addon_id) {
              console.log('if')
              this.multi.splice(j, 1)
              break
            } else if (select.addon_id !== this.multi[j].addon_id && j === this.multi.length - 1) {
              console.log('else-if')
              this.multi.push(select)
              break
            }
          }
        } else {
          console.log('else')
          this.multi = [select]
        }
      }
      // if (this.single.length) {
      //   this.selectedaddons.push(this.single)
      // }
      // if (this.multi.length) {
      //   this.selectedaddons.push(this.multi)
      // }
      console.log(this.selectedaddons)
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-image img {
  width: inherit;
  height: inherit;
}
a.btn.btn-link:after {
  position: absolute;
  top: 9px;
  font-size: 0.8em;
  font-family: "themify-icons";
  content: "\e62a";
  text-align: left !important;
  left: 140%;
}
a.btn.btn-link {
  text-align: left !important;
  position: relative !important;
  right: 44% !important;
}
a.btn.btn-link {
  bottom: 15px !important;
}
</style>
