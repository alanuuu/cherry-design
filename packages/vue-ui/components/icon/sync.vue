
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M33.1927 11.9799L34.607 10.5657L36.0212 9.15145H33.1927V11.9799Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M14.8115 36.018L13.3973 37.4322L11.9831 38.8464H14.8115V36.018Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M34.607 10.5657L36.0212 9.15145H33.1927V11.9799L34.607 10.5657ZM34.607 10.5657L36.0212 11.9799C42.6601 18.6188 42.6601 29.3826 36.0212 36.0215C33.4881 38.5545 30.3546 40.1211 27.0788 40.7212M13.3973 37.4322L11.9831 38.8464H14.8115V36.018L13.3973 37.4322ZM13.3973 37.4322L11.9831 36.018C5.34418 29.379 5.34418 18.6152 11.9831 11.9763C14.5161 9.44329 17.6497 7.87672 20.9255 7.27661" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-sync',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-sync': true
        }
      }
    }
  }
</script>
