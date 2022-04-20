<script>
export default {
  data() {
    return {
      test: 10,
    };
  },
  props: {
    product: Object,
  },
  computed: {
    idrPrice: function () {
      return `IDR ${+this.product.retailPrice * 14000},00`;
    },
  },
};
</script>

<template>
  <div class="profile-card-2">
    <img
      :src="product.image.thumbnail"
      class="card-img-top"
      :alt="product.name"
    />
    <div class="card-body">
      <h5 class="card-title text-center profile-name">{{ product.name }}</h5>
      <p style="text-align: right">{{ idrPrice }}</p>
    </div>
    <div class="text-center my-4">
      <button class="btn btn-dark">Buy</button>
    </div>
  </div>
</template>

<style scoped>
.profile-card-2 {
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  background-position: center;
  overflow: hidden;
  position: relative;
  margin: 10px auto;
  cursor: pointer;
  border-radius: 10px;
}

.profile-card-2 img {
  transition: all linear 0.25s;
}

.profile-card-2 .profile-name {
  position: absolute;
  left: 30px;
  bottom: 70px;
  font-size: 15px;
  color: rgb(109, 107, 107);
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-icons {
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: rgb(100, 100, 100);
  transition: all linear 0.25s;
}

.profile-card-2 .profile-username {
  position: absolute;
  bottom: 25px;
  left: 30px;
  color: rgb(105, 105, 105);
  font-size: 13px;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-icons .fa {
  margin: 5px;
}

.profile-card-2:hover img {
  filter: grayscale(100%);
}

.profile-card-2:hover .profile-name {
  bottom: 80px;
}

.profile-card-2:hover .profile-username {
  bottom: 60px;
}

.profile-card-2:hover .profile-icons {
  right: 40px;
}
</style>
