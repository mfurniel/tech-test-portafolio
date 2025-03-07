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
import { defineComponent } from 'vue';
import ExperienceSelector from './ExperienceSelector.vue';
import ExperienceDescription from './ExperienceDescription.vue';
import { experiences } from '../../../data/experiences';

interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export default defineComponent({
  name: "Experience",
  components: {
    ExperienceSelector,
    ExperienceDescription,
  },
  data() {
    return {
      experiences,
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