
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M11.2695 20.2721L23.9975 7.54417L36.7254 20.2721M23.9995 43V8.70451" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-arrow-up',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-arrow-up': true
        }
      }
    }
  }
</script>
