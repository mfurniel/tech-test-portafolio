<template>
  <aside class="fixed z-50">
    <ToggleButton :isOpen="isSidebarOpen" @toggleAction="toggleSidebar" />

    <div
      class="fixed top-0 left-0 w-28 h-screen text-black border border-gray-200 p-4 flex flex-col justify-between items-center bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0"
      :class="{ '-translate-x-full': !isSidebarOpen }"
    >
      <SmoothScrollLink
        target="#home"
        icon="icons/logo.svg"
        alt="Inicio"
        class="w-8 h-8 m-8 list-none"
      />

      <nav>
        <ul class="flex flex-col items-center gap-6">
          <li><SmoothScrollLink target="#home" icon="icons/home.svg" alt="Inicio" /></li>
          <li><SmoothScrollLink target="#about" icon="icons/profile.svg" alt="Sobre Mí" /></li>
          <li><SmoothScrollLink target="#education" icon="icons/education.svg" alt="Educación" /></li>
          <li><SmoothScrollLink target="#experience" icon="icons/portfolio.svg" alt="Experiencia" /></li>
          <li><SmoothScrollLink target="#activities" icon="icons/backpack.svg" alt="Actividades Académicas" /></li>
          <li><SmoothScrollLink target="#projects" icon="icons/stack.svg" alt="Proyectos" /></li>
        </ul>
      </nav>

      <img src="icons/moon.svg" alt="Modo Oscuro" class="w-8 h-8 mb-6 invisible" />
      
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SmoothScrollLink from './SmoothScrollButton.vue';
import ToggleButton from './ToggleButton.vue';

export default defineComponent({
  name: 'CustomSideBar',
  components: {
    SmoothScrollLink,
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
