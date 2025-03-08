<template>
  <button @click="smoothScroll" :aria-label="alt">
    <img :src="icon" :alt="alt" class="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SmoothScrollButton",
  props: {
    target: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    smoothScroll() {
      const element = document.querySelector(this.target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
});
</script>
