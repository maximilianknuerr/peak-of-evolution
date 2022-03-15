<template>
  <div id="app">
    <v-app style="overflow: hidden; height: 100%">
    <v-main>
      <NavBar/>
      <AboutView/>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import AboutView from '@/views/AboutView.vue'
export default {
  name: 'App',

  components: {
    NavBar,
    AboutView,
  },

  data: () => ({
    //
  }),
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
}

</style>