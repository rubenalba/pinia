<template>
  <div class="about">
    <div class="count">{{ contador.counter }}</div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const contador = useCounterStore();
</script>

<style></style>
