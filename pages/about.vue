<template>
  <div>
    <main class="container">
      <div class="container__inner">
        <Navigation data-aos="fade-up" data-aos-delay="500" />
        <section
          class="container__about"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div class="container__about--inner">
            <div class="container__about--content">
              <p class="container__about--title">{{ about.title }}</p>
              <datocms-structured-text :data="about.content" />
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

import { request, gql } from '~/lib/datocms'
import { StructuredText } from 'vue-datocms'

export default {
  components: {
    Navigation,
    Footer,
    'datocms-structured-text': StructuredText,
  },
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        {
          about {
            title
            content {
              value
            }
            image {
              url
            }
          }
        }
      `,
    })
    return { ready: !!data, ...data }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  head() {
    return {
      title: 'About — Faiz Ichsan Jaya | Portfolio Website',
      bodyAttrs: {
        class: 'about',
      },
    }
  },
}
</script>