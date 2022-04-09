<template>
    <div>
        <v-container>
          <v-row class="justify-center">
          <v-img src="@/assets/Stern.png" class="bgimg rotating"></v-img>
          <div class="about-text">

          <p style="font-family: Migra; font-size: 96px;">
            Under Construction
          </p>
          <p>
            Diese Seite wird gerade überarbeitet.
          </p>
          </div>
          </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
  name: 'ConstructionView',

  data: () => ({
    
  }),
}
</script>
<style scoped>
.bgimg {
  width: 540px;
  max-height: 540px;
  position: absolute;
  margin-top: 20vh;
  z-index: 1;
}

.about-text {
  position: relative;
  font-size: 35px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  margin-top: calc(20vh + 150px);
  z-index: 5;
}

@media (max-width:600px) {

.about-text {
  margin-top: 100px;
  margin-left: 5%;
  margin-right: 5%;
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