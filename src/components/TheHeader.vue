<template>
  <header class="topo">
    <div class="center">
      <router-link to="/"><img src="../assets/logo.png" /></router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.center {
  width: 1020px;
  margin: 0 auto;
}
.topo {
  width: 100%;
  height: 100px;
  background-color: #172026;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.topo img {
}
</style>
