
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M5 24H43M24 5L24 43" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-plus',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-plus': true
        }
      }
    }
  }
</script>
