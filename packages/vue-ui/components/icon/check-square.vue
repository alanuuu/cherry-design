
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M34.6032 16.6716L21.1682 30.1066L13.39 22.3284M8 41H40C40.5523 41 41 40.5523 41 40V8C41 7.44772 40.5523 7 40 7H8C7.44772 7 7 7.44772 7 8V40C7 40.5523 7.44772 41 8 41Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-check-square',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-check-square': true
        }
      }
    }
  }
</script>
