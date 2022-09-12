<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">
      {{ $t("menstrualHygieneProducts") }}
    </h2>

    <h4>{{ $t("menstrualCloth") }}</h4>
    <p>{{ $t("menstrualClothPara") }}</p>

    <h4>{{ $t("reusableClothPads") }}</h4>
    <p>{{ $t("reusableClothPadsPara") }}</p>

    <h4>{{ $t("disposablePads") }}</h4>
    <p>{{ $t("disposablePadsPara") }}</p>

    <h4>{{ $t("tampons") }}</h4>
    <p>{{ $t("tamponsPara") }}</p>

    <h4>{{ $t("menstrualCups") }}</h4>
    <p>{{ $t("menstrualCupsPara") }}</p>

    <h4>{{ $t("menstrualDiscs") }}</h4>
    <p>{{ $t("menstrualDiscsPara") }}</p>
    <h4>{{ $t("sources") }}</h4>
    <a
      href="https://www.unicef.org/media/91346/file/UNICEF-Guide-menstrual-hygiene-materials-2019.pdf"
      target="_blank"
    >
      https://www.unicef.org/media/91346/file/UNICEF-Guide-menstrual-hygiene-materials-2019.pdf
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
