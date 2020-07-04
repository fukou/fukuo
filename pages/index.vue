<template>
  <div>
    <main class="container">
      <div class="container__inner">
        <Navigation data-aos="fade-up" data-aos-delay="500" />
        <header data-aos="fade-up" data-aos-delay="700">
          Hello! My name is
          <span class="outlined">Faiz Ichsan Jaya.</span> I am a
          <span class="underlined">front-end web developer</span> who is
          passionate in building a good design and app that is accessible to
          <span
            class="outlined"
          >everyone</span>
          <span class="ec ec-plus1"></span>

          <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.757 312.757">
            <path
              fill="rgb(32, 45, 66)"
              d="M244.062 184.792l-73.439 73.438V0h-28.484v258.247L68.69 184.792l-20.141 20.147 107.83 107.818 107.829-107.818z"
            />
          </svg>
        </header>
      </div>
    </main>
    <Project />
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Project from '~/components/Project.vue'
import Footer from '~/components/Footer.vue'
// import locomotive from '~/mixins/locomotive.js'

export default {
  // mixins: [locomotive],
  components: {
    Navigation,
    Project,
    Footer
  },
  mounted() {
    // if (process.client) {
    //   this.$scrollTo('#__nuxt', 0, { force: true })
    // }
    window.scrollTo(0, 0)
  },
  head() {
    return {
      title: 'Faiz Ichsan Jaya | Portfolio Website'
    }
  }
}
</script>

<style lang="scss" scoped>
.em---1 {
  font-size: 0.6em;
  margin-left: 1rem;
  vertical-align: text-top;
}
</style>
