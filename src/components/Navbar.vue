<template>
  <nav class="navbar navbar-light fixed-top">
    <div class="navbar-text ms-auto d-flex">
      <button class="btn btn-sm btn-outline-success" @click="$parent.$emit('toggle')">
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ms-2" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          id="dropdownCart"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <span class="badge rounded-pill bg-success text-bg-secondary">{{ cartQty }}</span>
          <i class="fas fa-shopping-cart mx-2"></i>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <price class="ms-2" :value="Number(cartTotal)"></price>
        </button>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownCart">
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-end">
              <span class="badge rounded-pill bg-warning align-text-top me-1">
                {{ item.qty }}
              </span>
              {{ item.product.name }}
              <price :value="item.qty * item.product.price"></price>
              <a
                href="#"
                class="badge rounded-pill bg-danger text-white ms-1"
                style="text-decoration: none"
                @click.stop="$parent.$emit('delete-item', index)">
                x
              </a>
            </div>
          </div>
          <router-link class="btn btn-sm btn-outline-info text-dark float-end mr-2" to="/checkout">
            Checkout
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./Price.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navbar",
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    Price,
    FontAwesomeIcon,
  },
  filters: {
    currencyFormat(value) {
      return "$" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
