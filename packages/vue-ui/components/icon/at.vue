
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M31 23C31 26.866 27.866 30 24 30C20.134 30 17 26.866 17 23C17 19.134 20.134 16 24 16C27.866 16 31 19.134 31 23ZM31 23C31 26.0376 33.4624 29.5 36.5 29.5C39.5376 29.5 42 27.0376 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C28.2438 42 32.1445 40.5314 35.2218 38.0747" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-at',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-at': true
        }
      }
    }
  }
</script>
