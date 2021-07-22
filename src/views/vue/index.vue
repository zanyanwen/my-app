<template>
  <div class="container">
    <p>1. name === script-setup 无法指定当前组件的名字，所以使用的时候以文件名为主</p>

    <div>
      2. 组件
      <div>
        <Foo name="Foo" :age="age" @nameChange="nameChange" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Foo from "./Foo";

let age = ref(21);

const nameChange = () => {
  age.value += 1;
};
</script>

<style lang="less" scoped>
.container {
  text-align: left;
  padding: 10px;
}
</style>
