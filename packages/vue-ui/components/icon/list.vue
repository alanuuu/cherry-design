
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M13 24H43M5 12H9M13 36H43M13 12H43M5 24H9M5 36H9" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-list',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-list': true
        }
      }
    }
  }
</script>
