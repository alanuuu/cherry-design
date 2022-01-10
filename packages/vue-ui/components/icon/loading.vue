
<template>
<svg :class="cls" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
  <path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-loading',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-loading': true
        }
      }
    }
  }
</script>
