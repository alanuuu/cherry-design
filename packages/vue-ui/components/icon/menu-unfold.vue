
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M6 11H42" stroke-linecap="butt"></path>
<path d="M22 24L42 24" stroke-linecap="butt"></path>
<path d="M6 37L42 37" stroke-linecap="butt"></path>
<path d="M8 20.8823L12.8185 24.0002L8 27.1181L8 20.8823Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-menu-unfold',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-menu-unfold': true
        }
      }
    }
  }
</script>
