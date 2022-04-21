<script>
import { mapActions } from "pinia";
import { useDatingStore } from "../stores/dating";
import ProfileForm from "../components/ProfileForm.vue";
export default {
  methods: {
    ...mapActions(useDatingStore, []),
  },
  components: { ProfileForm },
};
</script>

<template>
<ProfileForm/>
</template>

<style></style>
