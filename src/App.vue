<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/PageNavbar.vue';
import Footer from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
main {
  padding: 0;
  min-height: calc(100vh - 160px); /* ヘッダーとフッターの高さを考慮 */
}
</style>

