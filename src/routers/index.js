import { createRouter, createWebHistory } from 'vue-router';
//Vue Router, le système de routage qui gère la navigation entre les différentes pages de l'application

// Import des pages
import AuthExample from '@/components/AuthExample.vue';
import AccueilPage from '@/components/AccueilPage.vue';
import CategoriesView from '@/components/CategoriesView.vue';


const routes = [
    {path:'/', component:AuthExample},
    {path:'/accueil', component:AccueilPage},
    {path:'/categories', component: CategoriesView},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
////{path:'/categorie/:id', component:CategorieView, name:'Categorie'},