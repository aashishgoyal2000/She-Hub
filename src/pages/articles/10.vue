<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">{{ $t("pubertyGirls") }}</h2>

    <p>{{ $t("pubertyGirlsPara1") }}</p>
    <p>{{ $t("pubertyGirlsPara2") }}</p>
    <p>{{ $t("pubertyGirlsPara3") }}</p>
    <p>{{ $t("pubertyGirlsPara4") }}</p>
    <p>{{ $t("pubertyGirlsPara5") }}</p>
    <ul>
      <li>{{ $t("pubertyGirlsList1") }}</li>
      <li>{{ $t("pubertyGirlsList2") }}</li>
      <li>{{ $t("pubertyGirlsList3") }}</li>
      <li>{{ $t("pubertyGirlsList4") }}</li>
      <li>{{ $t("pubertyGirlsList5") }}</li>
      <li>{{ $t("pubertyGirlsList6") }}</li>
    </ul>
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
  name: "Puberty in Girls",
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
