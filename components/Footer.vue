<template>
  <footer class="footer">
    <div class="footer__marquee">
      <div class="footer__inner">
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
        </ul>
      </div>
    </div>

    <div class="footer__mobile">
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
      </ul>
    </div>

    <div class="footer__email">
      <p>Get in touch</p>
      <VueSparkles color="#DE3E3E">
        <a href="mailto:faizichsanj@gmail.com">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 4H20H22V6V12H20V6H4V18H12V20H4H2V18V6V4H4ZM8 8H6V10H8V12H10V14H14V12H16V10H18V8H16V10H14V12H10V10H8V8ZM18 14H20V18H24V20H22V22H20V24H18V20H14V18H16V16H18V14Z"
              fill="black"
            />
          </svg>
          faizichsanj@gmail.com</a
        >
      </VueSparkles>
    </div>

    <div class="footer__bg"></div>
  </footer>
</template>

<script>
import marquee from '../plugins/marquee'

export default {
  mounted() {
    marquee()
  },
}
</script>