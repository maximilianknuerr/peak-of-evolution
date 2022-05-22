<template>

        <v-container class="mr-0 ml-0 mb-7 mt-7" style="max-width: 100% !important">
          <v-row>
            <v-col cols=1></v-col>
            <v-col cols=11 class="pl-0">
              <v-img src="@/assets/Stern.png" class="bgimg rotating"></v-img>
              {{language}}
              <div v-if="!storedLanguage" class="about-text">
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
              <div v-else class="about-text">
                <br>
              <br>
              <p>
                Die Entstehung des Menschen war bloßer Zufall.
              </p>
              <p>
                Aus Fischen entstanden, zu komischen Affen geworden, geben wir uns selber absurd viel Bedeutung und damit auch den kleinen Alltagssituationen um uns herum. Angezogen in Stoff, an einem Bürostuhl sitzend, versuchen wir uns selber Bedeutung zu geben und uns eine Welt zu schaffen, in der wir Wichtigkeit besitzen. Wir nehmen alles viel zu ernst, von Alltagspeinlichkeiten bis zu erfundenen Systemen, in die wir uns bereitwillig einordnen.
              </p>
              <br>
              <p>
                <span style="font-family: Migra; color: #FF5808">Peak of Evolution</span>
               thematisiert die Systeme, Riten und Bräuche die wir uns geschaffen haben, um einem vorgefertigten Weg zu folgen, der uns einen Sinn gibt durch dessen wir uns von “einfachen Tieren” abheben. Als Menschheit haben wir uns glorifiziert und dadurch den menschlichen Narzissmus auf die Spitze getrieben.
              </p>
              </div>
            </v-col>
          
          </v-row>
        </v-container>

</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ContactView',

  computed: {
    ...mapState({storedLanguage: 'language'}),
  },
  data: () => ({
    
  }),
}
</script>
<style scoped>
.bgimg {
  width: 40%;
  height: 40%;
  position: fixed;
  top: 150px;

  bottom: 0;
  left: 5%;

  z-index: 1;
}

.about-text {
  position: relative;
  font-size: 35px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 205px;
  margin-left: 17%;

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