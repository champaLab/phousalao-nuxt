<template>
  <div class="error">
    <v-card class="card">
      <h1>{{ error.statusCode }}</h1>
      <h2>Oooop.</h2>
      <p>{{ error.message }}</p>
      <v-btn @click="handleClearError">ກັບໜ້າທຳອິດ</v-btn>
    </v-card>
  </div>
</template>
<script setup>
defineProps(["error"]);

function handleClearError() {
  return clearError({ redirect: "/" });
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 30px;
    margin: 10px;
    gap: 1rem;

    h1 {
      font-size: 2.5rem;
    }
  }
}
</style>
