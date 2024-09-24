<script>
export default {
    methods: {
        cms(){
            alert("This feature will be avaliable in next patch.")
        }
    }
};
</script>

<template>
    <div class="menuContainer">
        <h3>Weather App with vue + vite</h3>
        <button @click="cms">Log in</button>
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
    background: #91b8ff;
    max-width: 100%;
    width: -webkit-fill-available;
    padding: 0px 150px;
}
@media only screen and (max-width: 600px) {
    .menuContainer {
        padding: 0px 10px;
    }
}
</style>