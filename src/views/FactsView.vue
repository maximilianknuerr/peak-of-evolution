<template>

      <v-container class="mr-5 ml-0 mb-5 mt-9 pt-9" style="max-width: 99% !important">
        <v-row>
          <v-col class="mt-9" cols=12>
            <v-img src="@/assets/Stern.png" class="bgimg rotating"></v-img>
            <div v-if="!storedLanguage" class="about-text">
              <p>
                With a finished script and an innovative idea, the core team came together in November 2020 and began developing the project. 
                <br><span  style="font-family: Migra; color: #FF5808">Peak of Evolution</span> is a CG short film by students of the University of Applied Science Salzburg. Real filmed footage of the sets built in miniature scale is meets digital characters.
              </p>
            </div>
            <div v-else class="about-text">
              <p>
                Mit einem fertigen Drehbuch und einer innovativen Idee fand sich das Kernteam Anfang November 2020 zusammen und begann mit der Projektentwicklung.
                <br><span  style="font-family: Migra; color: #FF5808">Peak of Evolution</span> ist ein CG-Kurzfilm von Student*innen der FH Salzburg. Real gefilmtes Footage der im Miniatur-Maßstab gebauten Sets verbindet sich mit digitalen Charakteren.
              </p>
            </div>
            <iframe
            class="video" src="https://www.youtube.com/embed/3nLVVlumXpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            <v-img src="@/assets/Stern.png" class="bgimg-2 rotating"></v-img>
          </v-col>
        </v-row>
      </v-container>

</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ContactView',
  
  data: () => ({
    
  }),
  computed: {
    ...mapState({storedLanguage: 'language'}),
  },
}
</script>
<style scoped>
.bgimg {
  width: 40%;
  height: 40%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 120px;
  margin-left: 70%;
  z-index: 1;
}
.bgimg-2 {
  width: 35%;
  height: 35%;
  position: absolute;

  right: 0;
  bottom: 0;
  left: 0;
  
  margin-bottom: 7%;
  margin-left: -9%;

  z-index: 1;
}
.video {

  margin-top: 35px;
  left: 7vw;
  margin-bottom: 24%;
  width: 84vw;
  height: 56vw;
  position: relative;
  z-index:9999999;
}
.about-text {
  position: relative;
  font-size: 35px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 50px;
  margin-left: calc(20% + 200px);

  z-index: 5;
}
.email {
  z-index:9999999;
  margin-top: 40vh;

  font-size: 50px;
  font-family: Migra; 
  color: #FF5808
}


@media (max-width:600px) {

.about-text {
  margin-top: 200px;
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

.bgimg-2 {
display: none;
}
.email {

  font-size: 20px;
}

}

@media (max-width:800px) {
.email{
  font-size: 30px;
}
.about-text {
  margin-top: 200px;
  margin-left: 5%;
  margin-right: 5%;
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