
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M33.0715 33.071C39.3199 26.8226 39.3199 16.692 33.0715 10.4436C26.8231 4.19523 16.6925 4.19523 10.4441 10.4436C4.19572 16.692 4.19572 26.8226 10.4441 33.071C16.6925 39.3194 26.8231 39.3194 33.0715 33.071ZM33.0715 33.071L41.5568 41.5563" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-search',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-search': true
        }
      }
    }
  }
</script>
