<template>
  <div class="info-center-container">
    <div class="info-center-title-wrp">
      <h1 class="heading-text ibm-plex-sans">{{ $t("infoCenter") }}</h1>
      <div class="info-input-wrp">
        <input
          :placeholder="$t('searchPlaceholder')"
          type="search"
          v-model="state.search"
        />
        <i class="material-icons right">search</i>
      </div>
    </div>
    <div class="info-center-articles-wrp row">
      <p v-if="!filteredData.length" class="no-articles">
        {{ $t("noArticlesFound") }}
      </p>
      <ArticleCard :data="filteredData" />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useI18n } from 'vue-i18n' 
import articleData from "../constants/articlesData";
import ArticleCard from "@/components/informationCenter/ArticleCard.vue";

export default {
  name: "Information Center",
  components: {
    ArticleCard,
  },
  setup: () => {
    const state = reactive({
      search: "",
      data: [...articleData],
    });
    const { t } = useI18n()
    const filteredData = computed(() => {
      if (!state.search) return state.data;
      return state.data.filter((item) => {
        return t(item.name)
          .toLowerCase()
          .includes(state.search.toLowerCase());
      });
    });
    return {
      state,
      filteredData,
    };
  },
};
</script>

<style scoped>
.info-center-container {
  padding: 40px;
}
.info-center-title-wrp h1 {
  text-align: center;
}
.info-center-title-wrp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
}
.info-center-title-wrp input {
  width: 294px;
  border: 1px solid #9ca5c2;
  background-color: #fff;
  border-radius: 8px;
  font-size: 12px;
  padding: 10px 13px;
}
.info-input-wrp {
  position: relative;
}
.info-input-wrp i {
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
}
.no-articles {
  width: 100%;
  text-align: center;
}
.info-center-articles-wrp {
  max-width: 1259px;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
