<template>
  <footer>
    <div class="marquee">
      <div class="inner">
        <ul>
          <li>
            <a href="https://twitter.com/_fukuo">Twitter</a>
          </li>
          <li>
            <a href="https://id.linkedin.com/in/faizichsanjaya">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/fukou">Github</a>
          </li>
          <li>
            <a href="https://codepen.io/fukuo">Codepen</a>
          </li>
          <li>
            <a href="https://instagram.com/_fukuo">Instagram</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="links-mobile">
      <ul>
        <li>
          <a href="https://twitter.com/_fukuo">Twitter</a>
        </li>
        <li>
          <a href="https://id.linkedin.com/in/faizichsanjaya">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/fukou">Github</a>
        </li>
        <!-- <li>
          <a href="https://codepen.io/fukuo">Codepen</a>
        </li>-->
        <li>
          <a href="https://instagram.com/_fukuo">Instagram</a>
        </li>
      </ul>
    </div>

    <div class="email">
      <p>
        Say hello
        <!-- <i class="em em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i> -->
      </p>
      <a class="links" href="mailto:faizichsanj@gmail.com">faizichsanj@gmail.com</a>
    </div>
    <!-- <div class="credit">
      Copyright &copy; 2020 Faiz Ichsan Jaya. All rights reserved.
      built using 
      <a
        class="links"
        href="https://nuxtjs.org"
      >Nuxt.js</a>
      and hosted on
      <a class="links" href="https://zeit.co/">Zeit NOW</a>
    </div>-->
  </footer>
</template>

<script>
import marquee from '../plugins/marquee'

export default {
  mounted() {
    marquee()
  }
}
</script>

<style lang="scss" scoped>
.em-wave {
  font-size: 0.65em;
  margin-left: 0.5rem;
}

footer {
  padding: 4rem 2rem 12rem 2rem;

  @media (max-width: 60rem) {
    padding: 2rem 2rem 4.5rem 2rem;

    font-size: 14px;
  }

  .links-mobile {
    padding-bottom: 1.75rem;
    border-bottom: 1px solid #ccc;

    @media (min-width: 60rem) {
      display: none;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 1.45em;
        font-family: 'Herbert', 'Playfair Display', serif;
        margin: 0.5rem 0.85rem;

        a {
          text-decoration: none;
          -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: rgb(32, 45, 66);
        }
      }
    }
  }

  @media (max-width: 60rem) {
    .marquee {
      display: none;
    }
  }

  .marquee {
    .inner {
      position: relative;
      width: 100%;
      display: flex;
      color: white;

      & > * {
        white-space: nowrap;
      }

      ul {
        display: flex;
        align-items: center;
        list-style: none;
      }

      li {
        font-size: 6em;
        font-family: 'Herbert', 'Playfair Display', serif;

        margin-right: 5.5rem;
        transition: 0.5s;
        -webkit-transition: 0.5s;

        a {
          position: relative;
          text-decoration: none;
          transition: 0.5s;
          -webkit-transition: 0.5s;
          -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: rgb(32, 45, 66);

          &:before {
            content: '';
            position: absolute;
            width: 0%;
            height: 8px;
            background-color: rgb(32, 45, 66);
            left: 0;
            bottom: -20px;
            transition: 0.5s;
            -webkit-transition: 0.5s;
          }

          &:hover:before {
            width: 100%;
          }

          &:hover {
            -webkit-text-fill-color: rgb(32, 45, 66);
          }
        }
      }
    }
  }

  .email {
    font-size: 2.5em;
    font-family: 'Herbert', 'Playfair Display', serif;
    text-align: center;
    margin: 10rem auto 1rem auto;

    @media (max-width: 60rem) {
      font-size: 1.5em;
      margin: 3rem auto;
    }

    p {
      -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.15px;
      -webkit-text-stroke-color: #111;
    }

    a {
      color: rgb(32, 45, 66);
    }
  }

  .credit {
    text-align: center;
    font-family: 'Inter', sans-serif;

    a {
      color: currentColor;
      font-weight: 800;
    }
  }
}
</style>
