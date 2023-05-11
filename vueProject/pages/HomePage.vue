<template>
  <NavBar />
  <TitleComp />
  <BodyLayout />
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import TitleComp from '@/components/TitleComp.vue';
  import BodyLayout from '@/components/BodyLayout.vue';

  export default {
    name: "HomePage",
    components: {
      NavBar,
      TitleComp,
      BodyLayout,
    },
  }
</script>