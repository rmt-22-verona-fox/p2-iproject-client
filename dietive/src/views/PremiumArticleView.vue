<script>
import { useFoodStore } from "../stores/food";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data() {
    return {
      state: "",
    };
  },
  computed: {
    ...mapState(useFoodStore, ["allArticles", "userDetail", "status"]),
    ...mapWritableState(useFoodStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useFoodStore, [
      "getUserFood",
      "premiumArticle",
      "getUserData",
      "premiumPay",
      "updateUser",
      "logoutAction",
    ]),
    async purchasePremium() {
      try {
        await this.premiumPay();
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
  },
  watch: {
    userDetail: {
      handler(val) {
        if (val.membership === "premium") {
          this.state = "premium";
        } else {
          this.state = "regular";
        }
      },

      immediate: true,
    },
  },
  async created() {
    try {
      await this.getUserData();
      await this.premiumArticle();

      if (this.status === "success") {
        await this.updateUser();
        await this.premiumArticle();
      }

      const token = localStorage.getItem("access_token");
      if (token) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    } catch (err) {
      if (err.response.status === 401) {
        this.isLogin = false;
        await this.logoutAction();
        this.$router.push("/login");
        const error = err.response.data.message;
        swal("Error", error, "error");
      } else {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    }
  },
};
</script>

<template>
  <div>
    <main class="main">
      <div class="responsive-wrapper">
        <div class="main-header">
          <h1>Premium Article ( ͡❛ ͜ʖ ͡❛)📖</h1>
        </div>
        <br />
        <div class="content-header">
          <div class="content-header-intro">
            <h2>Special Article For You</h2>
            <p v-if="state === 'regular'">Please update to read our article</p>
            <p v-if="state === 'premium'">Happy reading!</p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-panel">
          <div class="vertical-tabs">
            <RouterLink to="/"> All Food </RouterLink>
            <RouterLink to="/food">My Food</RouterLink>
            <RouterLink to="/premium" class="active"
              >Premium Article</RouterLink
            >
          </div>
        </div>

        <div v-if="state === 'regular'">
          <br /><br />
          <a href="" @click.prevent="purchasePremium" class="button">
            <i class="ph-lightning-bold"></i>
            <span>Upgrade to Premium</span>
          </a>
        </div>

        <div
          class="content-main"
          style="width: 900px; margin-right: 100px"
          v-if="state === 'premium'"
        >
          <div class="card-grid">
            <article class="card" v-for="data in allArticles" :key="data.id">
              <div class="card-header">
                <div>
                  <img
                    style="width: 300px; height: 200px; object-fit: cover"
                    :src="data.urlToImage"
                  />
                </div>
              </div>
              <div></div>
              <div class="card-body">
                <h3 style="font-weight: bold">{{ data.title }}</h3>
                <br />

                <p style="padding-bottom: 10px">
                  {{ data.description }}
                </p>
                <br />
                <p style="padding-bottom: 10px">
                  Source : {{ data.source.name }}
                </p>
              </div>
              <div class="card-footer">
                <p href="" class="action">{{ data.publishedAt }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import "@/assets/base.css";

.main {
  margin-left: 130px;
}

.responsive-wrapper {
  margin-left: 0px;
}
</style>
