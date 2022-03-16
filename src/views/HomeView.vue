<template>
    <list-menu v-if="isMobile"></list-menu>
</template>
<script>
import ListMenu from '@/components/ListMenu.vue'
export default {
  name: 'HomeView',
  components: {
    ListMenu,
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