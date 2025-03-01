<script>
import "./app.css";
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      colors: JSON.parse(this.value),
    };
  },
};
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

<style></style>
