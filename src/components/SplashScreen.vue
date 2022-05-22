<template>
    <div class="{splash: true, fadeout: !isSplash}">
        <p class="splash-text">Peak of Evolution</p>
    </div>
</template>
<script>
export default {
  name: "SplashScreen",
  props: ["isSplash"]
};
</script>
<style>
.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #EBE5D2;
  z-index: 50;
  
}
.splash-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Migra; 
  color: #FF5808;
  font-size: 150px;
  text-align: center;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
@media screen and (max-width: 600px) {
  .splash-text {
    font-size: 80px;
  }
}
  

</style>