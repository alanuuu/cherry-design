
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M7 5L7 43" stroke-linecap="butt"></path>
<path d="M20 24L43 24" stroke-linecap="butt"></path>
<path d="M20.9986 17.5467L20.9986 30.4538L13.9584 24.0002L20.9986 17.5467Z" stroke-linecap="butt"></path>
<path d="M14 24L21 30L21 18L14 24Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-to-left',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-to-left': true
        }
      }
    }
  }
</script>
