<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="dark-theme-background text-white nav-custom">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          SheHub
        </q-toolbar-title>

        <q-tabs align="left">
          <q-route-tab to="/" :label="$t('home')" />
          <q-route-tab to="/information-center" :label="$t('infoCenter')" />

          <q-btn-dropdown auto-close flat :label="$t('communityConnection')">
          <q-list>
            <q-item clickable>
              <q-route-tab to="/community-support" :label="$t('discussionBoard')" />
            </q-item>

            <q-item clickable>
              <q-route-tab to="/public-chat" :label="$t('PublicChat')" />
            </q-item>

            <q-item clickable>
              <q-route-tab to="/meet-up" :label="$t('MeetUp')" />
            </q-item>
          </q-list>
        </q-btn-dropdown>
          <q-route-tab to="/menstrual-cycle" :label="$t('mensturalCycle')" />
          <q-route-tab to="/book-appointment" :label="$t('bookAppointment')" />
          <q-route-tab to="/rewards" :label="$t('rewards')" />
          <q-route-tab to="/settings"
            ><a class="waves-effect waves-light btn settings-icon"
              ><i class="material-icons right">settings</i></a
            ></q-route-tab
          >
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <q-btn class="help-btn" @click="handleHelpClick">{{ $t("emergency") }}</q-btn>
      <q-dialog v-model="isPopupOpen">
        <div class="sos-modal-body">
          <i class="material-icons right" @click="isPopupOpen = false">close</i>
          <div class="sos-body-wrp">
            <q-circular-progress
              show-value
              class="q-ma-md"
              track-color="grey-3"
              color="teal"
              thickness="0.15"
              size="172px"
              :min="0"
              :max="10"
              :value="timer"
            />
            <p class="sos-text">{{ $t("clickedByMistake") }}</p>
          </div>
          <div class="btn-container">
            <q-btn class="continue-btn" @click="isPopupOpen = false">{{
              $t("continue")
            }}</q-btn>
            <q-btn class="cancel-btn" @click="isPopupOpen = false">{{
              $t("cancel")
            }}</q-btn>
          </div>
        </div>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LayoutDefault",

  components: {},

  setup() {
    const isPopupOpen = ref(false);
    const timer = ref(10);
    let interval = setInterval(() => {
      if (timer.value === 0) {
        clearInterval(interval);
        isPopupOpen.value = false;
      } else {
        timer.value -= 1;
      }
    }, 1000);

    const handleHelpClick = () => {
      isPopupOpen.value = true;
      timer.value = 10;
      clearInterval(interval);
      interval = setInterval(() => {
        if (timer.value === 0) {
          clearInterval(interval);
          isPopupOpen.value = false;
        } else {
          timer.value -= 1;
        }
      }, 1000);
    };

    return {
      // leftDrawerOpen: ref(false),
      // username: "Ishika",
      isPopupOpen,
      timer,
      handleHelpClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.no-margin {
  margin: 0 !important;
}

.dark-theme-background {
  background: #323550;
}

.nav-custom {
  padding: 0 28px;
}

.settings-icon {
  font-size: 24px;
  display: flex;
  align-items: center;
}
.help-btn {
  position: fixed;
  bottom: 0;
  right: 45px;
  background-color: #f95f5f;
  color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 18px;
  padding: 6px 32px;
}
.sos-modal-body {
  background-color: #fff;
  padding: 33px 24px;
  display: flex;
  flex-direction: column;
}
.sos-modal-body i {
  font-size: 20px;
  cursor: pointer;
  color: #414040;
  align-self: flex-end;
}
.continue-btn {
  background-color: #fff;
  color: #323550;
  border: 1px solid #079090;
  margin-right: 20px;
}
.cancel-btn {
  background-color: #079090;
  color: #fff;
}
.sos-text {
  font-size: 20px;
  line-height: 30px;
  margin: 18px 40px 40px 40px;
  max-width: 294px;
  text-align: center;
  font-weight: 500;
}
.sos-body-wrp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
</style>
