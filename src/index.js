import { defineInterface } from "@directus/extensions-sdk";
import DisplayComponent from "./display.vue";

export default defineInterface({
  id: "directus-extension-display-colors",
  name: "Display Color Palette",
  icon: "palette",
  description: "Displays colors dots from array palette",
  component: DisplayComponent,
  options: null,
  types: ["json"],
});
