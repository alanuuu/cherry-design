
<template>
<svg :class="cls" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
<path d="M7 17V43M42.1707 21.6064L36.2217 40.3032C36.0897 40.7182 35.7043 41 35.2688 41H14V19H17L26.4026 6.77657C26.7345 6.34514 27.3505 6.25838 27.7886 6.58134L30.3245 8.45067C32.4962 10.0515 33.3323 12.9049 32.3681 15.4246L31 19H40.2648C41.6185 19 42.5811 20.3165 42.1707 21.6064Z" stroke-linecap="butt"></path>
</svg>
</template>
<script>
  export default {
    name: 'icon-thumb-up',
    computed: {
      cls() {
        return {
          'c-icon': true,
          'c-thumb-up': true
        }
      }
    }
  }
</script>
