<template>
  <div class="grid grid-cols-1 md:grid-cols-4">
    <ExperienceSelector
      :experiences="experiences"
      :selectedExperienceIndex="selectedExperienceIndex"
      @select-experience="toggleVisibility"
    />
    <ExperienceDescription :experience="selectedExperience" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import ExperienceSelector from "./ExperienceSelector.vue";
import ExperienceDescription from "./ExperienceDescription.vue";

interface Experience {
  company: string;
  role: string;
  duration: string | null;
  responsibilities: string[];
  technologies: string[] | null;
}

export default defineComponent({
  name: "Experience",
  components: {
    ExperienceSelector,
    ExperienceDescription,
  },
  props: {
    experiences: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
  },
  data() {
    return {
      selectedExperienceIndex: 0 as number,
    };
  },
  computed: {
    selectedExperience(): Experience | null {
      return this.experiences[this.selectedExperienceIndex] || null;
    },
  },
  methods: {
    toggleVisibility(index: number) {
      this.selectedExperienceIndex = index;
    },
  },
});
</script>
