<template>
  <button @click="smoothScroll" :aria-label="alt">
    <img :src="icon" :alt="alt" class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SmoothScrollButton',
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
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
  },
});
</script>