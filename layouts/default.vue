<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css">
@font-face {
  font-family: noto;
  src: url("/fonts/NotoSerifLao-Regular.woff");
}
* {
  margin: 0;
  padding: 0;
  font-family: noto !important;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 5px 5px #ddd;
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 999999;
  background-color: #fff;
}
</style>
