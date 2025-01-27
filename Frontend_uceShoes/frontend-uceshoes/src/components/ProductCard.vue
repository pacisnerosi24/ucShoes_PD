<template>
    <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img :src="product.image" :alt="product.name" class="h-40 w-full object-cover rounded-md" />
      <h3 class="text-lg font-bold mt-2">{{ product.name }}</h3>
      <p class="text-sm text-gray-500">{{ product.description }}</p>
      <p class="text-lg font-semibold mt-2">${{ product.price }}</p>
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
  