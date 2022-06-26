<script></script>

<template>
  <div class="mt-3">
    <h1 style="font-size: 2rem">Welcome to</h1>
    <span
      style="
        font-size: 2rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
      "
      >Ur Basketball Site</span
    >
    <div class="my-3">
      <va-divider />
    </div>
  </div>
  <div class="mt-5 row">
    <div class="flex">
      <va-card color="dark" gradient class="mr-5" style="width: 12rem">
        <img src="@/assets/dribble.png" alt="" style="height: 12rem" />
        <va-card-title
          class="justify--center"
          style="font-size: 1.2rem; height: 68px; color: white"
          ><b>Training Videos</b></va-card-title
        >
        <va-card-content style="height: 68px; color: white"
          >Watch basketball drills videos to improve your basketball
          skill.</va-card-content
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/training">Go</va-button></va-card-actions
        >
      </va-card>
    </div>
    <div class="flex">
      <va-card color="dark" gradient class="mx-5" style="width: 12rem">
        <img src="@/assets/passing.png" alt="" style="height: 12rem" />
        <va-card-title
          class="justify--center"
          style="font-size: 1.5rem; height: 68px; color: white"
          >NBA Games</va-card-title
        >
        <va-card-content style="height: 68px; color: white"
          >Find NBA games schedule and history.</va-card-content
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/nba/games">Go</va-button></va-card-actions
        >
      </va-card>
    </div>
    <div class="flex">
      <va-card color="dark" gradient class="ml-5" style="width: 12rem">
        <img src="@/assets/finishing.png" alt="" style="height: 12rem" />
        <va-card-title
          class="justify--center"
          style="font-size: 1.2rem; height: 68px; color: white"
          >NBA Standings</va-card-title
        >
        <va-card-content style="height: 68px; color: white"
          >Show NBA season standings</va-card-content
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/nba/standings">Go</va-button></va-card-actions
        >
      </va-card>
    </div>
  </div>
</template>

<style></style>
