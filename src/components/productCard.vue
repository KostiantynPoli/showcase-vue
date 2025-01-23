<script setup lang="ts">
  defineProps({
    product: Object
  });
</script>

<template>
  <p class="product" v-if="product?.periodTo != null && product?.time != null">
  <span class="product-name">
    {{ product?.name }}
  </span>
    <span class="period-and-sum">
      <span class="period">
        Термін до <span class="big-font">{{ product?.periodTo }}</span>
        {{ product.time === 'year' ? 'років' : product.time === 'month' ? 'міс.' : 'днів' }}
      </span>
      <span class="sum"  v-if=" product?.sumTo != null">
        сума до <span class="big-font">{{ product?.sumTo }}</span> ₴
      </span>
    </span>
  </p>

  <p class="product else" v-else>
    <span class="product-name">{{product?.name}}&nbsp;</span>
    <span class="period" v-if="product?.percentTo"> ставка до {{product.percentTo}} % </span>
    <span class="sum" v-if="product?.sumTo">
      сума до {{product?.sumTo}} ₴</span>
  </p>
</template>

<style lang="scss" scoped>
  .product{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 700;
    &.else {
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 14px;
      margin-bottom: 7px;
    }
    .product-name {
      font-size: 16px;
      overflow-wrap: break-word;
      color: #000;
      margin: 5px 0;
    }
    .period-and-sum{
      padding: 0 15px;
      margin-bottom: 7px;
      .period, .sum {
        font-size: 14px;
      }
    }
  }


</style>