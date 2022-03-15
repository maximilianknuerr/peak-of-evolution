<template>
    <div>
        <v-container >
          <v-row>
          <v-img src="@/assets/Stern.png" class="bgimg"></v-img>
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
  name: 'AboutView',

  data: () => ({
    
  }),
}
</script>
<style scoped>
.bgimg {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 110px;
  margin-left: 200px;
  z-index: 1;
  

}

.about-text {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 200px;
  margin-left: 375px;
  margin-right: 50px;
  z-index: 5;
}
</style>