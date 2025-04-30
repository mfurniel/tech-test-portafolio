<template>
  <aside class="fixed z-50">
    <ToggleButton :isOpen="isSidebarOpen" @toggleAction="toggleSidebar" />

    <div
      class="bg-bg-side-custom-bar fixed top-0 left-0 flex h-screen w-28 transform flex-col items-center justify-between border border-gray-200 p-4 text-black transition-transform duration-300 ease-in-out lg:translate-x-0 dark:border-gray-700"
      :class="{ '-translate-x-full': !isSidebarOpen }"
    >
      <SmoothScrollButton
        target="#home"
        icon="logo"
        alt="Inicio"
        class="m-8 h-8 w-8 list-none"
      />

      <nav>
        <ul class="flex flex-col items-center gap-6">
          <li>
            <SmoothScrollButton target="#home" icon="home" alt="Inicio" />
          </li>
          <li>
            <SmoothScrollButton target="#about" icon="profile" alt="Sobre Mí" />
          </li>
          <li>
            <SmoothScrollButton
              target="#education"
              icon="education"
              alt="Educación"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#work_experience"
              icon="portfolio"
              alt="Experiencia"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#academic_experience"
              icon="backpack"
              alt="Actividades Académicas"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#projects"
              icon="stack"
              alt="Proyectos"
            />
          </li>
        </ul>
      </nav>
      <div class="flex flex-col items-center gap-6">
        <LanguagePicker />
        <ThemeToggleButton />
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmoothScrollButton from "../../components/shared/ui/SmoothScrollButton.vue";
import ToggleButton from "./ToggleButton.vue";
import ThemeToggleButton from "./ThemeToggleButton.vue";
import LanguagePicker from "./LanguagePicker.vue";

export default defineComponent({
  name: "CustomSideBar",
  components: {
    SmoothScrollButton,
    ToggleButton,
    ThemeToggleButton,
    LanguagePicker,
  },
  data() {
    return {
      isSidebarOpen: false as boolean,
    };
  },
  methods: {
    toggleSidebar(): void {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
});
</script>
