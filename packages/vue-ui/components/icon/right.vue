
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M16 39.5127L31.5563 23.9563C31.5563 23.9563 20.6944 13.0944 16 8.4" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-right',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-right': true
        }
      }
    }
  }
</script>
