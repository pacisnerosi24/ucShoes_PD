<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Contraseña</label>
          <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div class="flex justify-between space-x-4 mt-4">
          <button type="submit" class="w-1/2 bg-blue-500 text-white py-2 rounded-lg">Ingresar</button>
          <router-link to="/register" class="w-1/2 bg-green-500 text-white py-2 rounded-lg text-center">
            Registrarse
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3002/protected/login", {
          email: this.email,
          password: this.password
        });

        if (response.data.token) {
          console.log("Token recibido:", response.data.token); //Verifica que el backend envía el token
          localStorage.setItem("token", response.data.token);
          console.log("Token guardado en LocalStorage:", localStorage.getItem("token")); //Verifica que se almacena correctamente
          window.location.href = "/"; //Redirige a HomePage.vue
        } else {
          console.error("No se recibió token del servidor.");
          this.errorMessage = "Error: No se pudo obtener el token.";
        }
      } catch (error) {
        console.error("Error en la solicitud de login:", error);
        this.errorMessage = error.response?.data?.message || "Error al iniciar sesión.";
      }
    }
  }
};
</script>
