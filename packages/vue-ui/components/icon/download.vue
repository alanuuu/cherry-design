
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M33.0721 22.0711L24.0011 31.1421L14.93 22.0711M24 5V31M40 35V41H8V35" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-download',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-download': true
        }
      }
    }
  }
</script>
