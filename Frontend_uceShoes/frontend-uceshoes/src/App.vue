<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <!-- Encabezado -->
    <header class="text-gray-900 p-4 shadow-md flex justify-between items-center">
      <h1 class="text-xl font-bold">uceShoes</h1>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar productos..."
        class="p-2 rounded border text-gray-900 focus:outline-none focus:ring"
      />
    </header>

    <!-- Contenido principal -->
    <div class="flex">
      <!-- Barra lateral -->
      <aside class="w-64 text-gray-900 p-4 shadow-md">
        <h2 class="text-lg font-semibold mb-4">Filtros</h2>
        <!-- Filtro de precio -->
        <div class="mb-4">
          <h3 class="font-semibold">Rango de precios</h3>
          <input
            type="range"
            v-model="maxPrice"
            min="0"
            max="500"
            @input="filterProducts"
            class="w-full mt-2"
          />
          <p class="text-sm mt-2">Máximo: ${{ maxPrice }}</p>
        </div>
        
        <!-- Filtro de categorías -->
  <div v-for="category in categories" :key="category.name" class="mb-6">
    <h3 class="text-sm font-semibold text-gray-300 mb-2">{{ category.name }}</h3>
    <ul class="space-y-1">
      <li
        v-for="option in category.options"
        :key="option"
        class="text-sm text-gray-400 cursor-pointer hover:text-white"
        @click="selectCategory(category.name, option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
      </aside>

      <!-- Lista de productos -->
      <main class="flex-grow p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </main>
    </div>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";

export default {
  components: { ProductCard },
  data() {
    return {
      products: [], // Lista de productos original
      filteredProducts: [], // Lista filtrada para mostrar
      searchQuery: "",
      maxPrice: 500,
      selectedCategory: "",
      categories: [
        { name: "Género", options: ["Hombre", "Mujer", "Unisex"] },
        { name: "Color", options: ["Rojo", "Blanco", "Negro", "Azul"] },
        { name: "Talla", options: ["36", "38", "40", "42"] },
      ],
    };
  },
  async created() {
    // Carga de productos desde API
    const response = await fetch("http://localhost:3001/api/products");
    this.products = await response.json();
    this.filteredProducts = this.products;
  },
  methods: {
    filterProducts() {
      this.filteredProducts = this.products.filter((product) => {
        const matchesQuery = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesPrice = product.price <= this.maxPrice;
        const matchesCategory =
          this.selectedCategory === "" ||
          product.category === this.selectedCategory;
        return matchesQuery && matchesPrice && matchesCategory;
      });
    },
    selectCategory(name, option) {
      this.selectedCategory = option;
      this.filterProducts();
    },
  },
};
</script>
