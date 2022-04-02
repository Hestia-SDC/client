<template>
  <div class="help-container">
    <h1>{{ title }}</h1>
    <i class="fa-solid fa-xmark close"></i>
    <p>
      {{ data }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["data", "title"],
};
</script>
<style lang="scss" scoped>
@import "../styles/variables";

.help-container {
  cursor: default;
  background: $white;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 45%);
  width: 90rem;
  height: 44rem;
  border-radius: 1.5rem;
  box-shadow: $shadow-primary-025;
  padding: 5rem 3rem;
  z-index: 50;

  h1 {
    text-align: center;
    color: $color-primary-light;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  p {
    max-width: 80%;
    margin: 0 auto;
  }
}

.close {
  cursor: pointer;
  position: absolute;
  top: 12%;
  right: 3%;
  font-size: 5rem;
  transform: translate(-50%, -50%);
  color: $color-primary-light;
}
</style>
