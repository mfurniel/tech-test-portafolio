<template>
  <button
    @click="toggle"
    class="dark:bg-bg-oficial fixed top-4 z-50 border border-gray-400 bg-white p-2 transition-all duration-300 ease-in-out lg:hidden dark:border-gray-700"
    :class="isOpen ? 'left-32' : 'left-4'"
  >
    <MenuIcon class="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 dark:text-white" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuIcon from "../../assets/icons/MenuIcon.vue";

export default defineComponent({
  name: "ToggleButton",
  components: {
    MenuIcon,
  },
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
