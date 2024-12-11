<template>
  <section class="skills">
    <h2>Skills</h2>
    <div class="skills-list">
      <div class="skill" v-for="skill in skills" :key="skill.id">
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.level }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { id: 1, name: 'Vue.js', level: 'Advanced' },
        { id: 2, name: 'JavaScript', level: 'Advanced' },
        { id: 3, name: 'Node.js', level: 'Intermediate' },
        { id: 4, name: 'Python', level: 'Intermediate' },
        { id: 5, name: 'Machine Learning', level: 'Beginner' },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  max-width: 800px;
  margin: 0 auto;
  color: #2c3e50;
}

.skills h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  display: inline-block;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill {
  background-color: #ecf0f1;
  padding: 1rem;
  border-radius: 5px;
  flex: 1 1 45%;
}

.skill h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.skill p {
  font-size: 1rem;
  color: #7f8c8d;
}
</style>
