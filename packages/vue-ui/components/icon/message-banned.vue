
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M40.5267 20C38.7279 12.5413 32.0111 7 24 7C14.6112 7 7 14.6112 7 24V41H21M40.364 40.364C43.8787 36.8492 43.8787 31.1508 40.364 27.636C36.8492 24.1213 31.1508 24.1213 27.636 27.636M40.364 40.364C36.8492 43.8787 31.1508 43.8787 27.636 40.364C24.1213 36.8492 24.1213 31.1508 27.636 27.636M40.364 40.364L27.636 27.636M13 20H25M13 29H19" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-message-banned',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-message-banned': true
        }
      }
    }
  }
</script>
