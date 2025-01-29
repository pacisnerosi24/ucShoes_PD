<template>
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto flex items-center justify-between py-4 px-6">
        <!-- Logo -->
        <div class="text-2xl font-bold">
          <a href="/">UCEshoes</a>
        </div>
  
        <!-- Links -->
        <ul class="flex space-x-8 text-gray-600 font-medium">
          <li><a href="#" class="hover:text-black">Hombres</a></li>
          <li><a href="#" class="hover:text-black">Mujeres</a></li>
          <li><a href="#" class="hover:text-black">Niños</a></li>
          <li><a href="#" class="hover:text-black">Nuevos lanzamientos</a></li>
        </ul>
  
        <!-- Search bar -->
        <div class="relative w-64">
          <input
            type="text"
            placeholder="Buscar..."
            class="w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button class="absolute right-2 top-2 text-gray-400">
            🔍
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  </style>
  