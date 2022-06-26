<script>
export default {
  data() {
    return {
      games: [
        {
          season: 2021,
          start: "2022-04-21T00:00:00.000Z",
          status: {
            clock: 6,
            long: "In Play",
            currentPeriods: 4,
            totalPeriods: 4,
          },
          arena: {
            name: "Scotiabank Arena",
            city: "Toronto",
            state: "ON",
            country: "Canada",
          },
          visitors: {
            name: "Philadelphia 76ers",
            code: "PHI",
            logo: "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png",
            points: 80,
            linescore: ["19", "27", "28", "6"],
            statistics: {
              win: 51,
              loss: 31,
              h2hWin: 1,
              h2hLoss: 3,
            },
          },
          home: {
            name: "Toronto Raptors",
            code: "TOR",
            logo: "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png",
            points: 82,
            linescore: ["29", "27", "19", "7"],
            statistics: {
              win: 48,
              loss: 34,
              h2hWin: 3,
              h2hLoss: 1,
            },
          },
        },
        {
          season: 2021,
          start: "2022-04-21T01:30:00.000Z",
          status: {
            clock: 3,
            long: "In Play",
            currentPeriods: 1,
            totalPeriods: 4,
          },
          arena: {
            name: "Fiserv Forum",
            city: "Milwaukee",
            state: "WI",
            country: "USA",
          },
          visitors: {
            name: "Chicago Bulls",
            code: "CHI",
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png",
            points: 21,
            linescore: ["21", "0", "0", "0"],
            statistics: {
              win: 46,
              loss: 36,
              h2hWin: 0,
              h2hLoss: 4,
            },
          },
          home: {
            name: "Milwaukee Bucks",
            code: "MIL",
            logo: "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png",
            points: 24,
            linescore: ["24", "0", "0", "0"],
            statistics: {
              win: 51,
              loss: 31,
              h2hWin: 4,
              h2hLoss: 0,
            },
          },
        },
        {
          season: 2021,
          start: "2022-04-21T23:30:00.000Z",
          status: {
            clock: null,
            long: "Scheduled",
            currentPeriods: 0,
            totalPeriods: 4,
          },
          arena: {
            name: "Target Center",
            city: "Minneapolis",
            state: "MN",
            country: "USA",
          },
          visitors: {
            name: "Memphis Grizzlies",
            code: "MEM",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png",
            points: null,
            linescore: ["0"],
            statistics: {
              win: 56,
              loss: 26,
              h2hWin: 2,
              h2hLoss: 2,
            },
          },
          home: {
            name: "Minnesota Timberwolves",
            code: "MIN",
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png",
            points: null,
            linescore: ["0"],
            statistics: {
              win: 46,
              loss: 36,
              h2hWin: 2,
              h2hLoss: 2,
            },
          },
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-3" v-for="(game, index) in games" :key="game" :index="index">
    <div class="row">
      <va-card>
        <va-card-title style="font-size: 1.5rem"
          >({{ game.visitors.code }}) vs ({{ game.home.code }})</va-card-title
        >
        <va-card-content>
          <div class="row align--center">
            <div class="flex">
              <va-card class="" :square="true" color="grey" style="width: 12rem">
                <img class="justify--center" :src="game.visitors.logo" alt="" style=" height: 12rem;" />
                <va-card-title
                  class="justify--center"
                  style="font-size: 1.5rem; color: white"
                  >{{game.visitors.points}}</va-card-title
                >
              </va-card>
            </div>
            <div class="flex">VS</div>
            <div class="flex">
              <va-card :square="true" color="grey" style="width: 12rem">
                <img :src="game.home.logo" alt="" style="height: 12rem;" />
                <va-card-title
                  class="justify--center"
                  style="font-size: 1.5rem; color: white"
                  >{{game.home.points}}</va-card-title
                >
              </va-card>
            </div>
          </div>
          <va-card-content style="text-align: center">{{game.status.long}}</va-card-content>
        </va-card-content>
        <va-card-actions style="padding-top: 0" align="stretch" vertical>
          <va-button :to="{ name: 'nbaGamesDetail', params: { detail: index } }"
            >More detail...</va-button
          ></va-card-actions
        >
      </va-card>
    </div>
  </div>
</template>
