<template>
  <section id="about" class="about">
    <div class="about-content">
      <h2>About Me</h2>
      <p>
        I created this site to study VUE.js. My motivation is to understand humans. I have a wide range of interests and aim to create value at the intersection of various fields.
      </p>
      <p>
        Interest:WEB AI cloud BMI EGG Music Basketball Game Anime Manga
      </p>
      <h3>KeioUniv Science Technology</h3>
      <span>2022.4~2026.3</span>
      <p>Kurihara.Lab</p>
    </div>
    <img src="../assets/images/name.png" alt="AI" class="about-image" />
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  height: 1000px;
  margin: 0 auto;
  color: #ffffff;
}

.about-content {
  flex: 1;
  margin-right: 1rem;
}

.about h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.about p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-image {
  flex: 1;
  width: 50%;
  aspect-ratio: 16/9;
  object-fit: cover;
}
.about h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.about span {
  display: block;
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}
</style>
