
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M13.1711 24.937C12.5706 24.4566 12.5706 23.5433 13.1711 23.0629L30.0501 9.55964C30.8358 8.93107 31.9998 9.49048 31.9998 10.4967V37.5032C31.9998 38.5094 30.8358 39.0688 30.0501 38.4402L13.1711 24.937Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-caret-left',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-caret-left': true
        }
      }
    }
  }
</script>
