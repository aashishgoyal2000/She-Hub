<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">{{ $t("cervicalCancer") }}</h2>
    <div class="flex-center cervical-img-wrp">
      <div class="flex-column">
        <h4>{{ $t("understandingCervicalCancer") }}</h4>
        <p>{{ $t("cervicalCancerPara") }}</p>
      </div>
      <img src="@/assets/cervical-cancer-doc.png" alt="cervical-cancer" />
    </div>
    <h4>{{ $t("cervicalCancerSymptoms") }}</h4>
    <p>{{ $t("cervicalCancerSymptomspara") }}</p>

    <h4>{{ $t("riskReducingCervicalCancer") }}</h4>
    <p>{{ $t("riskReducingCervicalCancerPara1") }}</p>
    <p>{{ $t("riskReducingCervicalCancerPara2") }}</p>
    <ul>
      <li>{{ $t("riskReducingCervicalCancerList1") }}</li>
      <li>{{ $t("riskReducingCervicalCancerList2") }}</li>
      <li>{{ $t("riskReducingCervicalCancerList3") }}</li>
    </ul>
    <p>{{ $t("riskReducingCervicalCancerPara3") }}</p>
    <p>{{ $t("riskReducingCervicalCancerPara4") }}</p>
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
  name: "Cervical Cancer",
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
  align-items: flex-start;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.cervical-img-wrp img {
  height: 250px;
}
</style>
