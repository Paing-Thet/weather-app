<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<template>
  <footer class="main-footer">
    <p>&copy; {{ currentYear }} PaingThet. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.main-footer {
  background: #91b8ff;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 0.9em;
}
</style>
