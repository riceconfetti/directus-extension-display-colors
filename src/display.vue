<script setup>
defineProps(["colors"]);
</script>

<template>
  <div class="flex gap-1 p-2 flex-wrap w-full h-full">
    <span
      v-for="color in colors"
      class="rounded-full min-h-full size-4 flex"
      :style="'background:' + color.hex"
    />
  </div>
</template>
