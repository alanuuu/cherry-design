
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M34.8287 23.0629C35.4292 23.5433 35.4292 24.4566 34.8287 24.937L17.9496 38.4402C17.1639 39.0688 16 38.5094 16 37.5032L16 10.4967C16 9.49048 17.1639 8.93107 17.9496 9.55964L34.8287 23.0629Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-caret-right',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-caret-right': true
        }
      }
    }
  }
</script>
