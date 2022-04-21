<script>

export default {
};
</script>

<template>
  <div class="selector row my-4">
    <div class="flex">
      <va-card color="dark" gradient class="mr-3" style="width: 12rem">
        <img src="@/assets/dribble.png" alt="" style="height: 12rem;">
        <va-card-title class="justify--center" style="font-size: 1.5rem; color: white"
          ><b>Dribble</b></va-card-title
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/training/dribble">Watch</va-button></va-card-actions
        >
      </va-card>
    </div>
    <div class="flex">
      <va-card color="dark" gradient class="mx-3" style="width: 12rem">
        <img src="@/assets/passing.png" alt="" style="height: 12rem;">
        <va-card-title class="justify--center" style="font-size: 1.5rem;color: white"
          >Passing</va-card-title
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/training/passing">Watch</va-button></va-card-actions
        >
      </va-card>
    </div>
    <div class="flex">
      <va-card color="dark" gradient class="mx-3" style="width: 12rem">
        <img src="@/assets/finishing.png" alt="" style="height: 12rem;">
        <va-card-title class="justify--center" style="font-size: 1.5rem; color: white"
          >Finishing</va-card-title
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/training/finishing">Watch</va-button></va-card-actions
        >
      </va-card>
    </div>
    <div class="flex">
      <va-card color="dark" gradient class="ml-3" style="width: 12rem">
        <img src="@/assets/shooting.png" alt="" style="height: 12rem;">
        <va-card-title class="justify--center" style="font-size: 1.5rem; color: white"
          >Shooting</va-card-title
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/training/shooting">Watch</va-button></va-card-actions
        >
      </va-card>
    </div>
    <div class="flex">
      <va-card color="dark" gradient class="ml-3" style="width: 12rem">
        <img src="@/assets/footwork.png" alt="" style="height: 12rem;">
        <va-card-title class="justify--center" style="font-size: 1.5rem; color: white"
          >Footwork</va-card-title
        >
        <va-card-actions align="stretch" vertical>
          <va-button to="/training/footwork">Watch</va-button></va-card-actions
        >
      </va-card>
    </div>
  </div>
  <div class="mb-5">
    <h1 style="font-size: 2rem">Training Videos</h1>
    <div class="my-3">
      <va-divider />
    </div>
    <p>Choose your own training, based on drills you want to take.</p>
  </div>
</template>

<style></style>
