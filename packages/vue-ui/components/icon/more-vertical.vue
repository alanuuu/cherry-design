
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M25 10H23V8H25V10Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M25 25H23V23H25V25Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M25 40H23V38H25V40Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M25 10H23V8H25V10Z" stroke-linecap="butt"></path>
<path d="M25 25H23V23H25V25Z" stroke-linecap="butt"></path>
<path d="M25 40H23V38H25V40Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-more-vertical',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-more-vertical': true
        }
      }
    }
  }
</script>
