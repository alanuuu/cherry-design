
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M41 43L41 5" stroke-linecap="butt"></path>
<path d="M28 24L5 24" stroke-linecap="butt"></path>
<path d="M34.0402 23.9998L27 30.4533L27 17.5462L34.0402 23.9998ZM34.8435 24.7361L34.8444 24.7369L34.8435 24.7361Z" stroke-linecap="butt"></path>
<path d="M34 24L27 18L27 30L34 24Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-to-right',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-to-right': true
        }
      }
    }
  }
</script>
