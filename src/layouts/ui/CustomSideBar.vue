<template>
  <aside class="fixed z-50">
    <ToggleButton :isOpen="isSidebarOpen" @toggleAction="toggleSidebar" />

    <div
      class="fixed top-0 left-0 flex h-screen w-28 transform flex-col items-center justify-between border border-gray-200 bg-white p-4 text-black transition-transform duration-300 ease-in-out lg:translate-x-0"
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

      <img
        src="icons/moon.svg"
        alt="Modo Oscuro"
        class="invisible mb-6 h-8 w-8"
      />
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
  },
});
</script>
