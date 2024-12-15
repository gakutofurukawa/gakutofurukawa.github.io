<template>
  <div class="research-page">
    <Research />
  </div>
</template>

<script>
import Research from '../components/MyResearch.vue';

export default {
  name: 'ResearchPage',
  components: {
    Research,
  },
};
</script>

<style scoped>
.research-page {
  padding: 2rem 0;
}
</style>
