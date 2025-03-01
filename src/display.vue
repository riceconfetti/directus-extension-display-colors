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
    let colors;
    if (value != null && value != undefined) {
      colors = JSON.parse(this.value);
    } else {
      colors = [];
    }
    return colors;
  },
};
</script>

<template>
  <div class="flex gap-1 p-2 flex-wrap w-full h-full">
    Value {{ value }} Colors {{ colors }}
    <!-- <span
      v-for="color in colors"
      class="rounded-full min-h-full size-4 flex bg-(--color-bg)"
      :style="{ '--color-bg': color.css }"
    /> -->
  </div>
</template>

<style></style>
