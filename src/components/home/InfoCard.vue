<template>
  <div :class="bgColor + '-pastel-background home-card row ibm-plex-sans'">
    <img
      :src="imgUrl"
      :class="
        'home-page-card-graphics col ' +
        (imgPosition && imgPosition === 'right' ? 'img-right' : '')
      "
    />
    <div
      :class="
        'card-content ' +
        (imgPosition && imgPosition === 'right' ? 'order-first' : '')
      "
    >
      <h2 class="home-card-heading">{{ $t(heading) }}</h2>
      <p class="home-card-detail">
        {{ $t(details) }}
      </p>
      <router-link v-if="link" :to="link">
        <q-btn class="ibm-plex-sans white-text-color dark-theme-background">
          {{ $t(detailsButtonText) }}
        </q-btn>
      </router-link>
      <q-btn
        class="ibm-plex-sans white-text-color dark-theme-background"
        v-else
      >
        {{ $t(detailsButtonText) }}
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    bgColor: String,
    imgPosition: {
      type: String,
      default: "left",
    },
    heading: String,
    details: String,
    detailsButtonText: String,
    link: String,
  },
};
</script>

<style scoped>
.home-page-card-graphics {
  position: absolute;
  top: -30%;
  height: 200px;
  left: 60px;
  /* width: 240px; */
}
.img-right {
  left: unset;
  right: 60px;
}
.home-card {
  position: relative;
  padding: 20px;
  border-radius: 20px;
  margin: 40px 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
}

.home-card:last-child {
  margin: 40px 0 80px 0;
}

.home-card img {
  flex-shrink: 0;
}
.home-card a {
  text-decoration: none;
}
.home-card-heading {
  font-weight: 500;
  font-size: 40px;
  line-height: 22px;
  letter-spacing: 0.0125em;
  margin: 0 0 11px 0;
}
.card-content {
  text-align: center;
}
.home-card-detail {
  font-weight: 500;
  font-size: 20px;
  max-width: 600px;
  white-space: break-spaces;
}
</style>
