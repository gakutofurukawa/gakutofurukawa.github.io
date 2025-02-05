<template>
  <section id="about" class="about">
    <div class="about-content">
      <h2>About Me</h2>
      <p>
        I am a software developer with a passion for creating innovative solutions. I have experience in [specific languages, frameworks, tools, etc.]. I am currently pursuing a degree in [your degree] at [your university].
      </p>
      <p>
        Favorite:AI BMI
      </p>
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
</style>
