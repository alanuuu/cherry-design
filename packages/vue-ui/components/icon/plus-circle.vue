
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M32 24C32 24 26.3431 24 24 24M16 24C16 24 21.6569 24 24 24M24 24V32M24 24C24 24 24 18.3431 24 16M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-plus-circle',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-plus-circle': true
        }
      }
    }
  }
</script>
