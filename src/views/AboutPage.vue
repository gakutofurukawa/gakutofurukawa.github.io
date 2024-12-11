<template>
  <div class="about-page">
    <About />
  </div>
</template>

<script>
import About from '../components/About.vue';

export default {
  name: 'AboutPage',
  components: {
    About,
  },
};
</script>

<style scoped>
.about-page {
  padding: 2rem 0;
}
</style>
