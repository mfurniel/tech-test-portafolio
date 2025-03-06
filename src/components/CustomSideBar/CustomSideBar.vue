<template>
  <div>
    <button
      @click="toggleSidebar"
      class="fixed top-4 z-50 p-2 border border-gray-400 lg:hidden transition-all duration-300 ease-in-out"
      :class="isSidebarOpen ? 'left-32' : 'left-4'"
    >
      <img src="icons/menu.svg" alt="Menú" class="w-4 h-4" />
    </button>

    <aside
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
        <ul class="flex flex-col items-center gap-10">
          <SmoothScrollLink target="#home" icon="icons/home.svg" alt="Inicio" />
          <SmoothScrollLink target="#about" icon="icons/profile.svg" alt="Sobre Mí" />
          <SmoothScrollLink target="#education" icon="icons/education.svg" alt="Educación" />
          <SmoothScrollLink target="#experience" icon="icons/portfolio.svg" alt="Experiencia" />
          <SmoothScrollLink target="#projects" icon="icons/stack.svg" alt="Proyectos" />
        </ul>
      </nav>

      <img src="icons/moon.svg" alt="Modo Oscuro" class="w-8 h-8 mb-6" />
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SmoothScrollLink from './SmoothScrollLink.vue';

export default defineComponent({
  name: 'CustomSideBar',
  components: {
    SmoothScrollLink,
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
    smoothScroll(target: string): void {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
  },
  mounted(): void {
    window.addEventListener('popstate', () => {
      const hash = window.location.hash;
      if (hash) {
        this.smoothScroll(hash);
      }
    });
  },
});
</script>

<style scoped>
@media (max-width: 1023px) {
  aside {
    z-index: 40;
  }
}
</style>