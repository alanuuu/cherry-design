
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M24 1C11.2892 1 1 11.2895 1 24C1 36.7105 11.2895 47 24 47C36.7108 47 47 36.7105 47 24C47 11.2892 36.7105 1 24 1ZM30.1723 23.8793H26.1793V38.2843H20.2477V23.8793H17.221V18.9169H20.2477V15.8903C20.2477 11.8973 21.9426 9.47551 26.6624 9.47551H30.6554V14.4378H28.2339C26.4191 14.4378 26.2981 15.1647 26.2981 16.3736V18.7952H30.7757L30.1708 23.8795L30.1723 23.8793Z" fill="currentColor" stroke="none" stroke-width="none" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-faceBook-circle-fill',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-faceBook-circle-fill': true
        }
      }
    }
  }
</script>
