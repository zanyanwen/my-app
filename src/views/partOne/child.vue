<template>
  <div>
    oneChild
    {{ state.name }}
    {{ state.age }}

    {{ data.name }}
    {{ data.age }}

    <input type="text" v-model="data.name" />

    <a-button @click="ageAdd" type="primary">age++</a-button>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from "vue";
let props = defineProps({
  state: Object,
  data: Object,
});
let emit = defineEmits(["ageAdd"]);
const ageAdd = () =>{
    emit("ageAdd");
}
</script>

<style>
</style>
