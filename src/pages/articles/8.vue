<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">{{ $t("pcos") }}</h2>
    <div class="flex-center">
      <div class="flex-column">
        <p>{{ $t("pcosPara1") }}</p>
        <p>{{ $t("pcosPara2") }}</p>
      </div>
      <img src="@/assets/pcos-doc.png" alt="pcos" />
    </div>
    <h4>{{ $t("symptoms") }}</h4>
    <p>{{ $t("pcosSymptomsPara1") }}</p>

    <ul>
      <li>{{ $t("pcosSymptomsList1") }}</li>
      <li>{{ $t("pcosSymptomsList2") }}</li>
      <li>{{ $t("pcosSymptomsList3") }}</li>
    </ul>

    <h4>{{ $t("whenToSeeADoctor") }}</h4>
    <p>{{ $t("pcosDoctorPara") }}</p>

    <h4>{{ $t("causes") }}</h4>
    <ul>
      <li>{{ $t("pcosCausesList1") }}</li>
      <li>{{ $t("pcosCausesList2") }}</li>
      <li>{{ $t("pcosCausesList3") }}</li>
    </ul>

    <h4>{{ $t("sources") }}</h4>
    <a
      href="https://www.mayoclinic.org/diseases-conditions/pcos/ "
      target="_blank"
    >
      https://www.mayoclinic.org/diseases-conditions/pcos/
    </a>
  </div>
</template>

<script>
export default {
  name: "Polycystic ovary syndrome (PCOS)",
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
.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
