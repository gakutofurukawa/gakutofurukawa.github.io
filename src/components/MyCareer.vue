<template>
  <section id="career" class="career">
    <h2>Career</h2>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <h3>{{ job.title }} - {{ job.company }}</h3>
        <span>{{ job.period }}</span>
        <p>{{ job.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MyCareer',
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: 'Software Engineer',
          company: 'Tech Corp',
          period: 'June 2024 - Present',
          description: 'Developing web applications using Vue.js and Node.js. Collaborating with cross-functional teams to deliver high-quality products.',
        },
        // {
        //   id: 2,
        //   title: 'Research Assistant',
        //   company: 'University Lab',
        //   period: 'June 2018 - December 2019',
        //   description: 'Assisted in research projects related to machine learning and data analysis. Published findings in reputable journals.',
        // },
      ],
    };
  },
};
</script>

<style scoped>
.career {
  max-width: 90%;
  height: 1000px;
  margin: 0 auto;
  color: #ffffff;
}

.career h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.career ul {
  list-style: none;
  padding: 0;
}

.career li {
  margin-bottom: 1.5rem;
}

.career h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.career span {
  display: block;
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.career p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
