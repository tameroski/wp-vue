<template lang="pug">
  #app
    page_header
    page
    page_footer
</template>

<script>
import page from './components/page.vue'
import page_header from './components/header.vue'
import page_footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    page,
    page_header,
    page_footer,
  }
}
</script>

<style>

</style>
