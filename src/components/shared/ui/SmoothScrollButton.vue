<template>
  <button @click="smoothScroll" :aria-label="alt">
    <component
      :is="iconComponent"
      class="text-icon-custom-bar h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoIcon from "../../../assets/icons/LogoIcon.vue";
import HomeIcon from "../../../assets/icons/HomeIcon.vue";
import ProfileIcon from "../../../assets/icons/ProfileIcon.vue";
import EducationIcon from "../../../assets/icons/EducationIcon.vue";
import PortfolioIcon from "../../../assets/icons/PortfolioIcon.vue";
import BackpackIcon from "../../../assets/icons/BackpackIcon.vue";
import StackIcon from "../../../assets/icons/StackIcon.vue";
import ScrollArrowToDownIcon from "../../../assets/icons/ScrollarrowtodownIcon.vue";

export default defineComponent({
  name: "SmoothScrollButton",
  components: {
    LogoIcon,
    HomeIcon,
    ProfileIcon,
    EducationIcon,
    PortfolioIcon,
    BackpackIcon,
    StackIcon,
    ScrollArrowToDownIcon,
  },
  props: {
    target: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconComponent() {
      switch (this.icon) {
        case "logo":
          return LogoIcon;
        case "home":
          return HomeIcon;
        case "profile":
          return ProfileIcon;
        case "education":
          return EducationIcon;
        case "portfolio":
          return PortfolioIcon;
        case "backpack":
          return BackpackIcon;
        case "stack":
          return StackIcon;
        case "scrollarrowtodown":
          return ScrollArrowToDownIcon;
        default:
          return null;
      }
    },
  },
  methods: {
    smoothScroll() {
      const element = document.querySelector(this.target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
});
</script>
