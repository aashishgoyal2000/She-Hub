<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">{{ $t("menopause") }}</h2>
    <h4>{{ $t("understandingMenopause") }}</h4>
    <p>{{ $t("understandingMenopausePara") }}</p>

    <h4>{{ $t("menopauseSymptoms") }}</h4>
    <ul>
      <li>{{ $t("changeInPeriod") }}</li>
      <ul>
        <li>{{ $t("changeInPeriod") }}</li>

        <li>{{ $t("changeInPeriodList1") }}</li>
        <li>{{ $t("changeInPeriodList2") }}</li>
        <li>{{ $t("changeInPeriodList3") }}</li>
        <li>{{ $t("changeInPeriodList4") }}</li>
        <li>{{ $t("changeInPeriodList5") }}</li>
      </ul>
      <li>{{ $t("menopauseSymptomsList2") }}</li>
      <li>{{ $t("menopauseSymptomsList3") }}</li>
      <li>{{ $t("menopauseSymptomsList4") }}</li>
      <li>{{ $t("menopauseSymptomsList5") }}</li>
      <li>{{ $t("menopauseSymptomsList6") }}</li>
    </ul>

    <h4>{{ $t("sources") }}</h4>
    <a href="https://www.nia.nih.gov/health/what-menopause" target="_blank">
      https://www.nia.nih.gov/health/what-menopause
    </a>
  </div>
</template>

<script>
export default {
  name: "Menopause",
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
