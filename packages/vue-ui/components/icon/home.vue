
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M7 17L24 7L41 17V41H7V17Z" stroke-linecap="butt"></path>
<path d="M20 28H28V41H20V28Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-home',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-home': true
        }
      }
    }
  }
</script>
