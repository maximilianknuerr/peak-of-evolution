<template>
  <div id="app">
    <v-app>
      <splash-screen v-if="isSplash" :isSplash="isSplash"></splash-screen>
    <v-main v-if="!isSplash">
      <NavBar/>
      <router-view></router-view>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import SplashScreen from '@/components/SplashScreen.vue'
export default {
  name: 'App',

  components: {
    NavBar,
    SplashScreen
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
  src: url("fonts/DMSans/DMSans-Regular.ttf");
}

@font-face {
  font-family: "Migra";
  src: url("fonts/Migra_Headline/MigraItalic-ExtraboldItalic.otf");
}

.v-application{
     font-family: "DMSans";
     font-size: 20px;
     background-color: #EBE5D2;
     min-height: 100vh;
     padding: 0% !important;
}

</style>