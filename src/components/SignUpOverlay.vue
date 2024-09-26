<template>
    <div class="overlay" @click="checkClose">
      <div class="formContainer" ref="formContainer" @click.stop>
        <button class="close-btn" @click="closeOverlay">X</button>
  
        <form @submit.prevent="signUp">
          <label>Name:</label>
          <input v-model="name" type="text" required />
  
          <label>Email:</label>
          <input v-model="email" type="email" required />
  
          <label>Password:</label>
          <input v-model="password" type="password" required />
  
          <label>Confirm Password:</label>
          <input v-model="confirmPassword" type="password" required />
  
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { signUp } from '../services/authService';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async signUp() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        try {
          await signUp(this.name, this.email, this.password);
          alert("Sign-up successful!");
          this.closeOverlay(); // Close the overlay after successful sign-up
        } catch (error) {
          alert(error.message);
        }
      },
      closeOverlay() {
        this.$emit('close');
      },
      checkClose(event) {
        const formContainer = this.$refs.formContainer;
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
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  