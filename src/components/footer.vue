<script setup lang="ts">

</script>

<template>
  <footer>
    <p class="copyright">© Copyright {{new Date().getFullYear()}}</p>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    background-color: $slogan-color;
    padding: 60px 0;
    border-top: 1px solid #e5eaef;
    color: #fff;
    .copyright {
      text-align: center;
      margin-top: 10px;
    }
  }
  
</style>