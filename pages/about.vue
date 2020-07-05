<template>
  <div>
    <main class="container">
      <div class="container__inner">
        <Navigation data-aos="fade-up" data-aos-delay="500" />
        <header data-aos="fade-up" data-aos-delay="700">
          Hi, there!
          <span class="ec ec-wave"></span>
        </header>
        <section data-aos="fade-up" data-aos-delay="700">
          <p>
            My name is
            <span class="outlined">Faiz Ichsan Jaya</span>
            or you can call me Faiz for short. I'm a Front End Developer and an aspiring UX Designer from Indonesia. I am interested in psychology, design, coding and accessibility. The name Fukuo comes from Fukuoka — Japan's 6th largest city. I decided to choose this username because it’s short and rather easy to remember and it's been a part of my identity on the internet.
          </p>

          <p>
            I currently work at
            <span class="outlined">SoftwareSeni</span> as a Front End Developer and I code (for fun), read and draw in my free time to relieve my stress. My career started when I discovered Tumblr theme community where I make a free pre-build Tumblr themes for public use. You can visit the blog by clicking
            <a
              href="https://fukuo.tumblr.com/"
              target="_blank"
              rel="noopener"
            >this link.</a>
            <span class="ec ec-grin"></span>
          </p>
          <p>
            Aside from that, I love photography, travelling and listening to music (especially K-pop).
            Connect me on
            <a
              href="https://id.linkedin.com/in/faizichsanjaya"
              target="_blank"
              rel="noopener"
            >LinkedIn</a> or shoot me a message at
            <a href="mailto:faizichsanj@gmail.com">faizichsanj@gmail.com</a>.
          </p>

          <p class="small">
            <span style="display:block">Areas of expertise</span>
            Front End Development, User Interface Design, Visual Identity Design, Illustration.
          </p>

          <div class="me">
            <img src="~static/images/faiz.jpg" alt />
          </div>
        </section>
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

    header {
      font-size: 2.5em;
      font-family: 'DM Serif Display', serif;
      color: rgb(32, 45, 66);

      @media (max-width: 60rem) {
        font-size: 2rem;
      }
    }
  }
}

section {
  position: relative;
  // font-family: 'DM Serif Display', serif;
  // font-weight: lighter;
  font-size: 1.1em;
  margin-top: 1rem;

  color: #413c30;

  @media (max-width: 60rem) {
    font-size: 1em;
  }

  .outlined {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #504c40;
  }

  .small {
    margin-top: 2.5rem;
    font-size: 0.85em;
    font-weight: bold;
  }

  .me {
    position: relative;
    margin: 2.5rem 0 0 0;
    border: 2px solid #444;
    // padding: 1.5rem;
    background-color: #fff;

    img {
      width: 100%;
      display: block;
    }
    &:before {
      content: '';
      position: absolute;
      right: -14px;
      top: 14px;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: 2px solid #444;
      z-index: -2;

      @media (max-width: 60rem) {
        right: -9px;
        top: 9px;
      }
    }

    &:after {
      content: '';
      position: absolute;
      right: -26px;
      top: 26px;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: 2px solid #444;
      z-index: -3;

      @media (max-width: 60rem) {
        display: none;
      }
    }
  }

  p + p {
    margin-top: 1.25rem;
  }

  a {
    color: rgb(32, 45, 66);
    font-weight: bold;
  }
}
</style>
