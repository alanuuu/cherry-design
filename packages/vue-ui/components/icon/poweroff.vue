
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M15.5 9.2743C10.4187 12.2137 7 17.7076 7 24C7 33.3888 14.6112 41 24 41C33.3888 41 41 33.3888 41 24C41 17.7076 37.5813 12.2137 32.5 9.2743M24 5V27" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-poweroff',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-poweroff': true
        }
      }
    }
  }
</script>
