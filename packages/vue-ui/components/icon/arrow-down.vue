
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M11.2695 27.7279L23.9975 40.4558L36.7254 27.7279M23.9995 5V39.2955" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-arrow-down',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-arrow-down': true
        }
      }
    }
  }
</script>
