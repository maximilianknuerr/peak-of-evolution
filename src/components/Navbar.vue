<template>
  <div>
    <v-app-bar height=130 color="rgba(235, 229, 210, 1)" class="navbar" absolute app elevation=0>

      <v-toolbar-side-icon>
            <v-img class="mr-3 ml-5 mt-7" src="@/assets/logo.png" height="100" width="100"> 
            </v-img>
     </v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <div v-if="!isMobile">
        <router-link to="/about" class="navbar-btn" active-link="active">
        <v-icon class="dot" color="#FF5808" size="20">mdi-circle</v-icon>ABOUT
        </router-link>

        <router-link to="/facts" class="navbar-btn"  active-class="active">
        <v-icon class="dot" color="#FF5808" size="20">mdi-circle</v-icon>FACTS
        </router-link>

        <router-link to="/team" class="navbar-btn"  active-class="active">
        <v-icon class="dot" color="#FF5808" size="20">mdi-circle</v-icon>TEAM
        </router-link>

        <router-link to="/trailer" class="navbar-btn">
        <v-icon class="dot" color="#FF5808" size="20">mdi-circle</v-icon>TRAILER
        </router-link>
        <router-link to="/contact" class="navbar-btn">
        <v-icon class="dot" color="#FF5808" size="20">mdi-circle</v-icon>CONTACT
        </router-link>
      </div>

      <v-btn v-if="isMobile" @click.stop="menu = !menu">
        <v-img src="@/assets/Menu.png"></v-img>
      </v-btn>
    </v-app-bar>
    
      <list-menu style="z-index:50; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16); position:absolute; width: 100vw" @clicked="menu = !menu" v-if="menu && isMobile"></list-menu>
    
    
    
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
  .dot {
    display: none;

  }
  .active .dot{
    padding-right: 10px;
    display: inline-flex;
    color: #FF5808;
  }
  .navbar-btn{
    width: 1000px;
    font-size: 30px;
    font-family: "DMSans";
    text-decoration: none;
    color: #000000;
    padding: 15px;
  }
</style>
