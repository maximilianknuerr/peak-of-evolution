<template>
  <div id="app">
    <v-app>
      
      <v-content>
      
      <NavBar v-if="!isSplash"/>
      <router-view v-if="!isSplash"></router-view>

      <splash-screen v-if="isSplash" :isSplash="isSplash"></splash-screen>
    </v-content>
    <bottom-footer v-if="!isSplash"></bottom-footer>
  </v-app>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import SplashScreen from '@/components/SplashScreen.vue'
import BottomFooter from '@/components/Footer.vue'
export default {
  name: 'App',

  components: {
    NavBar,
    SplashScreen,
    BottomFooter
  },

  data: () => ({
    isSplash: true,
  }),
  created() {
    setTimeout(() => {
      this.isSplash = false
    }, 2000)
  }

}
</script>
<style>
@font-face {
  font-family: "DMSans";
  src: url("fonts/DMSans/DMSans-Medium.ttf");
}

@font-face {
  font-family: "Migra";
  src: url("fonts/Migra_Headline/MigraItalic-ExtraboldItalic.otf");
}

.v-application{
     font-family: "DMSans";
     line-height: 1.36;
     font-size: 20px;
     background-color: #EBE5D2;
     min-height: 100vh;
     padding: 0% !important;
}

</style>