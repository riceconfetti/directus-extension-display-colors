<script setup>
import "./app.css";

defineProps({
  value: {
    type: String,
    default: null,
  },
});

let colors = JSON.parse(value);
</script>

<template>
  <div class="flex gap-1 p-2 flex-wrap w-full h-full">
    Value
    <span
      v-for="color in colors"
      class="rounded-full min-h-full size-4 flex bg-(--color-bg)"
      :style="{ '--color-bg': color.css }"
    />
  </div>
</template>
