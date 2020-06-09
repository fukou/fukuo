<template>
  <div>
    <section class="projects">
      <div class="projects__inner" data-fx="1">
        <div class="layer-1"></div>
        <div class="layer-2"></div>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="arcs"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          Featured Projects
        </h1>

        <ul class="projects__list">
          <li class="projects__list--item">
            <nuxt-link to="/work/gmooc">
              <div class="links" data-img="/images/3.png">
                G-MOOC
                <sup class="sup__live">Live</sup>
              </div>
            </nuxt-link>
            <div class="type">Front-end Development, UI/UX</div>
          </li>
          <li class="projects__list--item">
            <nuxt-link to="/work/fukuo">
              <div class="links" data-img="/images/1.png">
                Fukuo
                <sup class="sup__live">Live</sup>
              </div>
            </nuxt-link>
            <div class="type">Blog, Web Development</div>
          </li>
          <li class="projects__list--item">
            <nuxt-link to="/work/banyumas-explorer">
              <div class="links" data-img="/images/2.jpg">
                Banyumas Explorer
                <sup class="sup__wip">Wip</sup>
              </div>
            </nuxt-link>
            <div class="type">Android App Development, UI/UX, Design</div>
          </li>
          <li class="projects__list--item">
            <nuxt-link to="/work/bmkg">
              <div class="links" data-img="/images/7.png">
                BMKG Cilacap
                <sup class="sup__wip">Wip</sup>
              </div>
            </nuxt-link>
            <div class="type">Web Apps Development, UI/UX, Design</div>
          </li>
          <li class="projects__list--item">
            <a href="https://fukou.github.io/refleksi-pendidikan/">
              <div class="links" data-img="/images/4.png">
                Refleksi Pendidikan di Indonesia
                <sup class="sup__live">Live</sup>
              </div>
            </a>
            <div class="type">Web Design Interactive</div>
          </li>
          <!--
          <li class="projects__list--item">
            <nuxt-link to="/work/rongsokin" style="text-decoration:none; pointer-events:none;">
              <div class="links" data-img="/images/5.png">
                <span class="disabled">RongsokIn</span>
                <sup class="sup__no">Not live</sup>
              </div>
            </nuxt-link>
            <div class="type">Front-end Development, UI/UX</div>
          </li>
          <li class="projects__list--item">
            <nuxt-link to="/work/artoku" style="text-decoration:none; pointer-events:none;">
              <div class="links" data-img="/images/6.jpg">
                <span class="disabled">Arto-Ku</span>
                <sup class="sup__no">Not live</sup>
              </div>
            </nuxt-link>
            <div class="type">Android App Development, UI/UX, Design</div>
          </li>
          -->
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import hover from '~/plugins/hover'

export default {
  mounted() {
    hover()
  }
}
</script>

<style lang="scss" scoped>
.em-man-gesturing-no {
  font-size: 0.65em;
  margin-left: 1rem;
  vertical-align: text-top;
}

.links {
  @media (max-width: 60rem) {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.sup {
  &__live {
    background-color: #f8a978;
    color: #fff;
  }

  &__wip {
    background-color: #badfdb;
    color: #111;
  }

  &__no {
    right: -100px !important;
    background-color: #eaddcf;
  }

  &__wip,
  &__no,
  &__live {
    text-transform: uppercase;
    padding: 0.25rem 0.85rem;
    position: absolute;
    right: -65px;
    top: -5px;
    font-size: 0.4em;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
  }
}

.projects {
  padding: 5rem 1rem 8rem 1rem;

  // background-color: #ffebde;

  @media (max-width: 60rem) {
    min-height: auto;
    padding: 3rem 1rem;
  }

  &__list {
    padding: 1rem 0;

    &--item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.5rem;

      @media (max-width: 60rem) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1.5rem;
      }

      a {
        color: inherit;
        font-weight: 800;
        font-size: 1.85em;

        @media (max-width: 60rem) {
          font-size: 1.5em;
        }
      }

      .links {
        position: relative;
      }

      .disabled {
        position: relative;
        color: #999;
        text-decoration: line-through;
        font-weight: 800;
        cursor: not-allowed;

        @media (max-width: 60rem) {
          font-size: 1.5em;
        }
      }

      .type {
        font-family: 'Inter', sans-serif;
        color: #888;
      }
    }
  }

  &__inner {
    position: relative;
    margin: 0rem auto;
    max-width: 60rem;
    margin-top: -12.5rem;
    background-color: #fff;
    border: 2px solid #444;
    padding: 4.5rem 5rem 3rem 5rem;
    font-family: 'Inter', sans-serif;

    // box-shadow: 12px 12px #eaddcf, 25px 25px rgba(209, 158, 125, 1);

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

    @media (max-width: 60rem) {
      margin-top: -8rem;
      padding: 3rem 2.5rem;
      box-shadow: none;
    }

    h1 {
      margin-bottom: 2.5rem;
      color: #999;

      svg {
        vertical-align: -5px;
        margin-right: 0.85rem;
        color: rgb(209, 158, 125);
      }

      @media (max-width: 60rem) {
        font-size: 1rem;
      }
    }
  }
}

// .hover-reveal {
//   position: fixed;
//   width: 600px;
//   height: 300px;
//   top: 0;
//   left: 0;
//   pointer-events: none;
//   opacity: 0;

//   @media (max-width: 60rem) {
//     display: none;
//   }

//   &__inner,
//   &__img {
//     width: 100%;
//     height: 100%;
//     position: relative;
//   }

//   &__img {
//     background-size: cover;
//     background-position: 50% 50%;
//   }

//   &__deco {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: #181314;
//   }
// }
</style>
