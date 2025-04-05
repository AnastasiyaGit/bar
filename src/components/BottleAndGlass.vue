<template>
  <div class="wine-container">
    <div class="bottle">
      <div class="neck"></div>
      <div class="body"></div>
    </div>
<!--    <div ref="wineStream" class="wine-stream"></div>-->
    <div class="glass">
      <div class="bowl">
        <div ref="wineFill" class="wine-fill"></div>
      </div>
      <div class="stem"></div>
      <div class="base"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

export default {
  setup() {
    const wineStream = ref(null);
    const wineFill = ref(null);

    onMounted(() => {
      gsap.fromTo('.bottle', { rotate: 0, x: 0 }, { rotate: -30, x: 20, duration: 1, delay: 0.5 });
      gsap.fromTo(wineStream.value,
        { height: 0, opacity: 0, left: 'calc(50% + 10px)', top: '20px' },  // Изменение top
        { height: '80px', opacity: 1, duration: 2, delay: 1, top: '60px' } // Поднимите вниз, чтобы поток шел в бокал
      );
      gsap.to(wineFill.value, { height: '100%', duration: 2, delay: 2 });
    });

    return { wineStream, wineFill };
  }
};
</script>

<style scoped>
.wine-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 400px;
}

.bottle {
  position: absolute;
  top: -20px; /* Поднял бутылку выше */
  left: calc(50% + 20px);
  width: 60px;
  height: 150px;
  background: #552200;
  border-radius: 20px 20px 10px 10px;
  transform: translateX(-50%);
}

.neck {
  position: absolute;
  top: -30px;
  left: 50%;
  width: 20px;
  height: 30px;
  background: #552200;
  border-radius: 5px;
  transform: translateX(-50%);
  z-index: 2;
}

.wine-stream {
  position: absolute;
  top: 20px; /* Сместил вниз */
  left: calc(50% + 10px);
  width: 5px;
  height: 0;
  background: #8B0000;
  border-radius: 5px;
  z-index: 1;
}

.glass {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 80px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
}

.bowl {
  width: 80px;
  height: 80px;
  background: transparent;
  border: 3px solid #ccc;
  border-radius: 0 0 50% 50%;
  position: relative;
  overflow: hidden;
}

.wine-fill {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0;
  background: #8B0000;
  border-radius: 0 0 50% 50%;
}

.stem {
  width: 10px;
  height: 50px;
  background: #ccc;
}

.base {
  width: 40px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
}
</style>
