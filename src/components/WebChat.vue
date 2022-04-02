<template>
  <div>
    <i
      class="fa-solid icon"
      :class="[isChatOpen ? 'fa-xmark' : 'fa-comments']"
      @click="openChat"
    ></i>
    <div class="chat" v-if="isChatOpen">
      <div class="chat__header">
        <i class="fa-solid fa-comments icon-chat"></i>
        <p>Chat with guardians</p>
      </div>
      <div class="chat__container" id="chat__container">
        <h3>Today</h3>
        <div class="chat__message">
          <img src="../assets/angel-active.svg" alt="Guardian Profile Image" />
          <div class="chat__message-container">
            <p class="chat__message-author">Mommy</p>
            <p class="chat__message-content">
              Can't pick you today <span>19:20</span>
            </p>
          </div>
        </div>
        <div class="chat__message">
          <img src="../assets/angel-active.svg" alt="Guardian Profile Image" />
          <div class="chat__message-container">
            <p class="chat__message-author">Grandma</p>
            <p class="chat__message-content">
              Don't forget to activate safe route <span>19:20</span>
            </p>
          </div>
        </div>
        <div class="chat__message">
          <img src="../assets/logo.svg" alt="Guardian Profile Image" />
          <div class="chat__message-container">
            <p class="chat__message-author">Hestia</p>
            <p class="chat__message-content">
              Safe route activated! <span>19:20</span>
            </p>
          </div>
        </div>
        <div class="chat__message chat__message-mine">
          <div class="chat__message-container">
            <p class="chat__message-author">Me</p>
            <p class="chat__message-content">
              Safe route activated! <span>19:20</span>
            </p>
          </div>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
      <div class="chat__input">
        <input type="text" v-model.trim="message" required />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isChatOpen: false,
      message: "",
    };
  },
  methods: {
    openChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    sendMessage() {
      if (this.message) {
        const messagesContainer = document.getElementById("chat__container");
        const date = new Date();

        const div = document.createElement("div");
        div.setAttribute("data-v-48dff4cc", "''");
        div.classList.add("chat__message");
        div.classList.add("chat__message-mine");
        div.innerHTML = `
          <div class="chat__message-container" data-v-48dff4cc="">
            <p class="chat__message-author" data-v-48dff4cc="">Me</p>
            <p class="chat__message-content" data-v-48dff4cc="">
              ${
                this.message
              }<span data-v-48dff4cc="">${date.getHours()}:${date.getMinutes()}</span>
            </p>
          </div>
          <i class="fa-solid fa-user" data-v-48dff4cc=""></i>
      `;
        messagesContainer.appendChild(div);
      } else {
        alert("Please enter a message");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.chat {
  top: 52%;
  left: 3%;
  transform: translateY(-50%);
  position: absolute;
  background: $white;
  box-shadow: $shadow-primary-025;
  border-radius: 1.5rem;
  padding: 2rem 0;
  z-index: 5;

  &__header,
  &__container,
  &__input {
    padding: 0 2rem;
  }

  &__header {
    display: flex;
    align-items: center;
    border-bottom: 5px solid $white-smoke;
    color: $color-primary-light;
    padding-bottom: 1.3rem;
    margin-bottom: 1.5rem;

    i {
      margin-right: 1rem;
    }
  }

  &__container {
    height: 45rem;
    overflow-y: scroll;

    h3 {
      text-align: center;
      font-weight: 600;
    }
  }

  &__message {
    display: flex;
    align-items: flex-end;

    img {
      border: 1px solid $color-primary-dark;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      padding: 0.3rem;
      margin-right: 0.5rem;
    }

    &-author {
      color: $color-primary-dark;
      font-size: 1.2rem;
    }

    &-content {
      position: relative;
      color: $white;
      background: $color-primary-light;
      border-radius: 3rem;
      padding: 0.8rem 1.4rem;
      display: flex;
      align-items: center;
      span {
        position: absolute;
        font-weight: 300;
        font-size: 1rem;
        right: 1.5rem;
        bottom: 0;
      }
    }

    &-mine {
      justify-content: flex-end;
      background: $white;
    }

    &-mine &-author {
      text-align: right;
    }

    &-mine &-content {
      background: $white;
      color: $color-primary-dark;
      border: 2px solid $color-primary-light;

      span {
        color: $color-primary-light;
      }
    }

    &-mine i {
      font-size: 1.5rem;
      border-radius: 50%;
      border: 1px solid $color-primary-dark;
      padding: 0.6rem 0.7rem;
      color: $color-primary-dark;
      margin-left: 0.5rem;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem 0;
    border-top: 5px solid $white-smoke;

    input {
      width: 100%;
      padding: 0.5rem 1.5rem;
      border: 1px solid $color-primary-light;
      border-radius: 3rem;
      font-size: 1.6rem;
      margin-right: 0.3rem;

      &:active,
      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 3rem;
      background: $color-primary-light;
      color: $white;
      font-weight: 500;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
}

.fa-comments.icon {
  padding: 2.5rem 2.1rem;
}

.fa-xmark.icon {
  padding: 2.5rem 3.3rem;
}

.icon {
  cursor: pointer;
  position: absolute;
  font-size: 4rem;
  color: $white;
  border-radius: 50%;
  background: $color-primary-light;
  bottom: 3rem;
  left: 3rem;
  z-index: 2;
  box-shadow: $shadow-primary-025;
}

.icon-chat {
  border-radius: 50%;
  font-size: 2rem;
  padding: 1.3rem 1.1rem;
  background: $white;
  color: $color-primary-light;
  border: 1px solid $color-primary-dark;
  box-shadow: none;
}
</style>
