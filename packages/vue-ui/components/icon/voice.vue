
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M41 21V22C41 30.8366 33.8366 38 25 38H23C14.1634 38 7 30.8366 7 22V21M24 38V44M24 30C19.0294 30 15 25.9706 15 21V15C15 10.0294 19.0294 6 24 6C28.9706 6 33 10.0294 33 15V21C33 25.9706 28.9706 30 24 30Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-voice',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-voice': true
        }
      }
    }
  }
</script>
