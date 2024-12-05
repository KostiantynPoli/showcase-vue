<script setup lang="ts">
import OfferCard from "./offerCard.vue";
import { offers } from '../main';
import offerCard from "./offerCard.vue";
defineOptions({
  components: {
    offerCard
  },
});

</script>

<template>
    <div class="offers">
      <offerCard
          v-for="offer in offers"
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
    align-items: center;
    grid-gap:20px;
    border-bottom: 1px solid #e5eaef;
  }
</style>