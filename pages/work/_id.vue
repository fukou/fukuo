<template>
  <div>
    <main class="container container--detail">
      <div class="container__inner">
        <Navigation data-aos="fade-up" data-aos-delay="500" />
        <section
          class="container__detail"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div class="container__detail--title">
            <div class="container__detail--live">
              <a
                :href="work.liveSite"
                aria-label="Live site"
                :style="{ backgroundColor: work.color.hex }"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 11L4 13L16 13L16 15L18 15L18 13L20 13L20 11L18 11L18 9L16 9L16 11L4 11ZM14 7L16 7L16 9L14 9L14 7ZM14 7L12 7L12 5L14 5L14 7ZM14 17L16 17L16 15L14 15L14 17ZM14 17L12 17L12 19L14 19L14 17Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div class="container__detail--heading">
              <h1>{{ work.title }}</h1>
              <p>{{ work.subtitle }}</p>
            </div>
          </div>

          <!--  -->
          <div class="container__detail--type">
            <div>
              <h2>Project type</h2>
              <p>Type</p>
            </div>
            <div>
              <h2>Year</h2>
              <p>{{ work.date.slice(0, 4) }}</p>
            </div>
            <div>
              <h2>Roles</h2>
              <p>{{ work.role }}</p>
            </div>
          </div>

          <!--  -->
          <div class="container__detail--overview">
            <h2>Overview</h2>
            <div v-if="work.overview.value">
              <datocms-structured-text
                :data="work.overview.value"
                :renderBlock="renderBlock"
              />
            </div>
            <div v-else>No description</div>
          </div>
        </section>
      </div>
      <div class="container__images">
        <figure>
          <datocms-image :data="work.coverImage.responsiveImage" />
          <figcaption v-if="work.coverImage.responsiveImage.alt">
            {{ work.coverImage.responsiveImage.alt }}
          </figcaption>
        </figure>
      </div>
      <div class="container__details" v-if="work.goal">
        <div class="container__details--top">
          <h2>Product goal</h2>
          <p>
            {{ work.goal }}
          </p>
        </div>

        <div class="container__details--middle">
          <vue-sticky-sidebar
            containerSelector=".container__details--middle"
            topSpacing="60"
            class="container__details--sidebar"
          >
            <ul>
              <li v-for="(link, index) in work.asset" :key="index">
                <a
                  :href="
                    '#' +
                    link.responsiveImage.alt.toLowerCase().replace(/ /g, '')
                  "
                  >{{ link.responsiveImage.alt }}</a
                >
              </li>
            </ul>
          </vue-sticky-sidebar>
          <section class="container__details--img">
            <figure v-for="(image, index) in work.asset" :key="index">
              <div
                :id="image.responsiveImage.alt.toLowerCase().replace(/ /g, '')"
              >
                <datocms-image :data="image.responsiveImage" />
                <figcaption>{{ image.responsiveImage.alt }}</figcaption>
              </div>
            </figure>
          </section>
        </div>
      </div>
    </main>
    <footer class="container--detail__footer"></footer>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import { toHead } from 'vue-datocms'
import { request, gql, imageFields, seoMetaTagsFields } from '~/lib/datocms'

export default {
  components: {
    Navigation,
  },
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        query BlogPostQuery($slug: String!) {
          site: _site {
            favicon: faviconMetaTags {
              ...seoMetaTagsFields
            }
          }
          work(filter: { slug: { eq: $slug } }) {
            seo: _seoMetaTags {
              ...seoMetaTagsFields
            }
            id
            title
            subtitle
            slug
            date
            role
            liveSite
            overview {
              value
            }
            goal
            color {
              hex
            }
            asset {
              responsiveImage {
                ...imageFields
              }
            }
            coverImage {
              responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 860 }) {
                ...imageFields
              }
            }
          }
        }
        ${imageFields}
        ${seoMetaTagsFields}
      `,
      variables: {
        slug: params.id,
      },
    })

    return { ready: !!data, ...data }
  },
  methods: {
    renderBlock: ({ record, h }) => {
      if (record.__typename === 'ImageBlockRecord') {
        return h('div', { class: 'mb-5' }, [
          h('datocms-image', { props: { data: record.image.responsiveImage } }),
        ])
      }
      return h('div', {}, [
        h('p', {}, "Don't know how to render a block!"),
        h('pre', {}, JSON.stringify(record, null, 2)),
      ])
    },
    applyColor() {
      let data = `.container__detail--overview::after { background: linear-gradient(90deg, ${this.work.color.hex} 0%, ${this.work.color.hex} 100%); } `

      let style = document.createElement('style')
      style.type = 'text/css'
      //append the style node as child of current component
      this.$el.appendChild(style)
      style.innerHTML = data
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    this.applyColor()
  },
  beforeUpdate() {
    this.applyColor()
  },
  head() {
    if (!this.ready) {
      return
    }
    return toHead(this.work.seo, this.site.favicon)
  },
}
</script>

<style lang="scss" scoped>
    .container {
        &__detail {
            &--overview {
                &::after {
                    content:'';
                    position: absolute;
                    left:0;
                    top:0;
                    width:100%;
                    height:100%;
                
                    filter: blur(200px);
                    z-index: -4;
                }
            }
        }
    }
</style>
