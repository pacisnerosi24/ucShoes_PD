<template>
  <div>
    <!--  importando componente de navegación -->
    <NavBar />

    <!-- Main content -->
    <main class="bg-gray-100 min-h-screen">
      <section class="container mx-auto py-10">
        <h1 class="text-3xl font-bold text-center">Bienvenido a UCEshoes</h1>
        <p class="text-center text-gray-600 mt-4">
          Encuentra tus zapatillas favoritas al mejor precio.
        </p>
      </section>
    </main>
  </div>
</template>

<!-- inicia -->
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<!-- Estilo General -->
<style>
body {
  font-family: "Arial", sans-serif;
}
</style>
