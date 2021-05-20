<template>
  <div>
    <div id="stars"></div>

    <div class="container__error">
      <div class="container__error--text">
        <img src="https://static.tumblr.com/5ojoydj/Bezqtes5m/1z4fbfs.gif" alt="Dog twerking" />
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <p>
          The page you are looking for cannot be found. Please go back to home
          page or put the right URL.
        </p>
        <nuxt-link to="/" class="container__error--link">
          <svg
            width="26"
            height="26"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.3333 15.5833L28.3333 18.4166L11.3333 18.4166L11.3333 21.25L8.49998 21.25L8.49998 18.4166L5.66665 18.4166L5.66665 15.5833L8.49998 15.5833L8.49998 12.75L11.3333 12.75L11.3333 15.5833L28.3333 15.5833ZM14.1666 9.91665L11.3333 9.91665L11.3333 12.75L14.1666 12.75L14.1666 9.91665ZM14.1666 9.91665L17 9.91665L17 7.08331L14.1666 7.08331L14.1666 9.91665ZM14.1666 24.0833L11.3333 24.0833L11.3333 21.25L14.1666 21.25L14.1666 24.0833ZM14.1666 24.0833L17 24.0833L17 26.9166L14.1666 26.9166L14.1666 24.0833Z"
              fill="currentColor"
            />
          </svg>
          Back to home page</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title: '404 Not Found | Portfolio Website',
      bodyAttrs: {
        class: 'error',
      },
    }
  },
}
</script>