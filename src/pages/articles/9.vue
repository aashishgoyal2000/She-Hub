<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">{{ $t("mythsTitle") }}</h2>

    <h4>{{ $t("mythsH1") }}</h4>
    <p>{{ $t("mythsPara1") }}</p>

    <h4>{{ $t("mythsH2") }}</h4>
    <p>{{ $t("mythsPara2") }}</p>

    <h4>{{ $t("mythsH3") }}</h4>
    <p>{{ $t("mythsPara3") }}</p>

    <h4>{{ $t("mythsH4") }}</h4>
    <p>{{ $t("mythsPara4") }}</p>

    <h4>{{ $t("mythsH5") }}</h4>
    <p>{{ $t("mythsPara5") }}</p>

    <h4>{{ $t("mythsH6") }}</h4>
    <p>{{ $t("mythsPara6") }}</p>
    <h4>{{ $t("sources") }}</h4>
    <a
      href="https://healthcare.utah.edu/womenshealth/patient-education/"
      target="_blank"
    >
      https://healthcare.utah.edu/womenshealth/patient-education/
    </a>
  </div>
</template>

<script>
export default {
  name: "Myths regarding menstruation and women health",
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
