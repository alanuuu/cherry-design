
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M17.6429 17.6429L24.0068 24.0069M24.0068 24.0069L30.3708 30.3708M24.0068 24.0069L30.3708 17.6429M24.0068 24.0069L17.6429 30.3708M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-close-circle',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-close-circle': true
        }
      }
    }
  }
</script>
