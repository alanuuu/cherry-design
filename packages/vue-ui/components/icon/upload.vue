
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M14.9301 17.0711L24.0012 8L33.0723 17.0711M24.0023 33.1421L24.0023 8.14214M40 35V41H8V35" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-upload',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-upload': true
        }
      }
    }
  }
</script>
