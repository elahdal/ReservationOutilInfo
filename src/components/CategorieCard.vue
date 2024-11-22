<template>
    <div class="category-card">
      <img :src="image" :alt="nom" class="category-image" />
      <h3 class="category-title">{{ nom }}</h3>
      <p class="category-description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryCard',
    props: {
      nom: {type: String, required: true},
      image: {type: String, required: true},
      description: {type: String, required: true}
    }
  }
  </script>
  
  <style scoped>
  .category-card {
    text-align: center;
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .category-image {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
  }
  .category-title {
    font-size: 1.2em;
    margin-top: 0.5em;
  }
  .category-description {
    color: #666;
  }
  </style>
  