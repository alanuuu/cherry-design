
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M20.2721 11.27L7.54417 23.9979L20.2721 36.7259M43 24L8.70451 24" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-arrow-left',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-arrow-left': true
        }
      }
    }
  }
</script>
