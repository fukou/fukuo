<template>
  <div>
    <!-- v-smoothscrollbar="{ listener, options }" -->
    <div>
      <transition name="intro">
        <nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listener: () => {},
      options: '',
    }
  },
}
</script>

<style lang="scss">

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
}

.hover-reveal__img {
  background-size: cover;
  border: 2px solid #111;
}

@-webkit-keyframes live {
  0%, 80%, 100% { -webkit-transform: scale(0.6) }
  40% { -webkit-transform: scale(1.0) }
}
@keyframes live {
  0%, 80%, 100% { 
    transform: scale(0.6);
    -webkit-transform: scale(0.6);
  } 40% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>
