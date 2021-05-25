<template>
  <div>
    <main class="container container--about">
      <div class="container__inner">
        <Navigation data-aos="fade-in" data-aos-delay="500" />
        <section
          class="container__about"
          data-aos="fade-in"
          data-aos-delay="700"
        >
          <div class="container__about--inner">
            <div class="container__about--content">
              <p class="container__about--title">{{ about.title }}</p>
              <datocms-structured-text
                :data="about.content"
                :renderBlock="renderBlock"
              />
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
import { h } from 'vue-demi'

export default {
  components: {
    Navigation,
    Footer,
  },
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        {
          about {
            title
            content {
              value
              blocks {
                __typename
                ... on ImageBlockRecord {
                  id
                  image {
                    responsiveImage {
                      src
                      srcSet
                      sizes
                      width
                      height
                      base64
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })
    return { ready: !!data, ...data }
  },
  methods: {
    renderBlock: ({ record, key }) => {
      if (record.__typename === 'ImageBlockRecord') {
        return h('div', { class: 'container__about--image' }, [
          h('datocms-image', { props: { data: record.image.responsiveImage } }),
        ])
      }

      return h('div', {}, [
        h('p', {}, "Don't know how to render a block!"),
        h('pre', {}, JSON.stringify(record, null, 2)),
      ])
    },
    applyColor() {
      let data = `.container__detail--overview::after { background: linear-gradient(90deg, ${this.work.color.hex} 30%, ${this.work.color.hex} 100%); } `

      let style = document.createElement('style')
      style.type = 'text/css'
      //append the style node as child of current component
      this.$el.appendChild(style)
      style.innerHTML = data
    },
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