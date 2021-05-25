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
      <div class="container__details">
        <div class="container__details--top">
          <h2>Product goal</h2>
          <p>
            To create an e-learning platform that is interesting, unique and
            interactive by giving the learner to determine which course material
            that could be solved by using a game mechanism.
          </p>
        </div>

        <div class="container__details--middle">
          <vue-sticky-sidebar
            containerSelector=".container__details--middle"
            topSpacing="60"
            class="container__details--sidebar"
          >
            <ul>
              <li><a href="#">Home page</a></li>
              <li><a href="#">Signup page</a></li>
              <li><a href="#">Dashboard page</a></li>
            </ul>
          </vue-sticky-sidebar>
          <section class="container__details--img">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              lacus ultricies consequat nisi, ac sit eu. Integer eu elementum
              platea est neque. Consectetur non quam aliquam risus eros, velit
              sed faucibus et. Feugiat in sagittis dis eu sodales facilisis diam
              blandit vel. Vitae in sed augue elementum mus. Donec purus in nunc
              enim, vivamus. Massa rhoncus scelerisque massa nibh sit
              scelerisque risus. Elementum id felis bibendum velit sed enim
              lacus, neque. Sit sit urna, tortor, quis tincidunt purus feugiat.
              Purus tellus egestas dolor aenean etiam vulputate ut eu. Nunc id
              quisque tempus faucibus. Euismod in donec velit sit vitae.
              Vulputate amet luctus dignissim quam. Pretium, bibendum neque
              vitae ac senectus condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              lacus ultricies consequat nisi, ac sit eu. Integer eu elementum
              platea est neque. Consectetur non quam aliquam risus eros, velit
              sed faucibus et. Feugiat in sagittis dis eu sodales facilisis diam
              blandit vel. Vitae in sed augue elementum mus. Donec purus in nunc
              enim, vivamus. Massa rhoncus scelerisque massa nibh sit
              scelerisque risus. Elementum id felis bibendum velit sed enim
              lacus, neque. Sit sit urna, tortor, quis tincidunt purus feugiat.
              Purus tellus egestas dolor aenean etiam vulputate ut eu. Nunc id
              quisque tempus faucibus. Euismod in donec velit sit vitae.
              Vulputate amet luctus dignissim quam. Pretium, bibendum neque
              vitae ac senectus condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              lacus ultricies consequat nisi, ac sit eu. Integer eu elementum
              platea est neque. Consectetur non quam aliquam risus eros, velit
              sed faucibus et. Feugiat in sagittis dis eu sodales facilisis diam
              blandit vel. Vitae in sed augue elementum mus. Donec purus in nunc
              enim, vivamus. Massa rhoncus scelerisque massa nibh sit
              scelerisque risus. Elementum id felis bibendum velit sed enim
              lacus, neque. Sit sit urna, tortor, quis tincidunt purus feugiat.
              Purus tellus egestas dolor aenean etiam vulputate ut eu. Nunc id
              quisque tempus faucibus. Euismod in donec velit sit vitae.
              Vulputate amet luctus dignissim quam. Pretium, bibendum neque
              vitae ac senectus condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              lacus ultricies consequat nisi, ac sit eu. Integer eu elementum
              platea est neque. Consectetur non quam aliquam risus eros, velit
              sed faucibus et. Feugiat in sagittis dis eu sodales facilisis diam
              blandit vel. Vitae in sed augue elementum mus. Donec purus in nunc
              enim, vivamus. Massa rhoncus scelerisque massa nibh sit
              scelerisque risus. Elementum id felis bibendum velit sed enim
              lacus, neque. Sit sit urna, tortor, quis tincidunt purus feugiat.
              Purus tellus egestas dolor aenean etiam vulputate ut eu. Nunc id
              quisque tempus faucibus. Euismod in donec velit sit vitae.
              Vulputate amet luctus dignissim quam. Pretium, bibendum neque
              vitae ac senectus condimentum.
            </p>
          </section>
        </div>
      </div>
    </main>
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
            color {
              hex
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
