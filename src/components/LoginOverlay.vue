<template>
    <div class="overlay" @click="checkClose">
      <div class="formContainer" ref="formContainer" @click.stop>
        <button class="close-btn" @click="closeOverlay">X</button>
  
        <form @submit.prevent="login">
          <div>
            <label>Email:</label>
            <input v-model="email" type="email" required />
          </div>
  
          <div>
            <label>Password:</label>
            <input v-model="password" type="password" required />
          </div>
  
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { login } from '../services/authService';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          await login(this.email, this.password);
          alert("Login successful!");
          this.closeOverlay(); // Close the overlay after successful login
        } catch (error) {
          alert(error.message);
        }
      },
      // Method to close the overlay
      closeOverlay() {
        this.$emit('close');
      },
      // Method to check if the click is outside the form
      checkClose(event) {
        const formContainer = this.$refs.formContainer;
        // Ensure formContainer is defined
        if (formContainer && !formContainer.contains(event.target)) {
          this.closeOverlay();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .formContainer {
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    color: #000;
  }
  .formContainer form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 30px;
  }
  .formContainer form div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 280px;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #000;
  }
  </style>
  