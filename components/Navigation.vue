<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
      <div class="go-to-resume">
        <a
          class="primary"
          href="https://drive.google.com/file/d/1jotonh9vo0OsdWY2vlC23Jse-_O_8rCg/view?usp=sharing"
          rel="noopener"
          target="_blank"
        >Resume</a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 5.5rem;

  @media (max-width: 60rem) {
    font-size: 0.85em;
  }

  .primary {
    font-size: 0.85em;
    border: 2px solid #f8a978;
    padding: 0.5rem 0.8rem;
    transition: 0.5s;
    background-color: #f8a978;
    color: #fff;
    font-size: 1.05em;
    // font-family: 'Inter', sans-serif;
    text-decoration: none;

    &:hover {
      color: #f8a978;
      background-color: rgba(255, 255, 255, 0.35);
    }
  }

  @media (max-width: 60rem) {
    margin-bottom: 4.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 !important;
    padding: 0 !important;

    li {
      font-size: 1.25em;
      // font-family: 'Inter', sans-serif;

      & + li {
        margin-left: 2.5rem;
      }

      a {
        display: block;
        padding: 0.5rem 0rem;
        cursor: pointer;
        color: rgb(32, 45, 66);
        text-decoration: none;
      }

      .nuxt-link-exact-active {
        font-weight: 800;
        border-bottom: 2px solid currentColor;
      }
    }
  }
}
</style>
