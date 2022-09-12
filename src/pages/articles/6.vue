<template>
  <div class="article-page-wrp">
    <h2 class="heading-text ibm-plex-sans">
      {{ $t("marketPlace") }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Market place",
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
