
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M23.0711 17L16 24.0711L23.0711 31.1421M32.0725 16.5176L27.9314 31.9725M9 42H39C39.5523 42 40 41.5523 40 41V7C40 6.44772 39.5523 6 39 6H9C8.44772 6 8 6.44772 8 7V41C8 41.5523 8.44772 42 9 42Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-code-square',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-code-square': true
        }
      }
    }
  }
</script>
