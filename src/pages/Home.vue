<template>
  <div class="home">
    <div>
      <h1 class="heading-text ibm-plex-sans">{{ $t("goodMorning") }}</h1>
      <p class="ibm-plex-sans font-20">
        {{ $t("homeText") }}
      </p>
    </div>
    <div class="row" v-for="cardData in data" :key="cardData.id">
      <InfoCard
        :bgColor="cardData.bgColor"
        :heading="cardData.heading"
        :details="cardData.details"
        :imgUrl="cardData.imgUrl"
        :imgPosition="cardData.imgPosition"
        :detailsButtonText="cardData.detailsButtonText"
        :link="cardData.link"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InfoCard from "@/components/home/InfoCard.vue";
import homeData from "../constants/homeData";

export default {
  name: "Home",
  components: {
    InfoCard,
  },
  setup: () => {
    const data = ref(homeData);
    return {
      data,
    };
  },
};
</script>

<style scoped>
.home {
  padding: 0px 40px;
}
</style>
