<template>
  <v-toolbar height=100 color="rgba(235, 229, 210, 1)" class="navbar" dense>

      <v-toolbar-side-icon>
            <v-img class="mr-3" src="@/assets/LOGO.png" height="80px" width="80px"> 
            </v-img>
     </v-toolbar-side-icon>

      <v-spacer></v-spacer>

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
    </v-toolbar>
</template>

<script>

export default {
  name: 'NavBar',

  data: () => ({
    
  }),
}
</script>
<style scoped>
  .navbar-btn{
    font-size: 30px;
  }
</style>
