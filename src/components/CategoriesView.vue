<template>
    <div class="categories">
      <h1>Catégories</h1>
      <ul>
        <li v-for="(categorie, index) in categories" :key="index">
          <router-link :to="{ name: 'Categorie', params: { id: categorie.id } }">{{ categorie.nom }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { id: 1, nom: 'Ordinateurs' },
          { id: 2, nom: 'Tablettes' },
          { id: 3, nom: 'Téléphones' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques */
  </style>
  