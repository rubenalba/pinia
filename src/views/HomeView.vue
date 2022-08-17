<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ contador.counter }}</div>
    <div class="buttons">
      <button @click="contador.decrement">Decrementar --</button>
      <button @click="contador.increment">Incrementar ++</button>
    </div>
    <p>The number is {{ contador.evenOrOdd }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const contador = useCounterStore();
</script>
