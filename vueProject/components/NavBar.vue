<template>
  <div class="nav-bar">
      <router-link to="/" class="products-link">
        <div class="logo-wrap">
        <img :src="logo" style="width: 130px" />
      </div>
    </router-link>

    <router-link to="/products" class="home-link">
      <button>Products</button>
    </router-link>
  
    <router-link to="/cart" class="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
import logo from '@/assets/coffeetime.svg';

export default {
  name: 'NavBar',
  data() {
    return {
      logo,
    }
  }
};
</script>