
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<circle cx="24" cy="24" r="18" stroke-linecap="butt"></circle>
<path d="M19.4853 15.5147L27.9706 24L19.4853 32.4853" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-right-circle',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-right-circle': true
        }
      }
    }
  }
</script>
