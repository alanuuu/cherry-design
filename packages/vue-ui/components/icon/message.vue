
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M15 20H33M15 29H24M7 41H24.6296C33.6707 41 41 33.6707 41 24.6296V24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24V41Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-message',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-message': true
        }
      }
    }
  }
</script>
