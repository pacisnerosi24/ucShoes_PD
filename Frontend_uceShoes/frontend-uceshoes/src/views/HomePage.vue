<template>
  <div>
    <h2 class="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>
    <div v-if="loading" class="text-center">Cargando productos...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { getAllProducts } from "../utils/productService";

export default {
  name: "HomePage",
  components: { ProductCard },
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const response = await getAllProducts();
      this.products = response.data;
    } catch (err) {
      this.error = "Error al cargar productos.";
    } finally {
      this.loading = false;
    }
  },
};
</script>
