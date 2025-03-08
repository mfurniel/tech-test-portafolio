<template>
  <button
    @click="toggle"
    class="fixed top-4 z-50 border border-gray-400 bg-white p-2 transition-all duration-300 ease-in-out lg:hidden"
    :class="isOpen ? 'left-32' : 'left-4'"
  >
    <img src="icons/menu.svg" alt="Menú" class="h-4 w-4" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleButton",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggleAction"],
  methods: {
    toggle() {
      this.$emit("toggleAction");
    },
  },
});
</script>
