
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M40 35V41H8V35M9.1084 31C10.3988 22.1324 23.0248 15.1498 38.5 15.0024M30 6.00025L38.9997 15L30 24" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-share-internal',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-share-internal': true
        }
      }
    }
  }
</script>
