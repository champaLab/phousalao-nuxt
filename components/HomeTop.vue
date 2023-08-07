<template>
  <div>
    <div class="bg-pra">
      <img src="/images/home-bg.jpg" alt="ວັດພູສະເຫຼົ້າ" />

      <div class="box-text">
        <h2 class>ຢ່າເປັນຄົນເກັ່ງ ທີ່ບໍ່ມີນ້ຳໃຈ</h2>
        <h3 class>ແຕ່ຈົ່ງເປັນຄົນທຳມະດາທົ່ວໆໄປ ທີ່ຮູ້ຈັກໃຫ້ ແລະ ແບ່ງປັນ.</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bg-pra {
  position: relative;
  height: 100%;
  max-height: 70vh;
  overflow: hidden;

  img {
    z-index: 1;
    width: 100%;
  }

  .box-text {
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 10%;
    color: #fff;
  }
}
</style>