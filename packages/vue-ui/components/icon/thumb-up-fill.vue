
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 43V17H9V43H5Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M27.0996 4.46271C26.2206 3.77207 24.9462 3.936 24.2705 4.82662L15.0361 17H12V43H35.5759C36.4283 43 37.187 42.4597 37.4658 41.6542L43.1625 22.3084C44.0619 19.7101 42.1321 17 39.3825 17H28.8137L31.2352 11.5517C31.979 9.87818 31.4913 7.9133 30.0512 6.78186L27.0996 4.46271Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-thumb-up-fill',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-thumb-up-fill': true
        }
      }
    }
  }
</script>
