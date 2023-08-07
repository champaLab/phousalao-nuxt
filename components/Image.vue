<template>
  <v-container>
    <h2 class="image-title">ຮູບພາບ ການເຄື່ອນໄຫວ</h2>
    <div class="btn-select">
      <div @click="handleSetActive('ALL')" :class="[active === 'ALL' ? 'active':'un-active']">ທັງໝົດ</div>
      <div
        @click="handleSetActive('WAT')"
        :class="[active === 'WAT' ? 'active':'un-active']"
      >ກ່ຽວກັບວັດ</div>
      <div
        @click="handleSetActive('SILA')"
        :class="[active === 'SILA' ? 'active':'un-active']"
      >ສີລາຈາລຶກ</div>
      <div
        @click="handleSetActive('PRA-XA')"
        :class="[active === 'PRA-XA' ? 'active':'un-active']"
      >ພຣະອາຈານ ຊາໂງນ</div>
    </div>

    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(item,index) in imageLists" :key="index">
        <div class="text-center">
          <v-img :src="item.path" :alt="item.alt" width="100%" @click="openModal(item.path)"></v-img>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="isModalOpen" max-width="960">
      <v-card>
        <v-img :src="activeModalImage" contain></v-img>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { imageList } from "./imageList";
const active = ref("ALL");
const dialog = ref(false);
const imageLists = ref(imageList);
const isModalOpen = ref(false);
const activeModalImage = ref({});

function handleSetActive(type) {
  active.value = type;
  if (type === "ALL") {
    imageLists.value = imageList;
  } else {
    imageLists.value = imageList.filter(image => {
      return image.type === type;
    });
  }
}

function openModal(image) {
  console.log("======== ", image);
  activeModalImage.value = image;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<style lang="scss" scoped>
.image-title {
  text-align: center;
}

.btn-select {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 10px;
  .active {
    border-bottom: 2px solid #ff0000;
    color: #ff0000;
    :hover {
      cursor: pointer;
    }
  }
  .active:hover,
  .un-active:hover {
    cursor: pointer;
  }
}
</style>