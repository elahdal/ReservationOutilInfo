<template>
    <div class="categorie">
      <h2>Catégorie : {{ categorie.nom }}</h2>
      <ul>
        <li v-for="(item, index) in categorie.items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categorie: null,
        categories: [
          { id: 1, nom: 'Ordinateurs', items: ['Laptop HP', 'MacBook Pro', 'Dell XPS'] },
          { id: 2, nom: 'Tablettes', items: ['iPad', 'Samsung Galaxy Tab'] },
          { id: 3, nom: 'Téléphones', items: ['iPhone', 'Google Pixel', 'Samsung Galaxy'] },
        ],
      };
    },
    created() {
      const categorieId = parseInt(this.$route.params.id);
      this.categorie = this.categories.find(cat => cat.id === categorieId);
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques */
  </style>
  