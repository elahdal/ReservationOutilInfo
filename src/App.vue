<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Connexion</router-link> |
      <router-link to="/accueil">Accueil</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <!--<router-link :to="{name:'Categorie', params:{id: categorie.id }}">{{ categorie.name }}</router-link>-->>
    </nav>
    <router-view/> <!-- affiche le composant correspondant à la route actuelle-->
  </div>
</template>

<script>


/*export default {
  name: 'App',
  components: { ces composants sont déjà accessibles via le routeur avec <router-view />,
    AuthExample,
    Accueil,
    Categories,
    Categorie,
  },
};*/
export default {
  name: 'App',
}
</script>

<style>
/* Ajoute des styles personnalisés ici si nécessaire */
nav{
  padding: 10px;
  background-color: aqua;
}
nav a {
  margin: 0 0.5px;
  text-decoration: none;
}
</style>
