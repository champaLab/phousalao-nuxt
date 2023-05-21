<template>
  <div class="container">
    <div class="title">
      <h3>ໝວດໝູ່ {{ books.bookType.title }}</h3>
      <h5 class="subtitle">{{ books.bookType.subtitle }}</h5>
    </div>

    <div class="card" v-if="books.books.length > 0" v-for="(book, index) in books.books">
      <CardBook
        :b_id="book.b_id"
        :b_index="book.b_index"
        :content="book.content"
        :title="book.title"
        :index="index"
        :key="index"
      />
    </div>
    <div v-else class="no-data">
      <p>ລາຍການນີ້ ຍັງບໍ່ມີຂໍ້ມູນ</p>
      <NuxtLink to="/">
        <v-btn>ກັບຄືນ</v-btn>
      </NuxtLink>
    </div>
    <div class="space" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { apiBasePath } = useRuntimeConfig();

const { data: books } = await useFetch(
  "https://node-monpity.onrender.com/api/v1/get-books-by-type/" + id
);

useSeoMeta({
  title: books.value.bookType.title,
  ogTitle: books.value.bookType.subtitle,
  description: books.value.bookType.subtitle,
  ogDescription: books.value.bookType.subtitle,
  ogImage: books.value.bookType.icon,
  twitterCard: books.value.bookType.title,
});
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 10px;
  border-bottom: 2px dashed #f99b3d;
  h5 {
    color: #8f8f8f !important;
  }
}
.container {
  max-width: 100%;
  width: 960px;
  margin: 0 auto;
  margin-top: 10px;
}
.space {
  height: 200px;
}
.no-data {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: red;
    font-size: 22px;
  }
}
.card {
  margin-bottom: 10px;
}
</style>
