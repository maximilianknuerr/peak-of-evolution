<template>
    <div>
      <v-container class="mr-5 ml-0" style="max-width: 99% !important">
        <v-row>
          <v-col cols=12>
            <v-img src="@/assets/Stern.png" class="bgimg rotating"></v-img>
            <div class="about-text">
            <p>
              With a finished script and an innovative idea, the core team came together in November 2020 and began developing the project. 
              <span  style="font-family: Migra; color: #FF5808">Peak of Evolution</span> is a CG short film by students of the University of Applied Science Salzburg. Real filmed footage of the sets built in miniature scale is meets digital characters.
            </p>
            </div>
            
            <v-img src="@/assets/Stern.png" class="bgimg-2 rotating"></v-img>
          </v-col>
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
  width: 40%;
  height: 40%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 100px;
  margin-left: 70%;
  z-index: 1;
}
.bgimg-2 {
  width: 40%;
  height: 40%;
  position: absolute;

  right: 0;
  bottom: 5%;
  left: 0;

  margin-left: 5%;
  z-index: 1;
}
.about-text {
  position: relative;
  font-size: 35px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 50px;
  margin-left: calc(20% + 240px);

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
  margin-left: 10%;
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
  width: 70%;
  height: 70%;
  margin-top: 50px;
  margin-left: 15%;
  margin-right: 15%;
}
.email {

  font-size: 20px;
}

}

@media (max-width:800px) {
.email{
  font-size: 30px;
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