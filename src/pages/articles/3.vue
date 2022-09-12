<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">{{ $t("pregnancyPostpartum") }}</h2>
    <p>{{ $t("pregnancyPostpartumPara") }}</p>

    <h4>{{ $t("vaginalSoreness") }}</h4>
    <p>{{ $t("vaginalSorenessPara1") }}</p>
    <ul>
      <li>{{ $t("vaginalSorenessList1") }}</li>
      <li>{{ $t("vaginalSorenessList2") }}</li>
      <li>{{ $t("vaginalSorenessList3") }}</li>
      <li>{{ $t("vaginalSorenessList4") }}</li>
      <li>{{ $t("vaginalSorenessList5") }}</li>
      <li>{{ $t("vaginalSorenessList6") }}</li>
    </ul>
    <p>{{ $t("vaginalSorenessPara2") }}</p>
    <h4>{{ $t("moodChanges") }}</h4>
    <p>{{ $t("moodChangesPara1") }}</p>
    <p>{{ $t("moodChangesPara2") }}</p>
    <h4>{{ $t("postPartumCheckup") }}</h4>
    <p>{{ $t("postPartumCheckupPara") }}</p>
    <h4>{{ $t("sources") }}</h4>
    <a
      href="https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/postpartum-care/"
      target="_blank"
    >
      https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/postpartum-care/
    </a>
  </div>
</template>

<script>
export default {
  name: "Pregnancy and Postpartum care",
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
