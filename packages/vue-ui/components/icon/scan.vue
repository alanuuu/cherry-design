
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M7 17V7H17M41 17V7H31M41 31V41H31M7 31V41H17M5 24H43" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-scan',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-scan': true
        }
      }
    }
  }
</script>
