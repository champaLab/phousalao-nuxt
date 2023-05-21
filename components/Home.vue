<template>
  <div>
    <div class="band">
      <img src="images/header.png" alt="image" />
    </div>
    <div class="content">
      <Search />

      <div class="py-2">
        <v-row>
          <v-col sm="12" md="4" lg="4" xl="3" v-for="(bookType, index) in bookTypes">
            <NuxtLink
              :to="
                '/book/' + bookType.bt_id + '?title=' + bookType.title + bookType.subtitle
              "
            >
              <v-card :key="bookType.icon" class="p-2">
                <v-row>
                  <v-col sm="12" md="4">
                    <img :src="bookType.icon" alt="icon" />
                  </v-col>
                  <v-col sm="12" md="8">
                    <div class="font-weight-normal">
                      <strong> {{ bookType.title }}</strong>
                    </div>
                    <div class="font-weight-normal" :title="bookType.subtitle">
                      {{ bookType.subtitle != "null" ? bookType.subtitle : "" }}
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </NuxtLink>
          </v-col>
        </v-row>
      </div>
    </div>
    <Khamkhom :message="khamkhom.message" />
  </div>
</template>

<script setup lang="ts">
const { apiBasePath } = useRuntimeConfig();

const { data: khamkhom }: any = await useFetch(apiBasePath + "/khamkhom/random");
const { data: bookTypes }: any = await useFetch(apiBasePath + "/book-types");
</script>

<style lang="css" scoped>
.band {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
}

img {
  width: 100%;
}
.content {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
.title {
  align-items: center;
}
</style>
