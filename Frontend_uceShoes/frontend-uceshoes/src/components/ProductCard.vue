<template>
  <div class="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition duration-300">
    <img
      :src="product.image"
      :alt="product.name"
      class="h-40 w-full object-cover rounded-md"
    />
    <p v-if="product.tag" class="text-xs text-red-500 font-semibold uppercase mb-1">
      {{ product.tag }}
    </p>
    <h3 class="text-lg font-bold text-white">{{ product.name }}</h3>
    <p class="text-sm text-gray-400">{{ product.description }}</p>
    <p class="text-lg font-semibold mt-2 text-green-500">${{ product.price }}</p>
    <button class="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
      Añadir al carrito
    </button>
  </div>
</template>

  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  