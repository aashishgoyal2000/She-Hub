<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">{{ $t("breastCancer") }}</h2>
    <h4>{{ $t("understandingBreastCancer") }}</h4>
    <p>{{ $t("breastCancerPara1") }}</p>
    <p>{{ $t("breastCancerPara2") }}</p>
    <h4>{{ $t("symptoms") }}</h4>
    <div class="flex-center">
      <ul>
        <li>{{ $t("breastCancerSymptoms1") }}</li>
        <li>{{ $t("breastCancerSymptoms2") }}</li>
        <li>{{ $t("breastCancerSymptoms3") }}</li>
        <li>{{ $t("breastCancerSymptoms4") }}</li>
        <li>{{ $t("breastCancerSymptoms5") }}</li>
        <li>{{ $t("breastCancerSymptoms6") }}</li>
      </ul>
      <img src="@/assets/breast-cancer-doc.jpg" alt="breast-cancer" />
    </div>
    <h4>{{ $t("causes") }}</h4>
    <p>{{ $t("breastCancerCausesPara1") }}</p>
    <p>{{ $t("breastCancerCausesPara3") }}</p>
    <p>{{ $t("breastCancerCausesPara3") }}</p>
    <h4>{{ $t("whenToSeeADoctor") }}</h4>
    <p>{{ $t("whenToSeeADoctorPara") }}</p>
    <h4>{{ $t("sources") }}</h4>
    <a
      href="https://www.mayoclinic.org/diseases-conditions/breast-cancer/symptoms-causes/syc-20352470"
      target="_blank"
    >
      https://www.mayoclinic.org/diseases-conditions/breast-cancer/symptoms-causes/syc-20352470
    </a>
    <a
      href="https://www.cdc.gov/cancer/breast/basic_info/what-is-breast-cancer.htm"
      target="_blank"
    >
      https://www.cdc.gov/cancer/breast/basic_info/what-is-breast-cancer.htm
    </a>
  </div>
</template>

<script>
export default {
  name: "Breast Cancer",
};
</script>

<style scoped>
.article-page-wrp {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

.article-page-wrp h4 {
  margin: 20px 0;
}
.article-page-wrp ul {
  margin: 0;
}
.article-page-wrp ul li {
  margin-bottom: 12px;
}
.flex-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
