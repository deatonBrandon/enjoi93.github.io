<template>
  <NavBar />
  <div class="page-wrap">
    <router-view></router-view>
  </div>
  <FooterComp />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
  },
};
</script>