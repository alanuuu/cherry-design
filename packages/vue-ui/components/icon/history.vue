
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C17.7391 42 12.2248 38.8035 9 33.9534M6 24L5.5 23.2426H6.5L6 24ZM32 26H23V17" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-history',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-history': true
        }
      }
    }
  }
</script>
