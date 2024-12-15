<script setup lang="ts">
import offerCard from "./offerCard.vue";
import {getOffers} from "../api/offers.ts";


defineOptions({
  components: {
    offerCard
  },
});

</script>

<template>
    <div class="offers">
      <offerCard
          v-for="offer in getOffers"
          :key="offer.id"
          :offer="offer"
      />
    </div>
</template>

<style scoped>
  .offers{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap:20px;
    border-bottom: 1px solid #e5eaef;
  }
</style>