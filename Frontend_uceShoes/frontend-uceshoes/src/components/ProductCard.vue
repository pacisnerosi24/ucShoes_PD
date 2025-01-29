<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
    <!-- Imagen del producto -->
    <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover" />

    <!-- Información del producto -->
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="text-gray-500 text-sm">{{ product.brand }}</p>
      <p class="text-xl font-bold mt-2">${{ product.price }}</p>

      <!-- Botón de agregar al carrito -->
      <button
        class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        @click="addToCart"
      >
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object, // Recibirá la información del producto
  },
  methods: {
    addToCart() {
      alert(`Añadido al carrito: ${this.product.name}`);
    },
  },
};
</script>
