
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M24.9375 34.8287C24.4571 35.4292 23.5438 35.4292 23.0634 34.8287L9.56013 17.9496C8.93156 17.1639 9.49097 16 10.4972 16L37.5037 16C38.5099 16 39.0693 17.1639 38.4407 17.9496L24.9375 34.8287Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-caret-down',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-caret-down': true
        }
      }
    }
  }
</script>
