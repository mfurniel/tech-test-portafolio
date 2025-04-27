<template>
  <div
    @click="toggleTheme"
    class="mb-6 cursor-pointer text-gray-500 transition-opacity hover:opacity-80 dark:text-yellow-400"
  >
    <component :is="isDarkMode ? 'SunIcon' : 'MoonIcon'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import SunIcon from "../../assets/icons/SunIcon.vue";
import MoonIcon from "../../assets/icons/MoonIcon.vue";

export default defineComponent({
  name: "ThemeToggleButton",
  components: {
    SunIcon,
    MoonIcon,
  },
  setup() {
    const isDarkMode = ref(false);

    const applyTheme = (theme: string) => {
      if (theme === "dark") {
        document.body.classList.add("dark");
        isDarkMode.value = true;
      } else {
        document.body.classList.remove("dark");
        isDarkMode.value = false;
      }
    };

    const toggleTheme = () => {
      const newMode = isDarkMode.value ? "light" : "dark";
      applyTheme(newMode);
      localStorage.setItem("theme", newMode);
    };

    const checkSystemPreference = (): string => {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return systemPrefersDark ? "dark" : "light";
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      const initialTheme = savedTheme || checkSystemPreference();
      applyTheme(initialTheme);

      const colorSchemeQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );
      colorSchemeQuery.addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light");
        }
      });
    });

    return {
      isDarkMode,
      toggleTheme,
    };
  },
});
</script>
