
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M38 25L38 23L40 23L40 25L38 25Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M23 25L23 23L25 23L25 25L23 25Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M8 25L8 23L10 23L10 25L8 25Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
<path d="M38 25L38 23L40 23L40 25L38 25Z" stroke-linecap="butt"></path>
<path d="M23 25L23 23L25 23L25 25L23 25Z" stroke-linecap="butt"></path>
<path d="M8 25L8 23L10 23L10 25L8 25Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-more',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-more': true
        }
      }
    }
  }
</script>
