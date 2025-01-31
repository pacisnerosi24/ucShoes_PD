<template>
  <div>
   
    <h2 class="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>

import ProductCard from "../components/ProductCard.vue";

export default {
  name: "HomePage",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        { id: 1, name: "Nike Air Force 1", brand: "Nike", price: 120, image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d6f70740-0899-4d9c-8a82-57a2b0eea0fd/air-force-1-07-zapatillas-LpTbXQ.png" },
        { id: 2, name: "Adidas Yeezy 350", brand: "Adidas", price: 250, image: "https://ams3.digitaloceanspaces.com/graffica/2022/12/Adidas-Logo-1971-750x536.jpeg" },
        { id: 3, name: "Jordan 1 Retro High", brand: "Jordan", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgkEpg37Golxd2xu8m-lYlvP7ZSgaHlxKJA&s" },
        { id: 4, name: "Puma RS-X", brand: "Puma", price: 100, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/368715/01/sv01/fnd/PNA/fmt/png" },
      ],
    };
  },
};
</script>
