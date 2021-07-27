<template>
  <div class="container">
      第一章?
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="less" scope>
.container {
  padding: 10px;

  h3 {
    text-align: left;
  }

  .contentBox {
    margin: 30px 10px;
    .title {
      font-weight: 400;
    }
  }
  .content {
    span {
      color: red;
    }
    & > div > div {
      padding-left: 40px;
    }
    & > div {
      padding-left: 20px;
    }
  }
}
</style>
