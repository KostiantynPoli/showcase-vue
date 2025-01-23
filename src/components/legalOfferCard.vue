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
  <a :data-href="renderRDRLink(getParams, offer, domainName)"
     rel="nofollow"
     class="legal-info"
     target="_blank"
     @click="handleClick($event)"
  >
    <ul class="list-info">
      <li class="offer title">{{offer.name}}</li>
      <li class="info">Адреса: {{offer.address}}</li>
      <li class="info" v-if="offer.companyName">Юридична назва компанії: {{offer.companyName}}</li>
      <li class="info" v-if="offer.directorsName">
        ПІБ Директора: {{offer.directorsName}}
      </li>
      <li class="info" v-if="offer.workSchedule">
        Графік роботи: <span class="big-font">{{offer.workSchedule}}</span>
      </li>
      <li class="info" v-if="offer.supportPhones !== null && offer.supportPhones !== undefined">
        Номер гарячої лінії: {{offer.supportPhones?.join(', ')}}</li>
      <li class="info">E-mail служби підтримки: {{offer.supportEmail}}</li>
      <li class="info">Ліцензія: {{offer.license}}</li>
      <li class="info" v-if="offer.certificate !== null && offer.certificate !== undefined">
        Свідоцтво: {{offer.certificate}}</li>
      <li class="info" v-if="offer.ageTo">Вік
        <span v-if="offer.ageFrom">
          від <span class="big-font">{{offer.ageFrom}}</span>
        </span>
          <span> до <span class="big-font">{{offer.ageTo}}</span>
          </span> років
      </li>
      <li class="info">APR (Реальна річна процентна ставка):<br/>
        <span v-if="offer.percentFrom !== null && offer.percentFrom !== undefined">від
          <span class="big-font">{{ offer.percentFrom }}</span> %</span>
         до <span class="big-font">{{ offer.percentTo }}</span> %</li>
      <li class="info">Термін: <span v-if="offer.periodFrom !== null && offer.periodFrom !== undefined">від
        <span class="big-font">{{offer.periodFrom}}</span></span>
        до <span class="big-font"> {{ offer.periodTo }} </span> днів </li>
      <li class="info" v-if="offer.ancillaryServices">
        <span class="ancillary-title"> Супровідні послуги:</span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.firstLoanPromo !== null && offer.ancillaryServices.firstLoanPromo !== undefined">
          Ставка на перший кредит (за умов промокоду) <br><span class="big-font"> {{offer.ancillaryServices.firstLoanPromo}}</span> %.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.firstPaymentRate">
          Ставка (на перший платіж) {{offer.ancillaryServices.firstPaymentRate}} %.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.discountPercent">
          <span class="big-font">{{offer.ancillaryServices.discountPercent}}</span> %<span class="sup">*</span> знижка діє на перший платіж у разі застосування промокоду.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.firstPeriodRate">
          Ставка на перший період {{offer.ancillaryServices.firstPeriodRate}} %.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.secondLoanPercent">
          Процентна ставка на повторний кредит {{offer.ancillaryServices.secondLoanPercent}}<br>
          (в залежності від програми лояльності).
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.basicPercent">
          Базова процентна ставка – {{offer.ancillaryServices.basicPercent}} % від тіла позики.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.commission">
          Комісія за видачу утримується з Суми позики, виходячи з розрахунку:
          {{offer.ancillaryServices.commission}}.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.dailyPercentages">
          Денна ставка {{offer.ancillaryServices.dailyPercentages}} %.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.oneTimeCommission">
          Разова комісія {{offer.ancillaryServices.oneTimeCommission}} %.
        </span>
        <span class="ancillary-item" v-if="offer.ancillaryServices.standardRate">
            Стандартна ставка {{offer.ancillaryServices.standardRate}} %.
        </span>
      </li>
    </ul>
            <!--

            <li class="info" v-if="offer.directorsName !== null && offer.directorsName !== undefined">
                    ПІБ Директора: {{offer.directorsName}}
                  </li>
            <li class="info" v-if="offer.companyName !== null && offer.companyName !== undefined">
                    Юридична назва компанії: {{offer.companyName}}</li>
            <li class="info" v-if="offer.workSchedule !== null && offer.workSchedule !== undefined">
                    Графік роботи: {{offer.workSchedule}}</li>
             <p class="offer-period"
                     v-if="offer.firstLoanPercent !== null && offer.firstLoanPercent !== undefined">
                    Додаткова комісія {{ offer.firstLoanPercent }}% від суми кредиту
                  </p>

                  <p class="offer-period"
                     v-if="offer.secondLoanPercent !== null && offer.secondLoanPercent !== undefined">
                    Процентна ставка на повторний кредит {{offer.secondLoanPercent}}<br>
                    (в залежності від програми лояльності)
                  </p>
                  <p v-if="offer.rateFrom!== null && offer.rateFrom !== undefined" class="offer-price">
                    Ставка від <span class="big_font"> {{offer.rateFrom}} </span> %
                    до  <span class="big_font">{{ offer.rateTo }}</span> %</p>-->
<!--    <div class="real-rate-percent" v-if="offer.additionalCommission !== null && offer.additionalCommission !== undefined">-->
<!--      <p>Додаткова комісія {{offer.additionalCommission}} % від суми кредиту</p>-->
<!--    </div>-->
<!--
  <div class="real-rate-percent" v-if="offer.discountPercent !== null && offer.discountPercent !== undefined">
          <p>{{offer.discountPercent}} %<span class="sup">*</span> знижка діє на перший платіж у разі застосування промокоду</p>
        </div>
        <div class="real-rate-percent" v-if="offer.firstLoanPromo !== null && offer.firstLoanPromo !== undefined">
          <p> Ставка на перший кредит (за умов промокоду) {{offer.firstLoanPromo}} %</p>
        </div>

-->
  </a>
</template>

<style lang="scss" scoped>
  .legal-info{
    display: block;
    text-align: center;
    margin:0 7px;
    max-width: 450px;
    text-decoration: none;
    box-shadow: 0 0 17px 12px rgba(34, 60, 80, 0.26);

    .title{
      font-weight: 600;
      color: $offer-title;
      font-size: 20px;
      padding: 20px 0;
      background-color: #fff;
    }
    .list-info{
      display: flex;
      flex-direction: column;
      .info{
        padding: 10px 25px;
        text-align: center;
        color: #333;
        flex-grow: 1;
        &:nth-child(odd) {
          background-color: #fff;
        }
        &:nth-child(even) {
          background-color: #f5f7fa;
        }
        .ancillary-title {
          display: block;
          margin-bottom: 5px;
        }
        .ancillary-item {
          display: block;
          width: 100%;
          margin-bottom: 5px;
        }
    }
  }
    &:nth-child(odd){
      background-color: #fff;
    }
    &:nth-child(even){
      background-color: #f5f7fa;
    }
  }

</style>