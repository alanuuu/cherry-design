
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M32 8.3999L16.4437 23.9563C16.4437 23.9563 27.3056 34.8182 32 39.5126" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-left',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-left': true
        }
      }
    }
  }
</script>
