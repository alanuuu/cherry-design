
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M9.85742 9.85791L23.9996 24M23.9996 24L38.1417 38.1422M23.9996 24L38.1417 9.85791M23.9996 24L9.85742 38.1422" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-close',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-close': true
        }
      }
    }
  }
</script>
