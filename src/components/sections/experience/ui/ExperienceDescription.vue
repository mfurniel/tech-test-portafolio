<template>
  <section
    v-if="experience"
    class="col-span-3 min-h-100 rounded-tr-4xl rounded-br-4xl bg-white shadow-lg"
  >
    <div class="space-y-4 p-8">
      <h2 class="text-xl font-semibold text-blue-900 md:text-2xl">
        {{ experience.role }}
      </h2>
      <p class="text-md text-gray-600 md:text-xl">
        {{ experience.duration }}
      </p>
      <ul class="list-inside list-disc">
        <li
          v-for="(responsibility, i) in experience.responsibilities"
          :key="i"
          class="text-lg text-gray-700 md:text-xl"
          data-testid="responsibilities"
        >
          {{ responsibility }}
        </li>
        <li
          v-if="experience.technologies"
          class="text-lg text-blue-900 md:text-xl"
        >
          Tecnologías utilizadas:
          <span
            v-for="(technology, i) in experience.technologies"
            :key="i"
            class="text-red-600"
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
  },
});
</script>
