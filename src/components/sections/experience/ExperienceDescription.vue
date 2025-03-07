<template>
  <div
    v-if="experience"
    class="col-span-3 min-h-100 rounded-tr-4xl rounded-br-4xl bg-white shadow-lg"
  >
    <div class="space-y-4 p-8">
      <h3 class="text-xl md:text-2xl font-semibold text-blue-900">
        {{ experience.position }}
      </h3>
      <p class="text-md md:text-xl text-gray-600">
        {{ experience.duration }}
      </p>
      <ul class="list-inside list-disc">
        <li
          v-for="(responsibility, i) in experience.responsibilities"
          :key="i"
          class="text-lg md:text-xl text-gray-700"
        >
          {{ responsibility }}
        </li>
        <li class="text-lg md:text-xl text-blue-900">Tecnologías utilizadas:
          <span
            v-for="(technology, i) in experience.technologies"
            :key="i"
            class="text-red-400"
          >
            {{ technology }}
            <span v-if="i < experience.technologies.length - 1">
              -
            </span>
          </span>
        </li>
      </ul>
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
  name: "ExperienceDescription",
  props: {
    experience: {
      type: Object as PropType<Experience | null>,
      required: true,
    },
  },
});
</script>