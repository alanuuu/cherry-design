
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M41.0006 31V5M5.82996 26.3936L11.7789 7.69679C11.911 7.28182 12.2964 7 12.7319 7L34.0006 7L34.0006 29H31.0006L21.598 41.2234C21.2661 41.6549 20.6502 41.7416 20.212 41.4187L17.6761 39.5493C15.5045 37.9485 14.6683 35.0951 15.6325 32.5754L17.0006 29L7.73581 29C6.3822 29 5.41954 27.6835 5.82996 26.3936Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-thumb-down',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-thumb-down': true
        }
      }
    }
  }
</script>
