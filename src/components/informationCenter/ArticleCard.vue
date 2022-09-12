<template>
  <div
    class="article-card-wrp"
    v-for="articleData in data"
    v-bind:key="articleData.id"
  >
    <router-link :to="'/information-center/articles/' + articleData.id">
      <div class="article-img">
        <img :src="articleData.img" :alt="articleData.name" />
      </div>
      <p class="ibm-plex-sans">{{ $t(articleData.name) }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Article Card",
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.article-card-wrp {
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  background-color: #f6ffff;
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
}
.article-card-wrp:nth-child(5),
.article-card-wrp:nth-child(10) {
  margin-right: 0;
}
.article-img img {
  width: 207px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.article-card-wrp p {
  max-width: 207px;
  white-space: break-spaces;
  margin: 8px 0;
}
.article-card-wrp a {
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
}

.article-card-wrp .ibm-plex-sans {
  font-weight: 700;
}
</style>
