<template>
  <div>
    <v-app-bar height=100 color="rgba(235, 229, 210, 1)" class="navbar" fixed app elevation=0>

      <v-toolbar-side-icon>
            <v-img class="mr-3" src="@/assets/LOGO.png" height="80px" width="80px"> 
            </v-img>
     </v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <div v-if="!isMobile">
        <v-btn to="/about" class="navbar-btn">
          ABOUT
        </v-btn>

        <v-btn to="/facts" class="navbar-btn">
          FACTS
        </v-btn>

        <v-btn to="/team" class="navbar-btn">
          TEAM
        </v-btn>

        <v-btn to="/trailer" class="navbar-btn">
          TRAILER
        </v-btn>
        <v-btn to="/contact" class="navbar-btn">
          CONTACT
        </v-btn>
      </div>

      <v-btn v-if="isMobile" @click.stop="menu = !menu">
        <v-img src="@/assets/Menu.png"></v-img>
      </v-btn>
    </v-app-bar>
    
      <list-menu style="z-index:50; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16); position:fixed; width: 100%" @clicked="menu = !menu" v-if="menu && isMobile"></list-menu>
    
    
    
  </div>
</template>

<script>
import ListMenu from '@/components/ListMenu.vue'
export default {
  name: 'NavBar',

  components: {
    ListMenu,
  },

  data: () => ({
    menu: false,
  }),
  computed: {
  isMobile() {
    return this.$vuetify.display.smAndDown;
  }
  }
}
</script>
<style scoped>
  .navbar-btn{
    font-size: 30px;
  }
</style>
