
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M14 24L7 19V7L41 24L7 41V29L14 24ZM14 24H39" stroke-miterlimit="3.8637" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-send',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-send': true
        }
      }
    }
  }
</script>
