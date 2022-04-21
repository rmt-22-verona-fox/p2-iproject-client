<script>
import { mapActions } from "pinia";

import { useNbaStore } from "@/stores/nbaStore";
export default {
  data() {
    return {
      seasons: [],
      items: [],
      columns: [
        { key: "Rank" },
        { key: "Team" },
        { key: "W-L" },
        { key: "Win %" },
        { key: "Win Home" },
        { key: "Win Away" },
        { key: "Loss %" },
        { key: "Loss Home" },
        { key: "Loss Away" },
        { key: "Last 10" },
      ],
      optionsSort: [
        "Rank",
        "Win Home",
        "Win Away",
        "Loss Home",
        "Loss Away",
        "Last 10",
      ],
      optionsSortingOrder: ["asc", "desc"],
      conferences: ["west", "east"],
      sortBy: "Rank",
      sortingOrder: "asc",
      season: 2021,
      conference: "west",
    };
  },
  watch: {
    sortBy(newValue) {
      if (newValue) {
        this.sortRank(newValue);
      }
    },
    sortingOrder(newValue) {
      if (newValue) {
        this.sortRank(this.sortBy);
      }
    },
    async season(newValue) {
      try {
        if (newValue) {
          await this.getData();
          this.sortRank(this.sortBy);
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async conference(newValue) {
      try {
        if (newValue) {
          await this.getData();
          this.sortRank(this.sortBy);
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  methods: {
    ...mapActions(useNbaStore, ["axiosStandings", "axiosSeasons"]),

    sortRank(sortBy) {
      switch (sortBy) {
        case "Rank":
          if (this.sortingOrder === "asc") {
            this.items = this.items.sort((a, b) => {
              return a.rank - b.rank;
            });
          } else {
            this.items = this.items.sort((a, b) => {
              return b.rank - a.rank;
            });
          }
          break;
        case "Win Home":
          if (this.sortingOrder === "asc") {
            this.items = this.items.sort((a, b) => {
              return a.win.home - b.win.home;
            });
          } else {
            this.items = this.items.sort((a, b) => {
              return b.win.home - a.win.home;
            });
          }
          break;
        case "Win Away":
          if (this.sortingOrder === "asc") {
            this.items = this.items.sort((a, b) => {
              return a.win.away - b.win.away;
            });
          } else {
            this.items = this.items.sort((a, b) => {
              return b.win.away - a.win.away;
            });
          }
          break;
        case "Loss Home":
          if (this.sortingOrder === "asc") {
            this.items = this.items.sort((a, b) => {
              return a.loss.home - b.loss.home;
            });
          } else {
            this.items = this.items.sort((a, b) => {
              return b.loss.home - a.loss.home;
            });
          }
          break;
        case "Loss Away":
          if (this.sortingOrder === "asc") {
            this.items = this.items.sort((a, b) => {
              return a.lose.away - b.lose.away;
            });
          } else {
            this.items = this.items.sort((a, b) => {
              return b.lose.away - a.lose.away;
            });
          }
          break;
        case "Last 10":
          if (this.sortingOrder === "asc") {
            this.items = this.items.sort((a, b) => {
              return a.win.lastTen - b.win.lastTen;
            });
          } else {
            this.items = this.items.sort((a, b) => {
              return b.win.lastTen - a.win.lastTen;
            });
          }
          break;
        default:
          break;
      }
    },

    async getData() {
      try {
        const response = await this.axiosStandings(
          this.season,
          this.conference
        );

        this.items = response.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getSeasons() {
      try {
        const response = await this.axiosSeasons();
        this.seasons = response.data;
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  async created() {
    try {
      await this.getData();
      await this.getSeasons();
      this.sortRank(this.sortBy);
    } catch (err) {
      console.log(err.response);
    }
  },
};
</script>

<template>
  <h1 class="mt-3 ml-2" style="font-size: 2rem">NBA STANDINGS</h1>

  <div class="my-3">
    <va-divider />
  </div>

  <div class="filter row">
    <va-select
      class="flex mb-2 md2 mr-3"
      v-model="sortBy"
      label="Sort by"
      :options="optionsSort"
    ></va-select>

    <va-select
      class="flex mb-2 md2 mx-3"
      v-model="sortingOrder"
      label="Sorting Order"
      :options="optionsSortingOrder"
    ></va-select>

    <va-select
      class="flex mb-2 md2 mx-3"
      v-model="season"
      label="Season"
      :options="seasons"
    ></va-select>

    <va-select
      class="flex mb-2 md2 mx-3"
      v-model="conference"
      label="Conference"
      :options="conferences"
    ></va-select>
  </div>
  <div class="va-table-responsive row">
    <table class="va-table va-table--hoverable">
      <thead>
        <tr>
          <th v-for="item in columns" :key="item.key">{{ item.key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.rank">
          <td>{{ item.rank }}</td>
          <td class="row">
            <img
              :src="item.team.logo"
              alt=""
              class="mr-3"
              style="width: 1.5rem"
            />{{ item.team.name }}({{ item.team.code }})
          </td>
          <td>{{ item.win.total }} - {{ item.loss.total }}</td>
          <td>{{ item.win.percentage }}</td>
          <td>{{ item.win.home }}</td>
          <td>{{ item.win.away }}</td>
          <td>{{ item.loss.percentage }}</td>
          <td>{{ item.loss.home }}</td>
          <td>{{ item.loss.away }}</td>
          <td>{{ item.win.lastTen }} - {{ item.loss.lastTen }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
