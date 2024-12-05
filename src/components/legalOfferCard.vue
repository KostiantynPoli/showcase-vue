<script setup lang="ts">
  import {defineProps} from "vue";
  import {domainName, getParams, handleClick, renderRDRLink} from "../main.ts";

  defineProps({
    offer: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <a :data-href="renderRDRLink(getParams, offer, domainName)"
     rel="nofollow"
     class="legal-info"
     target="_blank"
     @click="handleClick($event)"
  >
    <ul>
      <li class="offer title">{{offer.name}}</li>
      <li class="info">Адреса: {{offer.address}}</li>
      <li class="info">Номер гарячої лінії: {{offer.supportPhone}}</li>
      <li class="info">E-mail служби підтримки: {{offer.supportEmail}}</li>
      <li class="info">Номер ліцензії: {{offer.certificate}}</li>
      <li class="info">APR (Реальна річна процентна ставка): від <span class="big_font">{{ offer.percentFrom }}</span> %
        до <span class="big_font">{{ offer.percentTo }}</span> %</li>
      <li class="info">Термін: <span class="big_font"> {{ offer.period }} </span> днів</li>
    </ul>
  </a>
</template>

<style scoped>
  .legal-info{
    display: block;
    text-align: center;
    max-width: 450px;
    text-decoration: none;
    box-shadow: 0 0 17px 12px rgba(34, 60, 80, 0.26);
  }
  .title{
    font-weight: 600;
    color: #485b7d;
    font-size: 16px;
    padding: 20px 0;
    background-color: #fff;
  }
  .info{
    padding: 10px 25px;
    text-align: center;
    color: #333;
  }
  .info:nth-child(odd){
    background-color: #fff;
  }
  .info:nth-child(even){
    background-color: #f5f7fa;
  }
</style>