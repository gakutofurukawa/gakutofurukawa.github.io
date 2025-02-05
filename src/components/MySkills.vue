<template>
  <section id="skills" class="skills">
    <h2>Skills/Certificates</h2>
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
  name: 'MySkills',
  data() {
    return {
      skills: [
        { id: 1, name: 'HTML', level: 'Advanced' },
        { id: 2, name: 'CSS', level: 'Advanced' },
        { id: 3, name: 'Laravel', level: 'Intermediate' },
        { id: 4, name: 'Python', level: 'Intermediate' },
        { id: 5, name: 'Vue.js', level: 'Intermediate' },
        { id: 6, name: 'Github', level: 'Intermediate' },
        { id: 7, name: 'JavaScript', level: 'Intermediate' },
        { id: 8, name: 'SQL', level: 'Intermediate' },
        { id: 9, name: 'Bootstrap', level: 'Intermediate' },
        { id: 10, name: 'Docker', level: 'Beginner' },
        { id: 11, name: 'AWS', level: 'Beginner' },
        { id: 12, name: 'Vercel', level: 'Intermediate' },
        { id: 13, name: 'Machine Learning', level: 'Beginner' },
        { id: 14, name: 'Data Analysis', level: 'Beginner' },

      ],
    };
  },
};
</script>

<style scoped>
.skills {
  max-width: 90%;
  margin: 0 auto;
  color: #ffffff;
}

.skills h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
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
