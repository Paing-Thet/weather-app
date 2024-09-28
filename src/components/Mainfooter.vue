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
  margin-top: 50px;
  background: #1f2034;
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 0.9em;
}
</style>
