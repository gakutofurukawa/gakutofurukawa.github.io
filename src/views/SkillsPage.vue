<template>
  <div class="skills-page">
    <Skills />
  </div>
</template>

<script>
import Skills from '../components/MySkills.vue';

export default {
  name: 'SkillsPage',
  components: {
    Skills,
  },
};
</script>

<style scoped>
.skills-page {
  padding: 2rem 0;
}
</style>
