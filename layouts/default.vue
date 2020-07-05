<template>
  <div>
    <!-- v-smoothscrollbar="{ listener, options }" -->
    <div>
      <transition name="intro">
        <nuxt />
      </transition>
    </div>
    <custom-cursor
      :targets="['img', 'a', 'button', 'links']"
      :circleColor="'#f8a978'"
      :circleColorHover="'#f8a978'"
      :dotColor="'#f8a978'"
      :dotColorHover="'#ff6e6c'"
      :hoverSize="2"
    ></custom-cursor>
  </div>
</template>

<script>
import customCursor from '~/components/CustomCursor'

export default {
  components: {
    customCursor
  },
  data() {
    return {
      listener: () => {},
      options: ''
    }
  }
}
</script>

<style lang="scss">
$t-duration: 800ms;
$t-delay: 400ms;

// @font-face {
//   font-family: 'Inter';
//   src: url('/fonts/Inter-Regular.woff2') format('woff2'),
//     url('/fonts/Inter-Regular.woff') format('woff');
// }

// @font-face {
//   font-family: 'Inter';
//   font-weight: 600;
//   src: url('/fonts/Inter-Bold.woff2') format('woff2'),
//     url('/fonts/Inter-Bold.woff') format('woff');
// }

// @font-face {
//   font-family: 'Inter';
//   font-weight: 800;
//   src: url('/fonts/Inter-ExtraBold.woff2') format('woff2'),
//     url('/fonts/Inter-ExtraBold.woff') format('woff');
// }

// @font-face {
//   font-family: 'Herbert';
//   font-style: normal;
//   font-display: swap;
//   src: url('/fonts/Herbert.ttf') format('truetype');
// }

html {
  font-family: 'DM Sans', sans-serif;
}

.smooth-vuebar {
  max-width: 100vw;
  max-height: 100vh;
}

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #f8a978;
  }

  // &::after {
  //   top: 50%;
  //   background-color: #f8a978;
  // }
}

.intro-leave {
  &::before {
    transform: scaleY(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  // &::after {
  //   transition-duration: $t-duration - $t-delay;
  //   transition-delay: $t-delay;
  // }
}

.intro-leave-to {
  &::before {
    transform: scale(1);
    transform-origin: bottom;
  }
}

.intro-enter {
  &::before {
    transform: scaleY(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  // &::after {
  //   transition-duration: $t-duration - $t-delay;
  //   transition-delay: $t-delay;
  // }
}

.intro-enter-to {
  &::before {
    transform: scaleY(0);
    transform-origin: top;
  }
}

body {
  overflow-x: hidden;
  background-color: #fcf9ea;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.hover-reveal {
  position: fixed;
  width: 470px;
  height: 250px;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;

  @media (max-width: 60rem) {
    display: none;
  }
}

.hover-reveal__inner,
.hover-reveal__img {
  width: 100%;
  height: 100%;
  position: relative;
}

.hover-reveal__deco {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #181314;
}

.hover-reveal__img {
  background-size: cover;
  border: 2px solid rgb(32, 45, 66);
  /* background-position: 50% 50%; */
}
</style>
