<template>
  <div>
    one

    <div>
      <OneChild :state="state" v-model:data="state" @ageAdd="ageAdd" />
    </div>
  </div>
</template>

<script setup>
import OneChild from "./child.vue";
import { reactive } from "vue";
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
const state = reactive({
  name: "小明",
  age: 20,
});

const ageAdd = () => {
  state.age++;
};
</script>

<style>
</style>
