<template>
  <div class="list-container">
    <ul class="list guardians" v-if="name === 'guardians'">
      <li class="guardians" v-for="item in list" :key="item.id">
        <img src="../../assets/angel-active.svg" alt="active item" />
        <p>{{ item.name }}</p>
      </li>
      <li class="guardians">
        <p>Edit list</p>
      </li>
    </ul>

    <ul class="list requests" v-if="name === 'requests'">
      <li class="requests" v-for="item in list" :key="item.id">
        <div class="info">
          <img src="../../assets/angel-active.svg" alt="active item" />
          <p>{{ item.name }}</p>
        </div>
        <div class="btns">
          <button class="primary">Accept</button>
          <button class="accent">Decline</button>
        </div>
      </li>
      <li class="requests">
        <p>Add new guardian</p>
        <form class="request__form">
          <input type="text" />
          <button @click.prevent="" class="primary">Add</button>
        </form>
      </li>
    </ul>

    <ul class="list connected" v-if="name === 'connected'">
      <li class="connected" v-for="item in list" :key="item.id">
        <i class="fa-solid fa-user"></i>
        <p>{{ item.name }}</p>
      </li>
      <li class="connected">
        <p>Edit list</p>
      </li>
    </ul>

    <ul class="list connect" v-if="name === 'connect'">
      <li class="connect">
        <p>Add new guardian</p>
        <form class="request__form">
          <input type="text" />
          <button @click.prevent="" class="primary">Enter</button>
        </form>
      </li>
      <li class="connect" v-for="item in list" :key="item.id">
        <div class="info">
          <img src="../../assets/angel-active.svg" alt="active item" />
          <p>{{ item.name }}</p>
        </div>
        <div class="btns">
          <button class="accent">Requested</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables";

.list-container {
  position: absolute;
  top: 10rem;
  background: $white;
  box-shadow: $shadow-primary-025;
  border-radius: 1.5rem;
}

.info {
  display: flex;
  align-items: center;
}

.list {
  padding: 1.2rem 0;

  & li {
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0.6rem 2.1rem;
    width: 30rem;

    img,
    i {
      border-radius: 50%;
      margin-right: 1.2rem;
      padding: 0.5rem;
      border: 1px solid $color-primary-dark;
    }

    i {
      font-size: 2.5rem;
      padding: 0.6rem 0.8rem;
      color: $color-primary-light;
    }

    &:not(:last-child) {
      border-bottom: 1px solid $color-primary-light;
    }

    &:last-child {
      transform: translateY(0.5rem);
    }

    &:last-child.guardians,
    &:last-child.connected {
      color: $color-primary-light;
      font-weight: 600;
      cursor: pointer;
    }

    &:last-child.requests,
    &:first-child.connect {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: 1.8rem;
      }

      form {
        margin: 0 auto;
        input {
          border: 2px solid $color-primary-light;
          border-radius: 1.5rem;
          padding: 0.5rem 0.5rem 0.5rem 1.5rem;
          margin-right: 0.5rem;
          width: 24rem;
        }
      }
    }
  }
  & li.requests,
  & li.connect {
    justify-content: space-between;
  }
  & li.requests {
    width: 35rem;
  }
  & li.connect {
    width: 36rem;
  }
}

button {
  padding: 0.75rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1.5rem;
}

.primary {
  background-color: $color-primary-light;
  color: $white;
  margin-right: 0.5rem;
}
.accent {
  background-color: $white;
  color: $color-primary-light;
  border: 1px solid $color-primary-light;
}
</style>
