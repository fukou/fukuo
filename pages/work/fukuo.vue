<template>
  <div class="projects">
    <nav data-aos="fade-up" data-aos-delay="500">
      <ul>
        <li>
          <nuxt-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="butt"
              stroke-linejoin="arcs"
            >
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
            BACK TO HOME
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <header class="heading">
      <div class="heading__inner" data-aos="fade-up" data-aos-delay="600">
        <h1>Fukuo Themes</h1>
        <a class="go-to" href="https://fukuo.tumblr.com/" target="_blank" rel="noopener">
          fukuo.tumblr.com
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="butt"
            stroke-linejoin="arcs"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
              />
            </g>
          </svg>
        </a>
      </div>
    </header>
    <section class="information" data-aos="fade-up" data-aos-delay="750">
      <div class="information__detail">
        A portfolio website created on microblogging and social networking
        called Tumblr. Here you can find web design and programming related
        things. This blog also provides tumblr themes for public use in
        accordance with their platform's API and tutorials that are written by
        me.
        <strong>
          I have also designed a Tumblr theme for numerous clients all over the
          world.
        </strong>
      </div>
      <div class="information__type">
        <ul>
          <li>Blog, Web Development</li>
          <li>
            <i class="em em-spiral_calendar_pad" aria-role="presentation" aria-label></i>
            2012 - Present
          </li>
        </ul>
      </div>
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.757 312.757">
        <path
          fill="#010002"
          d="M244.062 184.792l-73.439 73.438V0h-28.484v258.247L68.69 184.792l-20.141 20.147 107.83 107.818 107.829-107.818z"
        />
      </svg>
    </section>

    <img src="~assets/images/fukuo/1.png" alt />
    <div class="grid__image">
      <img src="~assets/images/fukuo/2.png" alt />
      <img src="~assets/images/fukuo/3.png" alt />
      <img src="~assets/images/fukuo/4.png" alt />
      <img src="~assets/images/fukuo/5.png" alt />
    </div>

    <div class="information__more">
      <p>
        I've been designing Tumblr themes since 2011. It has been a long journey
        for me when it comes to coding. I joined Tumblr in 2011 for blogging and
        discovered a theme made by atmospherica
        <sup>(deactived)</sup>. I really liked the design, so I used it on my
        blog and started playing around with it to get familiarthe structure of
        the theme.
      </p>
      <p>
        I am entirely self-taught... After some trial-and-error, I was confident
        enough to create my own themes for personal use and decided to create a
        blog exclusively to publish my creations.
      </p>
      <p>
        <strong>The name Fukuo comes from Fukuoka — Japan's 6th largest city.</strong>
        I decided to choose this username because it’s short and rather easy to
        remember. This blog has been my learning-source and I am grateful that
        it is quite popular in the community. I have written some
        web-design-related tutorials and the themes I created have been used for
        over +142.000 users since 2012
      </p>
    </div>

    <div class="more__projects">
      <ul>
        <li>
          <nuxt-link to="/work/gmooc">
            G-MOOC
            <span class="more__projects--preview">Previous project</span>
          </nuxt-link>
        </li>
        <!-- <li>See more projects</li> -->
        <li>
          <nuxt-link to="/work/banyumas-explorer">
            Banyumas Explorer
            <span class="more__projects--preview">Next project</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import locomotive from '~/mixins/locomotive.js'

export default {
  // mixins: [locomotive],
  mounted() {
    // if (process.client) {
    //   this.$scrollTo('#__nuxt', 0, { force: true })
    // }
    window.scrollTo(0, 0)
  },
  head() {
    return {
      title: 'Fukuo - Faiz Ichsan Jaya | Portfolio Website'
    }
  }
}
</script>

<style lang="scss" scoped>
.em {
  margin-right: 0.5rem;
}

.information__more {
  max-width: 60rem;
  margin: 2rem auto;
  padding: 1rem 2rem;

  p + p {
    margin: 1rem 0;
  }
}

