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

        <v-btn class="navbar-btn">
          FACTS
        </v-btn>

        <v-btn class="navbar-btn">
          TEAM
        </v-btn>

        <v-btn class="navbar-btn">
          TRAILER
        </v-btn>
        <v-btn to="/contact" class="navbar-btn">
          CONTACT
        </v-btn>
      </div>

      <v-btn v-if="isMobile">
        <v-img src="@/assets/Menu.png"></v-img>
      </v-btn>
    </v-app-bar>
    
  </div>
</template>

<script>

export default {
  name: 'NavBar',

  data: () => ({
    
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
