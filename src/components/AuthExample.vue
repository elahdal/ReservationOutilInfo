  <!-- src/components/AuthExample.vue -->
  <template>
  <div id="app">
    <h1>Formulaire d'Inscription</h1>
    
    <!-- Formulaire d'inscription -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required />
        <p v-if="errors.username" class="error">{{ errors.username }}</p>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div>
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <div>
        <input type="submit" value="S'inscrire" />
      </div>
    </form>

    <!-- Message de succès -->
    <div v-if="isSubmitted" class="success-message">
      <p>Inscription réussie ! Bienvenue, {{ username }}.</p>
    </div>
  </div>
  </template>

  <script>
  export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errors: {},
      isSubmitted: false,
    };
  },
  methods: {
    validateForm() {
      this.errors = {}; // Reset des erreurs à chaque validation

      // Validation des champs
      if (!this.username) {
        this.errors.username = 'Le nom d utilisateur est requis.';
      }

      if (!this.email) {
        this.errors.email = 'L email est requis.';
      } else if (!this.isValidEmail(this.email)) {
        this.errors.email = 'L email n est pas valide.';
      }

      if (!this.password) {
        this.errors.password = 'Le mot de passe est requis.';
      } else if (this.password.length < 6) {
        this.errors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
      }

      // Retourner true si aucune erreur n'est présente
      return Object.keys(this.errors).length === 0;
    },

    handleSubmit() {
      // Si le formulaire est valide
      if (this.validateForm()) {
        this.isSubmitted = true; // Afficher le message de succès
        // Réinitialiser le formulaire
        this.username = '';
        this.email = '';
        this.password = '';
      }
    },

    isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    },
  },
  };
  </script>

  <style scoped>
  /* Styles du formulaire */
  form {
  max-width: 400px;
  margin: 0 auto;
  padding: 2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  }

  label, input {
  display: block;
  margin: 10px 0;
  }

  input[type="submit"] {
  margin-top: 20px;
  }

  .error {
  color: red;
  font-size: 0.9em;
  }

  .success-message {
  color: green;
  font-weight: bold;
  margin-top: 20px;
  }
  </style>
