
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M19 6H15C13.3431 6 12 7.34315 12 9V19C12 22 7.65685 24 6 24C7.65685 24 12 26 12 29V39C12 40.6569 13.3431 42 15 42H19M29 6H33C34.6569 6 36 7.34315 36 9V19C36 22 40.3431 24 42 24C40.3431 24 36 26 36 29V39C36 40.6569 34.6569 42 33 42H29" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-code-block',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-code-block': true
        }
      }
    }
  }
</script>
