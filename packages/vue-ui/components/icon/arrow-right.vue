
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M27.7279 11.27L40.4558 23.9979L27.7279 36.7259M5 24L39.2955 24" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-arrow-right',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-arrow-right': true
        }
      }
    }
  }
</script>
