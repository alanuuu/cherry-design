
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M31.9285 33.0721L40.9996 24.0011L31.9285 14.93M16.8574 24L40.8574 24M31 41H7L7 7L31 7" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-export',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-export': true
        }
      }
    }
  }
</script>
