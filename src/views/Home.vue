<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>Engineer | Researcher | Designer</p>
      <router-link to="/about" class="btn">Learn More</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34495e;
  color: #ecf0f1;
  padding: 2rem;
}

.hero {
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
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
