
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M42 11H6" stroke-linecap="butt"></path>
<path d="M42 24L22 24" stroke-linecap="butt"></path>
<path d="M42 37L6 37" stroke-linecap="butt"></path>
<path d="M13.6593 26.912L8.84075 23.7941L13.6593 20.6762V26.912Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-menu-fold',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-menu-fold': true
        }
      }
    }
  }
</script>
