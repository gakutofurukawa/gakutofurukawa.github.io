<template>
  <section id="works" class="works">
    <h2>Works</h2>
    <div class="works-list">
      <div class="work" v-for="work in works" :key="work.id">
        <a :href="work.link" target="_blank" style="text-decoration: none;">
        <img :src="work.image" :alt="work.title" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyWorks',
  data() {
    return {
      works: [
        {
          id: 1,
          title: 'マルチエージェント',
          description: 'マルチエージェントシステムの研究',
          image: require('@/assets/images/dawn.png'),
          link: '#',
        },
        {
          id: 2,
          title: 'BMI',
          description: 'BMIの研究',
          image: require('@/assets/images/winter.png'),
          link: '#',
        },
        {
          id: 3,
          title: 'STEPS Musical Company 「2094」',
          description: '脚本執筆',
          image: require('@/assets/images/kyoto.jpg'),
          link: '#',
        },
        {
          id: 4,
          title: 'STEPS Musical Company 「2094」',
          description: '脚本執筆',
          image: require('@/assets/images/mishimasky.jpg'),
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
  max-width: 90%;
  height: 1000px;
  margin: 0 auto;
  color: #ffffff;
}

.works h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.works-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.work {
  background-color: #000000;
  padding: 1rem;
  border-radius: 5px;
  width: 450px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.work img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
}

.work h3 {
  margin: 1rem 0 0.5rem 0;
  font-size: 1.2rem;
}

.work p {
  font-size: 1rem;
  color: #000000;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #000000;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}
</style>
