<template>
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="col-span-1 gap-4">
          <div
            v-for="(job, index) in jobs"
            :key="index"
            class="mb-3  hover:bg-blue-900/20 rounded-tl-2xl rounded-bl-2xl"
            :class="{
              'bg-white shadow-md ':
                selectedJobIndex === index,
            }"
          >
            <button
              @click="toggleVisibility(index)"
              class="p-4 h-full w-full text-left text-xl font-semibold text-blue-900 hover:text-red-400 focus:outline-none "
              :class="{
                'text-red-400': selectedJobIndex === index,
              }"
            >
              {{ job.company }}
            </button>
          </div>
        </div>

        <div
          v-if="selectedJobIndex !== null"
          class="col-span-3 min-h-100 rounded-tr-4xl rounded-br-4xl bg-white shadow-lg"
        >
          <div class="space-y-4 p-8">
            <h3 class="text-xl md:text-2xl font-semibold text-blue-900">
              {{ jobs[selectedJobIndex].position }}
            </h3>
            <p class="text-md md:text-xl text-gray-600">
              {{ jobs[selectedJobIndex].duration }}
            </p>
            <ul class="list-inside list-disc">
              <li
                v-for="(responsibility, i) in jobs[selectedJobIndex]
                  .responsibilities"
                :key="i"
                class="text-lg md:text-xl text-gray-700"
              >
                {{ responsibility }}
              </li>
              <li class="text-lg md:text-xl text-blue-900">Tecnologías utilizadas:
                <span
                  v-for="(tecnology, i) in jobs[selectedJobIndex].tecnologies"
                  :key="i"
                  class=" text-red-400" 
                >
                  {{ tecnology }}
                  <span v-if="i < jobs[selectedJobIndex].tecnologies.length - 1">
                    -
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Job {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  tecnologies: string[];
}

export default defineComponent({
  name: "Experience",
  data() {
    return {
      jobs: [
        {
          company: "Eskuad",
          position: "Desarrollador de Software Junior @ Eskuad",
          duration: "Abril 2024 - Junio 2024",
          responsibilities: [
            "Desarrollo de nuevas funcionalidades para la plataforma web de diseño y gestión de formularios.",
            "Colaboración dentro del marco de trabajo Scrum, participando activamente en las ceremonias y reuniones correspondientes.",
          ],
          tecnologies: ["Vue", "Tailwind CSS", "Git", "Github", "Node"],
        },
        {
          company: "AVA Montajes",
          position: "Desarrollador Mobile Practicante @ AVA Montajes",
          duration: "Enero 2023 - Marzo 2023",
          responsibilities: [
            "Aplicación móvil para la gestión de formularios y visualización de documentos en entornos sin conectividad.",
            "Implementación de sincronización de datos.",
            "Diseño de la base de datos.",
            "Desarrollo de widgets personalizados para mejorar la experiencia del usuario.",
          ],
          tecnologies: ["Flutter", "Git", "Bitbucket", "Sqflite"],
        },
      ] as Job[],
      selectedJobIndex: 0 as number,
    };
  },
  methods: {
    toggleVisibility(index: number) {
      this.selectedJobIndex = index;
    },
  },
});
</script>
