<script setup lang="ts">
import {getOffers} from "../api/offers.ts";
</script>

<template>
  <section class="license-wrapper">
    <h3 class="h3-title">Ліцензія</h3>
    <ul>
      <li v-for="offer in getOffers"
          :key="offer.id">
        {{offer.name}} - {{offer.licence}}
      </li>
    </ul>
  </section>
</template>

<style scoped>
  .license-wrapper{
    padding-bottom: 15px;
  }
  ul>li {
    text-align: center;
    margin-bottom: 5px;
  }
</style>