<template>
    <div class="categories">
      <CategorieCard v-for="(category, index) in categories" 
      :key="index" 
      :nom="category.nom" 
      :image="category.image" 
      :description="category.description"/>
    </div>
  </template>
  
  <script>
  import CategorieCard from './CategorieCard.vue';


  export default {
    components:{
      CategorieCard //CategorieCard est un sous-composant utilisé dans ce composant
    },
    data() {
      return {
        categories: [
        { nom: 'Livres', image: 'books.png', description: 'A partir de 5€/mois' },
        { nom: 'PC portables', image: 'laptop.png', description: 'Découvrez notre sélection de PC portables' },
        { nom: 'Périphériques', image: 'peripheriques-image-url.jpg', description: 'Moniteurs, souris, claviers et plus' },
        { nom: 'PC LDLC', image: 'pc-ldlc-image-url.jpg', description: 'PC sur mesure et assemblés' },
        { nom: 'TV', image: 'tv-image-url.jpg', description: 'Téléviseurs haute définition' },
        { nom: 'Smartphones', image: 'smartphones-image-url.jpg', description: 'Découvrez les derniers modèles' },
        { nom: 'Son', image: 'audio-image-url.jpg', description: 'Casques, enceintes et plus' },
        { nom: 'Composants', image: 'components-image-url.jpg', description: 'Tout pour assembler votre PC' }
      ]
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques */
  .categories {
    display:flex;
    flex-direction: column;
    padding: 10px;
    gap:10px,
  }
  </style>
  