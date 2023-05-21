<template>
  <div>
    <v-card class="card">
      <div :class="show ? 'card-title-border' : 'card-title'" @click="handleToggle">
        <div class="text">
          <v-avatar color="surface-variant">{{ Number(index) + 1 }}</v-avatar>
          <p class="title">{{ title }}</p>
        </div>
        <span class="mdi mdi-menu-down"></span>
      </div>
      <span class="content" v-if="show" v-html="content"></span>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const show = ref(false);

const handleToggle = () => {
  show.value = !show.value;
};

const props = defineProps({
  index: Number,
  b_index: Number,
  b_id: Number,
  title: String,
  content: String,
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}
.card {
  width: 100%;
  max-width: 960px;
  padding: 10px;

  .card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    :hover {
      cursor: pointer;
    }
    .text {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
  }

  .card-title-border {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed #ddd;
    width: 100%;
    padding-bottom: 5px;
    margin-bottom: 5px;

    :hover {
      cursor: pointer;
    }
    .text {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
  }
}
</style>
