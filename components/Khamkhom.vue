<template>
  <div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
});
</script>

<style lang="css" scoped>
.message {
  height: 10rem;
  background-color: #ff9f4b46;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  text-align: center;
  color: #ff7700;
}
</style>
