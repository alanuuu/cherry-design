
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M42 25C42 34.9411 33.9411 43 24 43C17.1331 43 11.1643 39.1547 8.12938 33.5M28.375 27L25 18H23L19.625 27M28.375 27L31 34M28.375 27H19.625M19.625 27L17 34M6 25C6 15.0589 14.0589 7 24 7C30.8669 7 36.8357 10.8453 39.8706 16.5M43 25H41L42 24L43 25ZM5 25H7L6 26L5 25Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-translate',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-translate': true
        }
      }
    }
  }
</script>
