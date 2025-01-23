<script setup lang="ts">
import {getOffers} from "../api/offers.ts";
</script>

<template>
  <section class="license-wrapper">
    <h3 class="h3-title">Ліцензія</h3>
    <ul>
      <li v-for="offer in getOffers"
          :key="offer.id">
        <span class="offer-title">{{offer.name}}</span> - <span>{{offer.license}}</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .license-wrapper{
    padding-bottom: 15px;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
    li {
      text-align: left;
      font-weight: 500;
      margin-bottom: 0.75em;
      margin-right: 10px;
      margin-left: 10px;
      .offer-title {
        font-weight: 700;
      }
    }
  }
</style>