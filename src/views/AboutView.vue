<template>
    <div>
        <v-container>
          <v-row>
          <v-img src="@/assets/Stern.png" class="bgimg rotating"></v-img>
          <div class="about-text">
            <br>
          <br>
          <p>
            The emergence of man was mere coincidence.
          </p>
          <p>
            Evolving from fish and having become comical apes, we give ourselves and small everyday situations around us an absurd amount of importance. Dressed in clothes, sitting at an office chair, we try to give ourselves meaning and create a world for ourselves in which we have importance. We take everything far too seriously, from everyday embarrassments to invented systems into which we willingly place ourselves.
          </p>
          <br>
          <p>
            <span style="font-family: Migra; color: #FF5808">Peak of Evolution</span>
             explores the systems, rituals and customs we have created to follow a preconceived path that gives us meaning and sets us apart from „mere animals“. As humanity, we have glorified ourselves and taken human narcissism to the extreme.
          </p>
          </div>
          </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
  name: 'ContactView',

  data: () => ({
    
  }),
}
</script>
<style scoped>
.bgimg {
  width: 350px;
  max-height: 350px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 110px;
  margin-left: 15%;
  z-index: 1;
}

.about-text {
  position: absolute;
  font-size: 35px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 165px;
  margin-left: calc(15% + 175px);
  margin-right: 50px;
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