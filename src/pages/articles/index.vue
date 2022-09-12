<template>
  <div class="articles-page-wrp">
    <component :is="currentArticle"></component>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { defineAsyncComponent } from "vue";

export default {
  name: "Article Pages",
  setup: () => {
    const route = useRoute();
    const currentArticle = defineAsyncComponent(() =>
      import(`../../pages/articles/${route.params.id}.vue`)
    );
    return {
      currentArticle,
    };
  },
};
</script>
