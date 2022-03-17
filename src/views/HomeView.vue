<template>
    <list-menu v-if="isMobile"></list-menu>
    <about-view v-else></about-view>
</template>
<script>
import ListMenu from '@/components/ListMenu.vue'
import AboutView from '@/views/AboutView.vue'
export default {
  name: 'HomeView',
  components: {
    ListMenu,
    AboutView,
  },
  data: () => ({
    //
  }),
  computed: {
  isMobile() {
    return this.$vuetify.display.smAndDown;
  }
  }
}
</script>