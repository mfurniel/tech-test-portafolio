<template>
  <div class="col-span-1 gap-4">
    <div
      v-for="(experience, index) in experiences"
      :key="index"
      class="mb-1 md:mb-3 rounded-tl-2xl rounded-bl-2xl hover:bg-blue-900/20"
      :class="{
        'bg-white shadow-md': selectedExperienceIndex === index,
      }"
    >
      <button
        @click="selectExperience(index)"
        class="h-full w-full p-2 pl-4 md:p-4 text-left text-xl font-semibold text-blue-900 hover:text-red-600 focus:outline-none"
        :class="{
          'text-red-600': selectedExperienceIndex === index,
        }"
      >
        {{ experience.company }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

interface Experience {
  company: string;
  role: string;
  duration: string | null;
  responsibilities: string[];
  technologies: string[] | null;
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
  emits: ["select-experience"],
  methods: {
    selectExperience(index: number) {
      this.$emit("select-experience", index);
    },
  },
});
</script>
