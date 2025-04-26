<template>
  <aside class="fixed z-50">
    <ToggleButton :isOpen="isSidebarOpen" @toggleAction="toggleSidebar" />

    <div
      class="bg--bg-side-custom-bar fixed top-0 left-0 flex h-screen w-28 transform flex-col items-center justify-between border border-gray-200 p-4 text-black transition-transform duration-300 ease-in-out lg:translate-x-0"
      :class="{ '-translate-x-full': !isSidebarOpen }"
    >
      <SmoothScrollButton
        target="#home"
        icon="icons/logo.svg"
        alt="Inicio"
        class="m-8 h-8 w-8 list-none"
      />

      <nav>
        <ul class="flex flex-col items-center gap-6">
          <li>
            <SmoothScrollButton
              target="#home"
              icon="icons/home.svg"
              alt="Inicio"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#about"
              icon="icons/profile.svg"
              alt="Sobre Mí"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#education"
              icon="icons/education.svg"
              alt="Educación"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#work_experience"
              icon="icons/portfolio.svg"
              alt="Experiencia"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#academic_experience"
              icon="icons/backpack.svg"
              alt="Actividades Académicas"
            />
          </li>
          <li>
            <SmoothScrollButton
              target="#projects"
              icon="icons/stack.svg"
              alt="Proyectos"
            />
          </li>
        </ul>
      </nav>

      <img src="icons/moon.svg" alt="Modo Oscuro" class="mb-6 h-8 w-8" />
      <button
        id="theme-toggle"
        class="rounded-md bg-gray-800 px-4 py-2 dark:bg-white"
        @click="toggleTheme"
      >
        Toggle Theme
      </button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmoothScrollButton from "../../components/shared/ui/SmoothScrollButton.vue";
import ToggleButton from "./ToggleButton.vue";

export default defineComponent({
  name: "CustomSideBar",
  components: {
    SmoothScrollButton,
    ToggleButton,
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
    toggleTheme(): void {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    },
    mounted() {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        document.body.classList.add("dark");
      }
    },
  },
});
</script>
