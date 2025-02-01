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
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Ingresar</button>
          <p v-if="successMessage" class="text-green-500 mt-2 text-center">{{ successMessage }}</p>
          <p v-if="errorMessage" class="text-red-500 mt-2 text-center">{{ errorMessage }}</p>
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
        errorMessage: "",
        successMessage: "",
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
            localStorage.setItem("token", response.data.token);
            this.successMessage = "¡Inicio de sesión exitoso! 🎉"; 
            this.errorMessage = ""; 
          }
        } catch (error) {
          this.errorMessage = error.response?.data?.message || "Error al iniciar sesión";
          this.successMessage = ""; 
        }
      }
    }
  };
  </script>
  