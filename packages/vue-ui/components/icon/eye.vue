
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C30.6274 37 36.6274 32.6667 42 24C36.6274 15.3333 30.6274 11 24 11C17.3726 11 11.3726 15.3333 6 24C11.3726 32.6667 17.3726 37 24 37Z" stroke-linecap="butt"></path>
<path d="M29 24C29 26.7614 26.7614 29 24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-eye',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-eye': true
        }
      }
    }
  }
</script>
