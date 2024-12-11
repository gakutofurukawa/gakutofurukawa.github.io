<template>
  <section class="works">
    <h2>My Works</h2>
    <div class="works-list">
      <div class="work" v-for="work in works" :key="work.id">
        <img :src="work.image" :alt="work.title" />
        <h3>{{ work.title }}</h3>
        <p>{{ work.description }}</p>
        <a :href="work.link" target="_blank" class="btn">View Project</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      works: [
        {
          id: 1,
          title: 'Project One',
          description: 'A web application built with Vue.js and Node.js.',
          image: '/assets/images/project1.png',
          link: '#',
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'A mobile app developed using React Native.',
          image: '/assets/images/project2.png',
          link: '#',
        },
        // 追加のプロジェクトをここに追加
      ],
    };
  },
};
</script>

<style scoped>
.works {
  max-width: 1000px;
  margin: 0 auto;
  color: #2c3e50;
}

.works h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  display: inline-block;
}

.works-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.work {
  background-color: #ecf0f1;
  padding: 1rem;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.work img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.work h3 {
  margin: 1rem 0 0.5rem 0;
  font-size: 1.2rem;
}

.work p {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #ecf0f1;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}
</style>
