
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M38.0833 12.9117C41.9124 16.7342 41.9713 22.8952 38.26 26.7897L38.0833 26.9706L25.7604 39.2721C24.7882 40.2426 23.2118 40.2426 22.2396 39.2721L9.91674 26.9706L9.74001 26.7897C6.02867 22.8952 6.08758 16.7342 9.91674 12.9117C13.8057 9.02944 20.111 9.02944 24 12.9117C27.889 9.02944 34.1943 9.02944 38.0833 12.9117Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-heart',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-heart': true
        }
      }
    }
  }
</script>
