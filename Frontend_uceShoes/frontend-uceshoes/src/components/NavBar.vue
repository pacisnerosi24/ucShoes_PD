<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <router-link to="/">UCEshoes</router-link>
      </div>

      <!-- Menú principal (oculto en móviles) -->
      <ul class="hidden md:flex space-x-8 text-gray-600 font-medium">
        <li><a href="#" class="hover:text-black transition-colors">Hombres</a></li>
        <li><a href="#" class="hover:text-black transition-colors">Mujeres</a></li>
        <li><a href="#" class="hover:text-black transition-colors">Niños</a></li>
        <li><a href="#" class="hover:text-black transition-colors">Nuevos lanzamientos</a></li>
      </ul>

      <!-- Search bar (oculto en móviles) -->
      <div class="relative hidden md:block w-64">
        <input
          type="text"
          placeholder="Buscar..."
          class="w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button class="absolute right-2 top-2 text-gray-400">
          <LucideSearch class="w-5 h-5" />
        </button>
      </div>

      <!-- Icons -->
      <div class="flex space-x-6 items-center">
        <!-- Ícono del carrito con contador de productos -->
        <router-link to="/cart" class="relative text-gray-600 hover:text-black transition-colors">
          <LucideShoppingCart class="w-6 h-6" />
          <span v-if="cartStore.totalItems > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {{ cartStore.totalItems }}
          </span>
        </router-link>

        <!-- Ícono de usuario -->
        <button class="text-gray-600 hover:text-black transition-colors">
          <LucideUser class="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { LucideShoppingCart, LucideUser, LucideSearch } from "lucide-vue-next";
import { useCartStore } from "@/store/cart";

export default {
  name: "NavBar",
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
};
</script>
