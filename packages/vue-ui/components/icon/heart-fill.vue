
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M23.9997 10.5415C28.3502 6.01944 35.4051 5.72666 39.7556 10.2487C44.1061 14.7707 43.9054 21.614 40.204 27.3842C36.1525 33.7001 28 41.5 24 42C20 41.5 11.8478 33.7001 7.79603 27.3842C4.09442 21.6141 3.89399 14.7707 8.24449 10.2487C12.595 5.72666 19.6492 6.01944 23.9997 10.5415Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-heart-fill',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-heart-fill': true
        }
      }
    }
  }
</script>
