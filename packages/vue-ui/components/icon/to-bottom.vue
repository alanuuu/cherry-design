
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M5 41L43 41" stroke-linecap="butt"></path>
<path d="M24 28L24 5" stroke-linecap="butt"></path>
<path d="M24.0002 34.0402L17.5467 27H30.4538L24.0002 34.0402ZM23.2639 34.8435L23.2631 34.8444L23.2639 34.8435Z" stroke-linecap="butt"></path>
<path d="M24 34L30 27H18L24 34Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-to-bottom',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-to-bottom': true
        }
      }
    }
  }
</script>
