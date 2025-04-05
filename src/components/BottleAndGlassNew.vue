<template>
  <div class="bottle">
    <div class="neck"></div>
    <div class="body"></div>
  </div>

  <div id="pour">
    <div id="pour-main"></div>
  </div>

  <div className="chalice">
    <div className="liquid red-wine"></div>
  </div>

  <div class="welcome">
    <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span><span><el-icon><GobletFull /></el-icon></span>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import {onMounted, ref} from "vue";
import router from "@/router/index.js";

onMounted(() => {
  gsap.fromTo('.bottle', { rotate: 0, x: 0 }, { rotate: -70, x: 20, duration: 1, delay: 0.1,});
  setTimeout(() => {
    document.getElementById('pour').classList.add('sloshme');
  }, 1000);
  gsap.from(".welcome span", {
    opacity: 0,
    y: 110,
    stagger: 0.5, // Задержка между буквами
    duration: 3,
    delay: 1,
    ease: "power3.out"
  });
  setTimeout(() => {
    console.log('!!!!!!')
    router.push({name:"Main"})
  }, 6000);
});
</script>

<style scoped lang="scss">
/*Amount of liquid*/
$full: 45px;
$empty: 0px;

/*Type of liquid*/
$red-wine-colour: #3C191D;
$white-wine-colour: #A1A265;

.chalice {
  position: absolute;
  //top: -100px;
  //top: -6%;
  //right: 0;
  //bottom: 0;
  //left: 0;
  //top: calc(30% + 140px);
  top: calc(30% + 130px);
  left: calc(50% - 25px);
  margin: auto;
  width: 45px;
  height: 60px;
  border: solid 2px rgba(255, 255, 255, .2);
  border-top-width: 0px;
  border-radius: 20% 20% 50% 50% / 50% 50% 40% 40%;
  /*Stalk? Stem? The bit you hold...*/
  &:before {
    content: '';
    position: absolute;
    bottom: -45px;
    left: 0px;
    right: 0px;
    width: 2px;
    height: 43px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.2);
  }
  /*Base*/
  &:after {
    content: '';
    position: absolute;
    bottom: -48px;
    left: 0px;
    right: 0px;
    width: 30px;
    height: 3px;
    margin: auto;
    border-radius: 50% 50% 0% 0% / 50% 50% 50% 50%;
    background-color: rgba(255, 255, 255, 0.2);
  }
}
.liquid {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 45px;
  height: 60px;
  border-top-width: 0px;
  border-radius: 20% 20% 50% 50% / 50% 50% 40% 40%;
  background-color: #f7fcff40;
  box-sizing: border-box;
  overflow: hidden;
  /*// Add new drinks here!*/
  /*// Red Wine*/
  &.red-wine {
    &:before {
      //background-color: $red-wine-colour;
      background-color: #560d15;
    }
  }
  /*White Wine*/
  &.white-wine {
    &:before {
      background-color: $white-wine-colour;
    }
  }
  &:before {
    content: '';
    width: 400%;
    margin: auto;
    position: absolute;
    bottom: -10px;
    left: -150%;
    right: 0;
    transform-origin: 50%;
    animation: fill 10s forwards ease-in-out;//infinite
    animation-delay: 1s;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 5px;
    left: -4px;
    margin: auto;
    width: 30px;
    height: 45px;
    border: solid 6px rgba(255, 255, 255, 0.3);
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-radius: 20% 20% 50% 50% / 50% 50% 40% 40%;
    box-sizing: border-box;
    transform: rotateZ(-3deg);
  }
}
@keyframes fill {
  0% {
    transform: rotateZ(-25deg);
    height: 10px//$empty +10px;//+ 10px
  }
  2% {
    transform: rotateZ(25deg);
  }
  4% {
    transform: rotateZ(-10deg);
  }
  6% {
    transform: rotateZ(10deg);
  }
  8% {
    transform: rotateZ(-8deg);
  }
  10% {
    transform: rotateZ(8deg);
  }
  12% {
    transform: rotateZ(-6deg);
  }
  14% {
    transform: rotateZ(6deg);
  }
  16% {
    transform: rotateZ(-4deg);
  }
  18% {
    transform: rotateZ(4deg);
  }
  20% {
    transform: rotateZ(-2deg);
  }
  22% {
    transform: rotateZ(2deg);
  }
  24% {
    transform: rotateZ(0deg);
    height: $full + 10px;
  }
  40% {
    height: $full + 10px;
  }
  90% {
    height: $full + 10px;//$empty + 10px;
  }
  100% {
    height: $full + 10px;// $empty + 10px;
  }
}

.bottle {
  position: absolute;
  //top: 270px;
  top: 30%;
  left: calc(50% + 80px);
  width: 50px;
  height: 150px;
  background: linear-gradient(to right, #1c3e30, #1c532e, #0d2310); /* Добавил объемный эффект */
  border-radius: 20px 20px 10px 10px;
  transform: translateX(-50%);
  box-shadow: inset -5px 0 10px rgba(255, 255, 255, 0.2); /* Имитация блика слева */
}
.neck {
  position: absolute;
  top: -30px;
  left: 50%;
  width: 20px;
  height: 30px;
  background: linear-gradient(to right, #1f4228, #082a0f);
  border-radius: 5px;
  transform: translateX(-50%);
  z-index: 2;
}
.bottle::before {
  content: "";
  position: absolute;
  top: 15px;
  left: 12px;
  width: 12px;
  height: 120px;
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1) 70%, transparent);
  border-radius: 50%;
  opacity: 0.7;
  transform: rotate(360deg);
}

@-webkit-keyframes pour {
  0%  {  -webkit-transform:scale3d(1,0.1,1); opacity:0; top:calc(30% + 48px);}
  2%  {  -webkit-transform:scale3d(1,1,1); opacity:1; top:calc(30% + 48px); }
  70%,80% { -webkit-transform:scale3d(1,1,1);opacity:1; top:calc(30% + 48px); }
  81% { -webkit-transform:scale3d(1,0.1,1);opacity:0; top:calc(30% + 48px); }
  90%  {  -webkit-transform:scale3d(1,0.1,1); opacity:0.0; top:calc(30% + 48px); }
  100% {  -webkit-transform:scale3d(1,0.1,1); opacity:0.0; top:calc(30% + 48px); }
}
#pour {
  position: absolute;
  //top: 315px;
  //top: 35%;
  top: calc(30% + 48px);
  left: calc(50% - 10px);
  opacity:0;
  -webkit-transform-origin: 0px -50px;
}
.sloshme {
  animation-delay: 1s;
  -webkit-animation: pour 4s ease 1;
}
#pour-main {
  top: calc(30% + 48px);
  left: calc(50% - 10px);
  border-bottom: 140px solid #560d15;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 40px;
  width: 10px;
  border-radius: 15px;
}

.welcome{
  position: absolute;
  top: calc(30% + 250px);
  left: calc(50% - 50px);
  color: #a89e9e;
  font-size: 24px;
}
</style>
