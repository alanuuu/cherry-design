
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M18 20H11C10.4477 20 10 20.4477 10 21V41C10 41.5523 10.4477 42 11 42H37C37.5523 42 38 41.5523 38 41V21C38 20.4477 37.5523 20 37 20H30M32.3679 14.364L24.004 6L15.64 14.364M24.0029 28L24.0039 6.60368" stroke-miterlimit="16" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-share-external',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-share-external': true
        }
      }
    }
  }
</script>
