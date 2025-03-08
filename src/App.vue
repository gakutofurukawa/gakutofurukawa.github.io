<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <main>
      <section id="about"><About /></section>
      <section id="career"><Career /></section>
      <section id="research"><Research /></section>
      <section id="works"><Work /></section>
      <section id="skills"><Skills /></section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/PageNavbar.vue';
import Footer from './components/PageFooter.vue';
import About from './components/AboutPage.vue';
import Career from './components/MyCareer.vue';
import Skills from './components/MySkills.vue';
import Research from './components/MyResearch.vue';
import Work from './components/MyWorks.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    About,
    Career,
    Skills,
    Research,
    Work,
  },
};
</script>

<style>
main {
  padding: 0;
  min-height: calc(100vh - 160px); /* ヘッダーとフッターの高さを考慮 */
}
</style>

