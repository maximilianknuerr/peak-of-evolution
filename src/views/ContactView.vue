<template>
    <div>
        <v-container>
          <v-row>
          <v-img src="@/assets/Stern.png" class="bgimg rotating"></v-img>
          <div class="about-text">
          <p>
            Like what you see? Want to chat? Feel free to contact us!
          </p>
          </div>
          </v-row>
          <v-row class="justify-center" >
            <a class="email" href="mailto:poe.masterprojekt@gmail.com">
              <div>
                poe.masterprojekt@gmail.com
              </div>
              
            </a>
          </v-row>
          <v-img src="@/assets/Stern.png" class="bgimg-2 rotating"></v-img>
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
  width: 480px;
  max-height: 480px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 100px;
  margin-left: 10%;
  z-index: 1;
}
.bgimg-2 {
  width: 480px;
  max-height: 480px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 550px;
  margin-left: 80%;
  z-index: 1;
}
.about-text {
  position: absolute;
  font-size: 35px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 340px;
  margin-left: calc(10% + 240px);

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