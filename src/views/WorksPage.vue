<template>
  <div class="works-page">
    <Works />
  </div>
</template>

<script>
import Works from '../components/MyWorks.vue';

export default {
  name: 'WorksPage',
  components: {
    Works,
  },
};
</script>

<style scoped>
.works-page {
  padding: 2rem 0;
}
</style>
