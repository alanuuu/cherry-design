
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M43 7L5 7" stroke-linecap="butt"></path>
<path d="M24 20L24 43" stroke-linecap="butt"></path>
<path d="M23.9998 13.9598L30.4533 21L17.5462 21L23.9998 13.9598ZM24.7361 13.1565L24.7369 13.1556L24.7361 13.1565Z" stroke-linecap="butt"></path>
<path d="M24 14L18 21L30 21L24 14Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-to-top',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-to-top': true
        }
      }
    }
  }
</script>
