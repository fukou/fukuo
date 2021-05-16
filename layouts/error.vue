<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Page not found
      <i
        class="em em-anguished"
        aria-role="presentation"
        aria-label="ANGUISHED FACE"
      ></i>
    </h1>
    <h1 v-else>An error occurred</h1>
    <p>I am unable to load the page you are looking for.</p>
    <nuxt-link to="/">Home page?</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title: '404 Not Found | Portfolio Website',
    }
  },
}
</script>