<template>
  <div class="container">
    <div>
      使用props
      <div>
        <span>name:</span>
        <span>{{name}}</span>
      </div>
      <div>
        <span>age:</span>
        <span>{{age}}</span>
      </div>
      <a-button type="primary" @click="onChange">name修改</a-button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmit, onMounted } from "vue";

onMounted(() => {
  console.log("mounted!");
});

const props = defineProps({
  name: String,
  age: Number
});

let emit = defineEmit(["nameChange"]);

const onChange = () => {
  emit("nameChange");
};
</script>

<style lang="less" scoped>
.container {
  border: 1px solid #ddd;
  text-align: left;
  padding: 10px;
}
</style>
