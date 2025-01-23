<script setup lang="ts">
import legalOfferCard from "./legalOfferCard.vue";
import offerCard from "./offerCard.vue";
import {getOffers} from "../api/offers.ts";

defineOptions({
  components: {
    offerCard
  }
});
</script>

<template>
  <section class="legal-info">
    <legalOfferCard
      v-for="offer in getOffers"
      :offer="offer"
    />
  </section>
</template>

<style scoped>
  .legal-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap:20px;
    margin-bottom: 15px;
  }
</style>