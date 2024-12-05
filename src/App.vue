<script setup lang="ts">
import DefaultHeader from "./components/header.vue";
import OffersList from "./components/offersList.vue";
import ConditionsForBorrowers from "./components/forBorrowers.vue";
import LegalInformation from "./components/legal-Information.vue";
import License from "./components/License.vue";
import Footer from "./components/footer.vue";
</script>

<template class="wrapper">
    <DefaultHeader/>
    <OffersList/>
    <ConditionsForBorrowers/>
    <legal-information/>
    <License/>
    <Footer/>
</template>

<style scoped>

</style>

