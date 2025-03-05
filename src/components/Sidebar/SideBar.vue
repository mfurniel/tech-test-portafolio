<template>
  <aside class="fixed top-0 left-0 w-28 h-screen  text-black border border-gray-200 p-4 flex flex-col justify-between items-center">
    <a href="/"><img src="icons/logo.svg" alt="profile" class="w-8 h-8 m-8"></a>
    <nav>
      <ul class="flex flex-col items-center gap-10">
        <li>
          <a href="/"><img src="icons/home.svg" alt="Inicio" class="w-8 h-8"></a>
        </li>
        <li>
          <a href="#about"><img src="icons/profile.svg" alt="Sobre Mí" class="w-8 h-8"></a>
        </li>
        <li>
          <a href="#education"><img src="icons/education.svg" alt="Educación" class="w-8 h-8"></a>
        </li>
        <li>
          <a href="#projects"><img src="icons/stack.svg" alt="Proyectos" class="w-8 h-8"></a>
        </li>
      </ul>
    </nav>
    <img src="icons/moon.svg" alt="Modo Oscuro" class="w-8 h-8 mb-6">
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>