<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  // data() {
  //   let colors;
  //   if (this.value != null && this.value != undefined) {
  //     colors = JSON.parse(this.value);
  //   } else {
  //     colors = [];
  //   }
  //   return colors;
  // },
};
</script>

<template>
  <div class="palette">
    <!-- Value {{ value[0].css }} -->
    <div
      v-for="color in value"
      class="color"
      :style="{ '--color-bg': color.css }"
    />
  </div>
</template>

<style scoped>
.palette {
  container-type: size;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.color {
  border-radius: 100%;
  overflow: hidden;
  aspect-ratio: 1;
  width: 100cqh;
  background-color: var(--color-bg);
  display: flex;
}
</style>
