<script setup lang="ts">
import {getParams, handleClick} from "../main.ts";
import {domainName, renderRDRLink} from "../api/offers.ts";

defineProps({
  offer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="offer-card">
    <img :src="offer.image" :alt="offer.name" class="offer-image" />
    <h3 class="offer-slogan">{{offer.slogan}}</h3>
    <div class="offer-info-wrapper">
      <p class="offer-period">Термін до <span class="big_font"> {{ offer.period }} </span> днів</p>
      <p class="offer-price">Сума <span v-if="offer.priceFrom !== null && offer.priceFrom !== undefined"> від
        <span class="big_font">{{ offer.priceFrom }}</span> ₴</span> до  <span class="big_font">{{ offer.priceTo }}</span> ₴</p>
      <div class="real-rate">

        <div><p>Реальна річна відсоткова ставка</p></div>
        <div class="real-rate-percent" v-if="offer.percentFrom !== null && offer.percentFrom !== undefined">
           від <span class="big_font">{{ offer.percentFrom }}</span> %
        </div>
        <div class="real-rate-percent">
          до <span class="big_font">{{ offer.percentTo }}</span> %
        </div>
      </div>
      <a :href="offer.characteristic" target="_blank" class="link">Істотні характеристики послуги
        <img src="./../img/icons/external-link-white.svg" alt="Icon External Link">
      </a>
      <a :href="offer.warning" target="_blank" class="link">Попередження про наслідки
        <img src="./../img/icons/external-link-white.svg" alt="Icon External Link">
      </a>
      <p></p>
      <a class="go-to-site" target="_blank"
         :data-href="renderRDRLink(getParams, offer, domainName)"
         rel="nofollow"
         @click="handleClick($event)">Перейти на сайт</a>
    </div>
  </div>
</template>


<style scoped>
  .offer-card{
    background-color: #fff;
    padding: 10px 0;
    border: 1px solid #e5eaef;
    margin: 40px 0;
    max-width: 280px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .offer-image {
    margin: 15px 0;
    max-width: 200px;
    max-height: 55px;
  }
  .offer-slogan {
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    min-height: 50px;
    margin: 10px 0;
    background-color: #dbb299;
    padding: 10px 11vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .offer-info-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
  .offer-period,
  .offer-price {
    font-size: 14px;
    font-weight: 700;
    white-space: normal;
    margin-bottom: 7px;
    color: #000;
    text-align: center;
    margin-left: 11px;
    margin-right: 11px;
  }
  .real-rate{
    padding: 0 25px !important;
    font-size: 13px;
    line-height: 16px;
    color: #5f5f5f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }
  .link {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    color: #5f5f5f;
    margin-bottom: 5px;
  }
  .link img {
    width: 15px;
    height: 15px;
  }
  .go-to-site {
    margin-top: 15px;
    padding: 15px;
    display: block;
    background: #2b978a;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    text-transform: uppercase;
  }
</style>
