
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" stroke-linecap="butt"></path>
<path d="M24.0064 31V35.0078M24.0064 29L24 28C24 25 27 24 28.7794 21.5977C30.5588 19.1954 28.2889 15 23.9881 15C19.9742 15 18.6059 17.5481 18.5996 19.5137V19.9786" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-question-circle',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-question-circle': true
        }
      }
    }
  }
</script>
