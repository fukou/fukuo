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
.container {
  // background-color: rgb(32, 45, 66);
  overflow-x: hidden;
  padding: 0 2rem 8.5rem 2rem;

  @media (max-width: 60rem) {
    padding-bottom: 6rem;
  }

  &__inner {
    margin: 5.5rem auto;
    max-width: 55rem;

    @media (max-width: 40rem) {
      margin: 3.5rem auto;
    }
  }
}

header {
  font-size: 2.5em;
  // font-family: 'Herbert', 'Playfair Display', serif;
  font-family: 'DM Serif Display', serif;

  color: rgb(32, 45, 66);
  line-height: 1.75;
  letter-spacing: -1px;

  @media (max-width: 60rem) {
    font-size: 1.65em;
  }

  .underlined {
    box-shadow: inset 0 -15px 0 #badfdb, 0 2px 0 #badfdb;
  }

  .outlined {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(32, 45, 66);
  }

  .arrow {
    display: block;
    width: 3rem;
    margin-top: 3.5rem;

    @media (max-width: 60rem) {
      width: 1.75rem;
    }
  }
}
</style>
