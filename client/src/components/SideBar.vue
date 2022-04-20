<script>
export default {
  props: ["minimized"],
  data() {
    return {
      items: [
        { title: "Home", icon: "home", to: "/", active: true },
        {
          title: "Training",
          icon: "directions_run",
          to: "/training",
          active: false,
        },
        { title: "NBA", icon: "sports_basketball", to: "", active: false },
      ],
      icon: "expand_less",
    };
  },
  methods: {
    expandHandler() {
      if (this.icon === "expand_less") {
        this.icon = "expand_more";
      } else {
        this.icon = "expand_less";
      }
    },
  },
};
</script>

<template>
  <va-sidebar
    :minimized="minimized"
    color="dark"
    gradient
    width="14rem"
    minimizedWidth="0"
    class="mr-3"
  >
    <va-sidebar-item v-for="item in items" :to="item.to" :active="item.active">
      <va-sidebar-item-content>
        <va-icon :name="item.icon" />
        <va-sidebar-item-title v-if="!minimized" style="height: 24px">
          {{ item.title }}
        </va-sidebar-item-title>
        <va-button
          :icon="icon"
          v-if="item.title === 'NBA'"
          :rounded="false"
          @click="expandHandler()"
        ></va-button>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <va-sidebar-item to="/nba/games" class="mx-4" v-if="icon === 'expand_more'">
      <va-sidebar-item-content>
        <va-icon name="forward" />
        <va-sidebar-item-title> Games </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <va-sidebar-item
      to="/nba/standings"
      class="mx-4"
      v-if="icon === 'expand_more'"
    >
      <va-sidebar-item-content>
        <va-icon name="view_list" />
        <va-sidebar-item-title> Standings </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
  </va-sidebar>
</template>
