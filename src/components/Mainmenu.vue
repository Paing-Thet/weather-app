<script>
import LoginOverlay from './LoginOverlay.vue';
import SignUpOverlay from './SignUpOverlay.vue';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';

export default {
    props: ['isUserLoggedIn'],
    methods: {
        cms(){
            alert("This feature will be avaliable in next patch.");
        },
        showLogin() {
            this.isLoginVisible = true;
        },
        showSignUp() {
          this.isSignUpVisible = true;
        },
        async logOut(){
            try {
                await signOut(auth);
                this.$emit('updateLoginStatus', false);
                alert("You are successfully logged out.");
            }
            catch (error) {
                console.error("Log out failed:", error);
            }
        },
    },
    components: { LoginOverlay, SignUpOverlay },
    data() {
        return {
          isLoginVisible: false,
          isSignUpVisible: false,
        };
      },
    mounted() {
        onAuthStateChanged(auth, (user)=> {
            if (user) {
                this.$emit('updateLoginStatus', true);
            } else {
                this.$emit('updateLoginStatus', false);
            }
        });
    }
};
</script>

<template>
    <div class="menuContainer">
        <h3>Weather App</h3>

        <div v-if="!isUserLoggedIn" class="btnContainer">
            <button @click="showLogin">Log in</button>
            <button @click="showSignUp">Register</button>
        </div>

        <div v-else class="btnContainer">
            <button @click="logOut">Log Out</button>
        </div>

        <LoginOverlay v-if="isLoginVisible" @close="isLoginVisible = false" />
        <SignUpOverlay v-if="isSignUpVisible" @close="isSignUpVisible = false" />
    </div>
</template>

<style scoped>
.menuContainer {
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: #1f2034;
    max-width: 100%;
    width: -webkit-fill-available;
    padding: 0px 150px;
}
.btnContainer {
    display: flex;
    width: 300px;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 20px;
}
@media only screen and (max-width: 600px) {
    .menuContainer {
        padding: 0px 10px;
    }
    .btnContainer {
        width: auto;
    }
}
</style>