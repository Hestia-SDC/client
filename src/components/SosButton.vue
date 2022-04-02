<template>
  <div>
    <div class="btn-popup" v-if="popupStatus">
      <div
        class="btn-popup__row"
        @click="
          $emit('openPopup', { popupData, popupTitle });
          showPopup();
        "
      >
        <span>Emergency route</span>
        <div class="btn-popup__img">
          <img src="../assets/emergency.svg" alt="Emergency Icon" />
        </div>
      </div>

      <div
        class="btn-popup__row"
        @click="
          $emit('openPopup', { popupData, popupTitle });
          showPopup();
        "
      >
        <span>Emergency contacts</span>
        <div class="btn-popup__img">
          <img src="../assets/alert.svg" alt="Alert Icon" />
        </div>
      </div>

      <div
        class="btn-popup__row"
        @click="
          $emit('openPopup', { popupData, popupTitle });
          showPopup();
        "
      >
        <span>Call guardians</span>
        <div class="btn-popup__img">
          <img src="../assets/call.svg" alt="Call Icon" />
        </div>
      </div>

      <div
        class="btn-popup__row"
        @click="
          $emit('openPopup', { popupData, popupTitle });
          showPopup();
        "
      >
        <span>Action plan</span>

        <div class="btn-popup__img">
          <img src="../assets/action-plan.svg" alt="Action Plan Icon" />
        </div>
      </div>
    </div>
    <button class="btn" @click="showPopup()">SOS</button>
  </div>
</template>

<script>
export default {
  emits: ["openPopup"],
  data() {
    return {
      popupStatus: false,
      popupData:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquentper conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
      popupTitle: "Action Plan",
    };
  },
  methods: {
    showPopup() {
      console.log("hello");
      this.popupStatus = !this.popupStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.btn {
  width: 23rem;
  height: 7rem;
  background-color: $warning;
  z-index: 5;
  font-size: 4rem;
  color: $white;
  font-weight: 600;
  text-align: center;
  box-shadow: 0px 0px 3rem 1rem rgba(255, 1, 1, 0.25);
  border-radius: 1.5rem;
  transition: all 0.3s;

  @media only screen and (max-width: 850px) {
    width: 18rem;
    height: 5.5rem;
  }
  @media only screen and (max-width: 720px) {
    font-size: 2.5rem;
  }

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:active {
    transform: translate(0);
  }
}

.btn-popup {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  &__row {
    display: flex;
    margin: 1rem 0;
    justify-content: space-between;
    align-items: center;
    animation: moveTop 0.4s;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 20px 5px rgba(255, 1, 1, 0.25);
      border-radius: 1.5rem;
    }

    span {
      box-shadow: 0px 0px 20px 5px rgba(255, 1, 1, 0.25);
      background: #ffffff;
      border-radius: 1.5rem;
      width: 17rem;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $warning;
      text-align: center;

      @media only screen and (max-width: 850px) {
        font-size: 1.4rem;
        width: 13rem;
        height: 4rem;
      }
    }
  }
  &__img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 5rem;
    width: 5rem;
    background: $white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 850px) {
      width: 4rem;
      height: 4rem;
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
}

@keyframes moveTop {
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
