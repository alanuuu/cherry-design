
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M21 13V22M39 42H9C8.44772 42 8 41.5523 8 41V7C8 6.44772 8.44772 6 9 6H31.5509C31.8366 6 32.1086 6.12215 32.2983 6.33564L39.7474 14.7158C39.9101 14.8989 40 15.1353 40 15.3802V41C40 41.5523 39.5523 42 39 42ZM14 6H28V21C28 21.5523 27.5523 22 27 22H15C14.4477 22 14 21.5523 14 21V6Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-save',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-save': true
        }
      }
    }
  }
</script>
