<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logo.svg" alt="logo" class="logo__img" />
      <h1 class="logo__title">Hestia</h1>
    </div>
    <nav class="nav">
      <!-- firstListTitle -->
      <ul
        class="nav__list"
        :class="[secondListTitle.toLowerCase()]"
        @mouseenter="displayList(firstListTitle)"
        @mouseleave="displayList(firstListTitle)"
      >
        <li :class="[firstList ? 'active' : '']">
          {{ firstListTitle }}
          <i
            class="fa-solid"
            :class="[firstList ? 'fa-chevron-up' : 'fa-chevron-down']"
          ></i>
        </li>
        <nav-list
          class="nav-component"
          v-if="firstList"
          :list="insertData(firstListTitle)"
          :name="firstListTitle.toLowerCase()"
        ></nav-list>
      </ul>

      <!-- secondListTitle -->
      <ul
        class="nav__list"
        :class="[secondListTitle.toLowerCase()]"
        @mouseenter="displayList(secondListTitle)"
        @mouseleave="displayList(secondListTitle)"
      >
        <li :class="[secondList ? 'active' : '']">
          {{ secondListTitle }}
          <i
            class="fa-solid"
            :class="[secondList ? 'fa-chevron-up' : 'fa-chevron-down']"
          ></i>
        </li>
        <nav-list
          class="nav-component"
          v-if="secondList"
          :list="insertData(secondListTitle)"
          :name="secondListTitle.toLowerCase()"
        ></nav-list>
      </ul>

      <!-- thirdListTitle -->
      <ul class="nav__list help" @click="displayList(thirdListTitle)">
        <li :class="[thirdList ? 'active' : '']">
          {{ thirdListTitle }}
        </li>
        <info-popup
          v-if="thirdList"
          :data="helpData"
          :title="helpTitle"
        ></info-popup>
      </ul>
    </nav>
    <div class="user">
      <div class="user__toggle">
        <img src="../assets/angel.svg" alt="status" class="user__img" />
        <div class="toggle">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" @click="changeUserType"></span>
          </label>
        </div>
      </div>
      <i
        class="fa-circle-user"
        @click="toggleProfile"
        :class="[profileIsActive ? 'fa-solid' : 'fa-regular']"
      ></i>
    </div>
  </header>
</template>
<script>
import InfoPopup from "@/components/InfoPopup.vue";
import NavList from "@/components/ui/NavList.vue";

export default {
  components: {
    InfoPopup,
    NavList,
  },
  data() {
    return {
      firstListTitle: "",
      secondListTitle: "",
      thirdListTitle: "",
      firstList: false,
      secondList: false,
      thirdList: false,
      userType: "",
      toggle: false,
      profileIsActive: false,
      helpData:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
      helpTitle: "Help",
      guardians: [
        {
          id: 1,
          name: "Mommy",
        },
        {
          id: 2,
          name: "Daddy",
        },
        {
          id: 3,
          name: "Grandma",
        },
        {
          id: 4,
          name: "Teacher",
        },
      ],
      requests: [],
      connected: [
        {
          id: 1,
          name: "Sara",
        },
        {
          id: 2,
          name: "Daniel",
        },
        {
          id: 3,
          name: "Grandma",
        },
        {
          id: 4,
          name: "Grandpa",
        },
      ],
      connects: [
        {
          id: 1,
          name: "Sam",
        },
        {
          id: 2,
          name: "John",
        },
      ],
    };
  },
  methods: {
    displayList(listTitle) {
      switch (listTitle) {
        case "Guardians":
          this.firstList = !this.firstList;
          break;
        case "Requests":
          this.secondList = !this.secondList;
          break;
        case "Help":
          this.thirdList = !this.thirdList;
          console.log(123);
          break;
        case "Connected":
          this.firstList = !this.firstList;
          break;
        case "Connect":
          this.secondList = !this.secondList;
          break;
      }
    },
    changeUserType() {
      this.toggle = !this.toggle;

      if (this.toggle) {
        this.userType = "guardian";
        this.firstListTitle = "Connected";
        this.secondListTitle = "Connect";
        this.thirdListTitle = "Help";
      } else {
        this.userType = "user";
        this.firstListTitle = "Guardians";
        this.secondListTitle = "Requests";
        this.thirdListTitle = "Help";
      }
    },
    toggleProfile() {
      this.profileIsActive = !this.profileIsActive;
      // this.insertData();
    },
    insertData(title) {
      switch (title) {
        case "Guardians":
          return this.guardians;
        case "Requests":
          return this.requests;
        case "Connected":
          return this.connected;
        case "Connect":
          return this.connects;
      }
    },
  },
  mounted() {
    this.userType = "user";
    this.firstListTitle = "Guardians";
    this.secondListTitle = "Requests";
    this.thirdListTitle = "Help";

    this.requests = this.guardians;
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.header {
  width: calc(100vw - 10rem);
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $white;
  padding: 0 2rem;
  position: fixed;
  left: 50%;
  top: 10%;
  z-index: 2;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 720px) {
    padding: 1.5rem 2.5rem;
  }
  @media only screen and (max-width: 500px) {
    width: 95vw;
  }
}

.logo,
.nav,
.user {
  display: flex;
  align-items: center;
}

.logo {
  &__img {
    margin-right: 1.5rem;

    @media only screen and (max-width: 720px) {
      width: 5rem;
    }
  }

  &__title {
    @media only screen and (max-width: 720px) {
      font-size: 2rem;
    }
  }
}

.user {
  &__toggle {
    display: contents;

    @media only screen and (max-width: 500px) {
      display: none;
    }
  }

  &__img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
}

.nav__list {
  padding: 3.7rem 0;
  cursor: default;

  &:not(:last-child) {
    margin-right: 4rem;
  }

  li i {
    margin-left: 0.4rem;
  }

  &.help {
    cursor: pointer;
  }
}

.toggle {
  margin-right: 8rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 5.6rem;
  height: 3rem;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-primary-dark;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 2.2rem;
  width: 2.2rem;
  left: 0.4rem;
  bottom: 0.4rem;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $color-primary-light;
}

input:focus + .slider {
  box-shadow: 0 0 1px $color-primary-light;
}

input:checked + .slider:before {
  -webkit-transform: translateX(2.6rem);
  -ms-transform: translateX(2.6rem);
  transform: translateX(2.6rem);
}

.slider.round {
  border-radius: 3.4rem;
}

.slider.round:before {
  border-radius: 50%;
}

.fa-circle-user {
  font-size: 5rem;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    font-size: 4rem;
  }
}

.fa-chevron-up,
.fa-solid.fa-circle-user {
  color: $color-primary-light;
}

.active {
  color: $color-primary-light;
}

.nav-component {
  z-index: 2;
}

.popup {
  z-index: 5;
}

.nav {
  @media only screen and (max-width: 720px) {
    display: none;
  }
}
</style>
