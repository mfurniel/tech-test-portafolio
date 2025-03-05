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
      <a href="#home" @click.prevent="smoothScroll('#home')">
        <img src="icons/logo.svg" alt="profile" class="w-8 h-8 m-8" />
      </a>

      <nav>
        <ul class="flex flex-col items-center gap-10">
          <li>
            <a href="#home" @click.prevent="smoothScroll('#home')">
              <img src="icons/home.svg" alt="Inicio" class="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="#about" @click.prevent="smoothScroll('#about')">
              <img src="icons/profile.svg" alt="Sobre Mí" class="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="#education" @click.prevent="smoothScroll('#education')">
              <img src="icons/education.svg" alt="Educación" class="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="#projects" @click.prevent="smoothScroll('#projects')">
              <img src="icons/stack.svg" alt="Proyectos" class="w-8 h-8" />
            </a>
          </li>
        </ul>
      </nav>

      <img src="icons/moon.svg" alt="Modo Oscuro" class="w-8 h-8 mb-6" />
    </aside>
  </div>
</template>

<script>
export default {
  name: 'CustomSideBar',
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth', 
          block: 'start', 
        });
      }
    },
  },
  mounted() {
    window.addEventListener('popstate', () => {
      const hash = window.location.hash;
      if (hash) {
        this.smoothScroll(hash);
      }
    });
  },
};
</script>

<style scoped>
@media (max-width: 1023px) {
  aside {
    z-index: 40;
  }
}
</style>