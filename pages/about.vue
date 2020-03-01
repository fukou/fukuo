<template>
  <div>
    <main class="container">
      <div class="container__inner">
        <Navigation data-aos="fade" />
        <div class="introduction" data-aos="fade" data-aos-delay="150">
          <!-- Thank you for visiting this page! This means that you are interested to know more about me.  -->
          My name is
          <span class="outlined">Faiz Ichsan Jaya</span>, currently struggling
          as a
          <span class="outlined">front-end developer</span>. I always love
          designing stuffs and learning new technologies, digging what's new and
          trends on web design as well as making a good, accessible apps
          <span
            style="color:#ff6e6c"
          >for everyone</span>
          <i class="em em-100" aria-role="presentation" aria-label="HUNDRED POINTS SYMBOL"></i>
        </div>
        <div class="details" data-aos="fade" data-aos-delay="50">
          <div class="experience">
            <h1>Experience</h1>
            <div class="experience__role">
              <h2>Front-end Web Developer</h2>
              <div class="experience__role--p">
                <div class="where">G-MOOC</div>
                <div class="time">Mar 2019 - Aug 2019</div>
              </div>
            </div>

            <div class="experience__role">
              <h2>Freelance Web Developer</h2>
              <div class="experience__role--p">
                <div class="where">Fukuo (self-employed)</div>
                <div class="time">Mar 2016 - Present</div>
              </div>
            </div>
          </div>

          <div class="skills">
            <h1>Skills</h1>
            <h3>Expert</h3>
            <p>HTML, CSS, SCSS, Web Design, Responsive Design</p>
            <h3>Advanced</h3>
            <p>Javascript, jQuery, Adobe Photoshop</p>
            <h3>Beginner</h3>
            <p>React (Next.js, Gatsby), Vue (Nuxt.js), Git, Figma</p>
          </div>
        </div>
        <!-- details -->

        <!-- <div class="text-circle">Design is my passion (no, it is not)</div> -->
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  mounted() {
    // if (process.client) {
    //   this.$scrollTo('#__nuxt', 0, { force: true })
    // }
    window.scrollTo(0, 0)
  },
  head() {
    return {
      title: 'About me - Faiz Ichsan Jaya | Portfolio Website'
    }
  }
}
</script>

<style lang="scss" scoped>
.em-100 {
  margin-left: 1rem;
  font-size: 0.65em;
}

.introduction {
  font-family: 'Herbert', sans-serif;
  font-size: 2.25em;
  margin-bottom: 4.5rem;

  @media (max-width: 60rem) {
    font-size: 1.5em;
  }

  .outlined {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 0.85px;
    -webkit-text-stroke-color: #ff6e6c;
  }
}

.details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;

  @media (min-width: 60rem) {
    margin-left: -5.5rem;
    margin-top: 8.5em;
  }

  @media (max-width: 60rem) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    font-size: 0.85em;
  }

  .experience {
    h1 {
      margin-bottom: 1.5rem;
    }

    &__role {
      margin-bottom: 2.5rem;

      h2 {
        color: #ff6e6c;
      }

      &--p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;

        .where {
          font-weight: 800;
        }

        .time {
          margin-left: 1.5rem;
        }
      }
    }
  }

  .skills {
    h1 {
      margin-bottom: 1.5rem;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    @media (min-width: 60rem) {
      padding-left: 2.5rem;
    }

    p {
      margin: 0 0 1rem 0;
    }
  }
}

.container {
  background-color: #151515;
  overflow-x: hidden;
  min-height: 100vh;
  padding: 0 2rem 8.5rem 2rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 60rem) {
    padding-bottom: 6rem;
  }

  &__inner {
    margin: 5.5rem auto;
    max-width: 55rem;
    color: #f9f4ef;

    @media (max-width: 40rem) {
      margin: 3.5rem auto;
    }
  }
}
</style>
