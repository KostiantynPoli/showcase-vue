<script setup lang="ts">
import {getParams, handleClick} from "../main.ts";
import {domainName, renderRDRLink} from "../api/offers.ts";
import ProductCard from "./productCard.vue";

defineProps({
  offer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="offer-card">
    <div class="logo-wrapper">
      <img :src="offer.image" :alt="offer.name" class="offer-image" />
    </div>
    <div class="offer-slogan">
      <p>{{offer.slogan}}</p></div>
    <div class="offer-info-wrapper">
      <p class="offer-period" v-if="offer.period" >
        Термін: {{ offer.period }} днів
      </p>
      <p class="offer-period" v-else>
        Термін <span v-if="offer.periodFrom !== null && offer.periodFrom !== undefined">від
        <span class="big-font">{{offer.periodFrom}}</span></span>
        до <span class="big-font"> {{ offer.periodTo }} </span> днів<br>
        <span class="early-payment"  v-if="offer.earlyPayment !== null && offer.earlyPayment !== undefined">
          {{offer.earlyPayment}}</span>
      </p>
      <p class="offer-price" v-if="offer.sumTo">
        Сума <span v-if="offer.sumFrom"> від
        <span class="big-font">{{ offer.sumFrom }}</span> ₴</span> до  <span class="big-font">{{ offer.sumTo }}</span>
        ₴</p>
      <div v-if="offer.products?.length">
        <productCard
            v-for="product in offer.products"
            :key="product.name"
            :product="product"
        />
      </div>
    </div>
<!--    TODO переделать под продукты и блок со ставками. Вынести большую часть в legal-info -->
    <div class="main-rate-info">
      <div class="real-rate">
        <p>Реальна річна процентна ставка</p>
        <div class="real-rate-percent" v-if="offer.percent !== null && offer.percent !== undefined">
          <p><span class="big-font">{{ offer.percent }}</span> %</p>
        </div>
        <div class="real-rate-percent" v-else-if="offer.percentTo !== null && offer.percentTo !== undefined">
           <p v-if="offer.percentFrom !== null && offer.percentFrom !== undefined">
             від <span class="big-font">{{ offer.percentFrom }}</span> %</p>
          <p>до <span class="big-font">{{ offer.percentTo }}</span> %</p>
        </div>
      </div>
      <a :href="offer.characteristic" target="_blank" class="link">Істотні характеристики послуги
          <img src="./../img/icons/external-link-white.svg" alt="Icon External Link">
      </a>
      <a v-if="offer.characteristic_1 !== null && offer.characteristic_1 !== undefined"
         :href="offer.characteristic_1"
         target="_blank" class="link">Істотні характеристики послуги
        <img src="./../img/icons/external-link-white.svg" alt="Icon External Link">
      </a>
      <a :href="offer.warning" target="_blank" class="link">
        Попередження про наслідки<img src="./../img/icons/external-link-white.svg" alt="Icon External Link">
      </a>
      <a v-if="offer.licenseLink !== null && offer.licenseLink !== undefined"
           :href="offer.licenseLink" target="_blank" class="link">Ліцензія
        <img src="./../img/icons/external-link-white.svg" alt="Icon External Link">
      </a>
    </div>
    <div class="button-wrapper">
      <a class="go-to-site" target="_blank"
         :data-href="renderRDRLink(getParams, offer, domainName)"
         rel="nofollow"
         @click="handleClick($event)">Перейти на сайт</a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .offer-card{
    background-color: #fff;
    padding: 10px 0;
    border: 1px solid #e5eaef;
    margin: 40px 0;
    max-width: 280px;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    .logo-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
        .offer-image {
            margin: 15px 0;
            width: 150px;
            height: 55px;
      }
    }
    .offer-slogan {
      height: 50px;
      margin: 10px 0;
      background-color: $slogan-color;
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        flex: 1;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        text-align: center;
      }
    }
    .offer-info-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      .offer-period,
      .offer-price {
        font-size: 15px;
        font-weight: 700;
        white-space: normal;
        color: #000;
        text-align: center;
        margin: 10px 11px 10px;
        width: 100%;
        .early-payment{
          font-size: 12px !important;
          font-weight: 700;
          white-space: nowrap;
          color: #000;
        }
      }
    }
  }




  .real-rate{
    padding: 0 25px !important;
    font-size: 14px;
    line-height: 16px;
    color: #5f5f5f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    .real-rate-percent{
      margin-top: 5px;
      text-align: center;
    }
  }
  .link {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 13px;
    line-height: 16px;
    color: #5f5f5f;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
    text-decoration: underline;
    img {
      margin-left: 3px;
      width: 15px;
      height: 15px;
    }
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin:15px auto;
    .go-to-site {
      margin-top: 15px;
      padding: 15px;
      background-color: $button_color;
      display: block;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      text-transform: uppercase;
      border: 2px solid transparent;

      &:hover {
        background-color: transparent;
        color: $button_color;
        box-shadow: none;
        border: 2px solid $button_color;
      }
    }
  }
</style>
