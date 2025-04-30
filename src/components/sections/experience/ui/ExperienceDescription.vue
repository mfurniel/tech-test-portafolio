<template>
  <section
    v-if="experience"
    class="bg-bg-experience col-span-3 min-h-100 rounded-tr-4xl rounded-br-4xl shadow-lg"
  >
    <div class="space-y-4 p-8">
      <h2 class="text-title-primary text-xl font-semibold md:text-2xl">
        {{ experience.role }}
      </h2>
      <p class="text-md text-gray-600 md:text-xl dark:text-gray-200">
        {{ experience.duration }}
      </p>
      <ul class="list-inside list-disc">
        <li
          v-for="(responsibility, i) in experience.responsibilities"
          :key="i"
          class="text-paragraph-primary text-lg md:text-xl"
          data-testid="responsibilities"
        >
          {{ responsibility }}
        </li>
        <li
          v-if="experience.technologies"
          class="text-techs-used text-lg font-semibold md:text-xl"
        >
          {{ techsUsedText }}:
          <span
            v-for="(technology, i) in experience.technologies"
            :key="i"
            class="text-tech-accent"
            data-testid="technologies"
          >
            {{ technology }}
            <span v-if="i < experience.technologies.length - 1"> - </span>
          </span>
        </li>
      </ul>
    </div>
  </section>
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
  name: "ExperienceDescription",
  props: {
    experience: {
      type: Object as PropType<Experience | null>,
      required: true,
    },
    techsUsedText: {
      type: String,
      required: true,
    },
  },
});
</script>