<template>
    <div>
        <v-container style="max-width: 99% !important">
          <v-row class="justify-center">
          <v-img src="@/assets/Stern.png" class="bgimg rotating"></v-img>
          <div class="about-text">

          <p class="construction">
            Under Construction
          </p>
          <p v-if="storedLanguage">
            Diese Seite wird gerade überarbeitet.
          </p>
          <p v-else>
            This site is currently under construction.
          </p>
          </div>
          </v-row>
        </v-container>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ConstructionView',

  data: () => ({
    
  }),
  computed: {
    ...mapState({storedLanguage: 'language'}),
  },
}
</script>
<style scoped>
.bgimg {
  width: 540px;
  max-height: 540px;
  position: fixed;
  margin-top: 20vh;
  z-index: 1;
}
.construction {
  font-family: Migra;
  font-size: 96px;
}
.about-text {
  position: absolute;
  font-size: 35px;
  top: 40vh;
  right: 0;
  bottom: 50px;
  left: 0;
  text-align: center;
  margin-top: 0px;
  z-index: 5;
}

@media (max-width:600px) {

.about-text {
  margin-top: 10px;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 20px;
}
.construction {

  font-size: 50px;
}
.bgimg {
  width: 70%;
  height: 70%;
  margin-top: 50px;
  margin-left: 15%;
  margin-right: 15%;
}

}


@keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
@-webkit-keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
.rotating
    {
    -webkit-animation: rotating 5s linear infinite;
    -moz-animation: rotating 5s linear infinite;
    -ms-animation: rotating 5s linear infinite;
    -o-animation: rotating 5s linear infinite;
    animation: rotating 5s linear infinite;
    }
</style>