<template>
  <section id="skills" class="skills">
    <h2>Skills/Certificates</h2>
    <div class="skills-section">
      <h3>プログラム言語</h3>
      <div class="icons">
        <img v-for="icon in programmingIcons" :key="icon.id" :src="icon.src" :alt="icon.name" class="icon" />
      </div>
    </div>
    <div class="skills-section">
      <h3>周りの技術</h3>
      <div class="icons">
        <img v-for="icon in techIcons" :key="icon.id" :src="icon.src" :alt="icon.name" class="icon"/>
      </div>
    </div>
    <div class="skills-section">
      <h3>資格</h3>
      Comming soon...
      <ul>
        <li v-for="qualification in qualifications" :key="qualification.id">{{ qualification.name }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MySkills',
  data() {
    return {
      programmingIcons: [
        {id: 1, name: 'HTML', src: require('@/assets/images/html.png')},
        {id: 2, name: 'CSS', src: require('@/assets/images/css.png')},
        {id: 3, name: 'JavaScript', src: require('@/assets/images/js.png')},
        {id: 4, name: 'Python', src: require('@/assets/images/python.png')},
        {id: 5, name: 'Vue', src: require('@/assets/images/vue.png')},
        {id: 6, name: 'Laravel', src: require('@/assets/images/laravel.png')},
      ],
      techIcons: [
        {id: 1, name: 'Docker', src: require('@/assets/images/docker.png')},
        {id: 2, name: 'GitHub', src: require('@/assets/images/github.png')},
        {id: 3, name: 'AWS', src: require('@/assets/images/aws.png')},
      ],
      qualifications: [
        // Add more qualifications as needed
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

.skills-section {
  margin-bottom: 2rem;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.icon {
  width: 50px;
  height: 50px;
}

.skills-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.skills-section ul {
  list-style-type: none;
  padding: 0;
}

.skills-section li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
</style>