<script>
import LoginForm from './LoginForm.vue'
import PrayerTime from './PrayerTime.vue'
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  components:{
    LoginForm,
    PrayerTime
  }
};
</script>

<template>
  <div class="container-fluid">
    <div
      class="d-flex landingPageHeight justify-content-center align-items-center"
    >
      <PrayerTime />
      <LoginForm /> 
    </div>
  </div>
</template>
