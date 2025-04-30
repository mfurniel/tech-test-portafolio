<template>
  <div class="relative inline-block" ref="pickerRef">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <LanguageIcon class="h-8 w-8 text-black dark:text-gray-500" />
    </button>

    <div
      v-if="isOpen"
      class="shadow-r-md dark:bg-bg-oficial absolute top-1/2 left-full z-10 ml-2 w-24 -translate-y-1/2 transform rounded-md border border-gray-200 bg-white dark:border-gray-700"
    >
      <ul class="py-1">
        <li v-for="(label, lang) in languages" :key="lang">
          <a
            @click="selectLanguage(lang)"
            class="text-paragraph-primary block cursor-pointer py-2 pl-2 hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            {{ label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { languages } from "../../i18n/ui";
import LanguageIcon from "../../assets/icons/LanguageIcon.vue";

export default defineComponent({
  name: "LanguagePicker",
  components: {
    LanguageIcon,
  },
  setup() {
    const isOpen = ref(false);
    const pickerRef = ref<HTMLElement | null>(null);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectLanguage = (lang: string) => {
      window.location.href = `/${lang}/`;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.value && !pickerRef.value.contains(event.target as Node)) {
        isOpen.value = false;
      }
    };

    const handleResize = () => {
      if (isOpen.value) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    });

    return {
      languages,
      isOpen,
      pickerRef,
      toggleDropdown,
      selectLanguage,
    };
  },
});
</script>
