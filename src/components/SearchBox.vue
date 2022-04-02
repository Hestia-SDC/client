<template>
  <form @submit="onSubmit" class="search-box">
    <p>Safe Route</p>
    <div class="form-control">
      <img src="../assets/searchbox-red-circle.webp" alt="" />
      <input type="text" name="from" placeholder="From..." />
    </div>
    <div class="form-control">
      <img src="../assets/searchbox-black-circle.webp" alt="" />
      <input type="text" name="to" placeholder="To..." />
    </div>
    <button type="submit">Build a route</button>
  </form>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      from: "",
      to: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  position: absolute;
  height: 33rem;
  width: 40rem;
  padding: 2.5%;
  top: 20%;
  left: 4%;
  z-index: 1;
  background: #fff;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;

  @media only screen and (max-width: 500px) {
    display: none;
  }
}

.form-control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.form-control i {
  font-size: 2rem;
}

.form-control img {
  width: 2.5rem;
  height: 2.5rem;
}

#from-icon {
  color: red;
}

.form-control input {
  width: 100%;
  height: 4rem;
  margin: 0.5rem;
  margin-left: 1.5rem;
  padding: 0.3rem 0.7rem;
  font-size: 1.7rem;
  transition: all 0.3s ease;
  border: none;
  border-bottom: solid 0.3rem lightgrey;
}

.form-control input:focus-within {
  outline: none;
  transition: all 0.3s ease;
}

.search-box button {
  margin-top: 5%;
  width: 100%;
  height: 5rem;
  border: solid 3px #bfac8e;
  background-color: #bfac8e;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  color: #fff;
  transition: all 0.3s ease;
}

.search-box button:hover {
  background-color: #fff;
  color: #000;
  transition: all 0.3s ease;
}
</style>
