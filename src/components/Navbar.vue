<template>
  <div>
    <v-app-bar height=100 color="rgba(235, 229, 210, 1)" class="navbar" fixed app elevation=0>

      <v-toolbar-side-icon>
            <v-img class="mr-3" src="@/assets/LOGO.png" height="80px" width="80px"> 
            </v-img>
     </v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <div v-if="!isMobile">
        <router-link to="/about" class="navbar-btn" active-link="active">
        <v-icon class="dot" color="#FF5808" size="70px">mdi-circle-small</v-icon>ABOUT
        </router-link>

        <router-link to="/facts" class="navbar-btn"  active-class="active">
        <v-icon class="dot" color="#FF5808" size="70px">mdi-circle-small</v-icon>FACTS
        </router-link>

        <router-link to="/team" class="navbar-btn"  active-class="active">
        <v-icon class="dot" color="#FF5808" size="70px">mdi-circle-small</v-icon>TEAM
        </router-link>

        <router-link to="/trailer" class="navbar-btn">
        <v-icon class="dot" color="#FF5808" size="70px">mdi-circle-small</v-icon>TRAILER
        </router-link>
        <router-link to="/contact" class="navbar-btn">
        <v-icon class="dot" color="#FF5808" size="70px">mdi-circle-small</v-icon>CONTACT
        </router-link>
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
  .dot {
    display: none;
  }
  .active .dot{

    display: inline-flex;
  }
  .navbar-btn{
    font-size: 30px;
    font-family: "DMSans";
    text-decoration: none;
    color: #000000;
    padding: 15px;
  }
  .active{
    color: #FF5808;
  }
</style>
