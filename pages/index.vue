<template>
  <div>
    <main class="container">
      <div class="container__inner">
        <!-- navigation -->
        <Navigation data-aos="fade-up" data-aos-delay="300" />

        <!-- intro -->
        <header class="header" data-aos="fade-up" data-aos-delay="500">
          <span>Hello</span>, my name is <strong>Faiz Ichsan Jaya</strong>. I am
          a <span>front-end web developer</span>, passionate about building
          <VueSparkles color="#DE3E3E"
            ><span><u>good designs</u></span></VueSparkles
          >
          and apps that are
          <em>accessible</em>
          to everyone. Currently learning more about <span>UX design</span> &
          <u>technology</u>.
          <div class="header__available">
            <span class="header__circle not"></span> Currently not available for
            freelance
          </div>
        </header>
      </div>
    </main>

    <!-- work -->
    <section class="projects" data-aos="fade-up" data-aos-delay="700">
      <div class="projects__inner" data-fx="1">
        <!-- card layer -->
        <div class="layer-1"></div>
        <div class="layer-2"></div>

        <!-- work inner -->
        <h1>Selected projects</h1>
        <ul class="projects__list">
          <li
            class="projects__list--item"
            v-for="work in works"
            :key="work.slug"
          >
            <nuxt-link :to="`/work/${work.slug}`" v-if="work.release === true" class="projects__list--item__content">
              <img :src="work.shape.url" />
              <div
                class="projects__list--links"
                :data-img="work.coverImage.url"
              >
                <h2>{{ work.title }}</h2>
                <p v-html="work.summary"></p>
              </div>
            </nuxt-link>

            <div class="projects__list--item__content disabled" v-else>
              <img :src="work.shape.url" />
              <div>
                <h2>{{ work.title }}</h2>
                <p v-html="work.summary"></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

import { request, gql, seoMetaTagsFields } from '~/lib/datocms'
import hover from '~/plugins/hover'

export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      title: 'Faiz Ichsan Jaya | Portfolio Website',
    }
  },
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        {
          site: _site {
            favicon: faviconMetaTags {
              ...seoMetaTagsFields
            }
          }
          works: allWorks(orderBy: _firstPublishedAt_ASC) {
            id
            title
            summary
            slug
            release
            coverImage {
              url
            }
            shape {
              url
            }
          }
        }
        ${seoMetaTagsFields}
      `,
    })
    return { ready: !!data, ...data }
  },
  methods: {
    removeClass() {
      const body = document.body
      body.classList.remove('detail')
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    hover()
    this.removeClass()
  },
  beforeUpdate() {
    this.removeClass()
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