.grid__image {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3.5rem;
  padding: 3rem;
  background-color: hsl(227, 40%, 25%);

  @media (max-width: 60rem) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    grid-gap: 2rem;
  }

  & > img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}

.more__projects {
  padding: 5rem 0;

  @media (max-width: 60rem) {
    padding: 3.5rem 0;
  }

  &--preview {
    font-size: 0.65em;
    display: block;
    -webkit-text-fill-color: #111; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 0px;
    -webkit-text-stroke-color: #111;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin: 0 !important;
    padding: 0 !important;

    @media (max-width: 60rem) {
      justify-content: flex-start;
      flex-direction: column;
    }

    li {
      // font-family: 'Herbert', 'Playfair Display', serif;
      font-family: 'DM Serif Display', serif;

      font-size: 2.5em;

      @media (max-width: 60rem) {
        font-size: 1.65em;
        margin: 0.5em 0;

        text-align: center;
      }

      @media (min-width: 60rem) {
        &:first-child {
          text-align: right;
        }

        &:last-child {
          text-align: left;
        }
      }

      a {
        text-decoration: none;
        -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1.15px;
        -webkit-text-stroke-color: #111;
      }
    }
  }
}

.projects {
  // font-family: 'Inter', sans-serif;

  img {
    width: 100%;
  }
}

nav {
  max-width: 70rem;
  margin: 6rem auto 3rem auto;

  @media (max-width: 60rem) {
    margin: 1.5rem auto;
    padding: 0 1.25rem;
  }

  //   background-color: #fff;
  //   border: 1px solid #ccc;
  //   padding: 1.35rem 1.5rem;

  //   box-shadow: 10px 10px 0px rgb(209, 158, 125);

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0 !important;
    margin: 0 !important;

    li {
      a {
        position: relative;
        font-weight: 600;
        letter-spacing: 1px;
        text-decoration: none;
        color: #111;

        &:before {
          content: '';
          position: absolute;
          width: 0%;
          height: 3px;
          background-color: #111;
          right: 0;
          bottom: -10px;
          transition: 0.5s;
        }

        &:hover:before {
          width: calc(75% - 4px);
        }

        svg {
          vertical-align: middle;
          margin-right: 0.5rem;
        }

        @media (max-width: 60rem) {
          font-size: 0.8em;
        }
      }
    }
  }
}

.heading {
  padding: 7rem 5rem;

  @media (max-width: 60rem) {
    padding: 3.5rem 3rem;
  }

  &__inner {
    max-width: 60rem;
    margin: 0 auto;

    text-align: center;

    h1 {
      -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.15px;
      -webkit-text-stroke-color: #111;
      font-size: 3em;
      margin-bottom: 0.5rem;
      font-weight: normal;
      // font-family: 'Herbert', 'Playfair Display', serif;
      font-family: 'DM Serif Display', serif;

      @media (max-width: 60rem) {
        font-size: 2.35em;
      }
    }

    .go-to {
      font-size: 1.1em;
      font-weight: 800;
      color: hsl(227, 40%, 25%);

      svg {
        vertical-align: middle;
        margin-left: 0.5rem;
      }
    }
  }
}

.information {
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 20rem;
  grid-gap: 3.5rem;

  margin-bottom: 7.5rem;

  @media (max-width: 60rem) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 0 2rem;
    font-size: 0.9em;
    margin-bottom: 4.5rem;
  }

  &__detail {
    line-height: 190%;
  }

  &__type {
    font-size: 1.05em;
    @media (max-width: 60rem) {
      font-size: 1.15em;
    }

    ul {
      list-style: none;
      padding: 0 !important;
      margin: 0 !important;

      li {
        & + li {
          margin-top: 0.6rem;
        }
        &:first-child {
          font-size: 1.15em;
          font-weight: 800;
        }
      }
    }
  }

  .arrow {
    grid-column: 1/-1;
    display: block;
    width: 3rem;

    @media (max-width: 60rem) {
      margin-top: 2rem;
      width: 1.95rem;
    }
  }
}
</style>
