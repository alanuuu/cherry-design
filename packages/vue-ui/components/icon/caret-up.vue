
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M23.0634 13.1711C23.5438 12.5706 24.4571 12.5706 24.9375 13.1711L38.4407 30.0501C39.0693 30.8358 38.5099 31.9998 37.5037 31.9998H10.4972C9.49097 31.9998 8.93156 30.8358 9.56013 30.0501L23.0634 13.1711Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-caret-up',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-caret-up': true
        }
      }
    }
  }
</script>
