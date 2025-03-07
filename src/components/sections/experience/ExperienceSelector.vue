<template>
  <div class="col-span-1 gap-4">
    <div
      v-for="(experience, index) in experiences"
      :key="index"
      class="mb-3 hover:bg-blue-900/20 rounded-tl-2xl rounded-bl-2xl"
      :class="{
        'bg-white shadow-md': selectedExperienceIndex === index,
      }"
    >
      <button
        @click="selectExperience(index)"
        class="p-4 h-full w-full text-left text-xl font-semibold text-blue-900 hover:text-red-400 focus:outline-none"
        :class="{
          'text-red-400': selectedExperienceIndex === index,
        }"
      >
        {{ experience.company }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export default defineComponent({
  name: "ExperienceSelector",
  props: {
    experiences: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
    selectedExperienceIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ['select-experience'],
  methods: {
    selectExperience(index: number) {
      this.$emit('select-experience', index);
    },
  },
});
</script>