
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M17.3137 7.24268L10.2426 14.3137L6 10.0711M17.3137 20.2427L10.2426 27.3137L6 23.0711M17.3137 33.2427L10.2426 40.3137L6 36.0711M21 11H43M21 25H43M21 39H43" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-select-all',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-select-all': true
        }
      }
    }
  }
</script>
