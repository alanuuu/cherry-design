
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M38.837 18C36.4634 12.1363 30.7148 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C31.4554 40 37.7198 34.9009 39.4959 28M40 8V18H30" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-refresh',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-refresh': true
        }
      }
    }
  }
</script>
