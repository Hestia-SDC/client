<template>
  <div>
    <the-header></the-header>
    <router-view />
    <web-chat></web-chat>
    <search-box></search-box>
    <SosButton class="sos" @openPopup="togglePopup($event)" />

    <InfoPopup
      v-if="popupStatus"
      :data="popupData"
      :title="popupTitle"
      @click="closePopup()"
    />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import WebChat from "@/components/WebChat.vue";
import SosButton from "@/components/SosButton.vue";
import InfoPopup from "@/components/InfoPopup.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    WebChat,
    SosButton,
    InfoPopup,
    SearchBox,
  },
  data() {
    return {
      popupStatus: false,
      popupData: "",
      popupTitle: "",
    };
  },
  methods: {
    togglePopup(data) {
      this.popupData = data.popupData;
      this.popupTitle = data.popupTitle;

      this.popupStatus = !this.popupStatus;
    },

    closePopup() {
      this.popupStatus = !this.popupStatus;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
