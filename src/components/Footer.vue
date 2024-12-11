<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 1rem 0;
  text-align: center;
  position: relative;
  width: 100%;
}

.container {
  width: 90%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .footer {
    position: static;
  }
}
</style>
