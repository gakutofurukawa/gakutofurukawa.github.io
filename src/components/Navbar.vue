<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">MyPortfolio</router-link>
      <ul class="nav-links">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/career">Career</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
        <li><router-link to="/research">Research</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 1rem 0;
}

.container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #ecf0f1;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #3498db;
}
</style>
