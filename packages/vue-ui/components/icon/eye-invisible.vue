
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M14 14.5C11.3096 16.5 8.58489 19.8302 6 24C11.3726 32.6667 17.3726 37 24 37C27.3245 37 30.4912 35.9096 33.5 33.7287M17.4635 12.5C19 11 21.7488 11 24 11C30.6274 11 36.6274 15.3333 42 24C40.2344 26.8481 38.4011 29.2282 36.5 31.1404" stroke-linecap="butt"></path>
<path d="M29 24C29 26.7614 26.7614 29 24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24Z" stroke-linecap="butt"></path>
<path d="M6.85156 7.10254L41.1462 41.3972" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-eye-invisible',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-eye-invisible': true
        }
      }
    }
  }
</script>
