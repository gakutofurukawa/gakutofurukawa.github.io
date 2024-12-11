<template>
  <div class="career-page">
    <Career />
  </div>
</template>

<script>
import Career from '../components/Career.vue';

export default {
  name: 'CareerPage',
  components: {
    Career,
  },
};
</script>

<style scoped>
.career-page {
  padding: 2rem 0;
}
</style>
