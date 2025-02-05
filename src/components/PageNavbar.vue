<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">Gakuto Furukawa</router-link>
      <ul class="nav-links">
        <li><router-link :to="{ path: '/', hash: '#about' }">About</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#career' }">Career</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#research' }">Research</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#works' }">Works</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#skills' }">Skills</router-link></li>
        <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://note.com" target="_blank"><i class="fas fa-sticky-note"></i></a></li>
        <li><a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageNavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #000000;
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
  font-size: 0.75rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #3498db;
}
</style>
