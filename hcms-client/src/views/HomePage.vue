<script>
export default {
  data() {},
  methods: {
    diagnoseClick() {
      console.log("diagnose click");
      this.$router.push("/diagnose");
    },
    monitoringClick() {
      console.log("monitoring click");
    },
    hospitalClick() {
      console.log("hospital click");
    },
    appointmentClick() {
      console.log("appointment click");
    },
  },
  created() {},
};
</script>
<template>
  <!-- Start About us -->
  <div id="about" class="about-box">
    <div class="about-a1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-box">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="row align-items-center about-main-info">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <h2>Welcome to Health Lab</h2>
                <p>
                  Fusce convallis ante id purus sagittis malesuada. Sed erat
                  ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                  Maecenas felis nulla, tincidunt ac blandit a, consectetur quis
                  elit. Nulla ut magna eu purus cursus sagittis. Praesent
                  fermentum tincidunt varius. Proin sit amet tempus magna. Fusce
                  pellentesque vulputate urna.
                </p>
                <p>
                  Fusce convallis ante id purus sagittis malesuada. Sed erat
                  ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                  Maecenas felis nulla, tincidunt ac blandit a, consectetur quis
                  elit. Nulla ut magna eu purus cursus sagittis. Praesent
                  fermentum tincidunt varius. Proin sit amet tempus magna. Fusce
                  pellentesque vulputate urna.
                </p>
                <a href="#" class="new-btn-d br-2">Read More</a>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <ul>
                    <img src="../assets/images/about-img-02.jpg" alt="" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End About us -->
  <!-- Start Services -->
  <div id="services" class="services-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box">
            <h2>Services</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="flex-container">
            <div class="card" style="width: 18rem">
              <img
                src="https://thumbs.dreamstime.com/b/doctor-pharmacy-medical-health-care-hospital-clinic-diagnosis-logo-symbols-doctor-plus-stethoscope-health-care-medical-logo-208104745.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title">Ailment symptomps diagnostics</h3>
                <p class="card-text">
                  By using NLP, we can show you the ailment based on your
                  symptomp
                </p>
                <a
                  href="#"
                  @click.prevent="diagnoseClick()"
                  class="btn btn-primary"
                  >Diagnose</a
                >
              </div>
            </div>
            <div class="card" style="width: 18rem">
              <img
                src="https://thumbs.dreamstime.com/b/doctor-pharmacy-medical-health-care-hospital-clinic-diagnosis-logo-symbols-doctor-plus-stethoscope-health-care-medical-logo-208104745.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title">Ailment symptomps diagnostics</h3>
                <p class="card-text">
                  By using NLP, we can show you the ailment based on your
                  symptomp
                </p>
                <a href="#" class="btn btn-primary">Diagnose</a>
              </div>
            </div>
            <div class="card" style="width: 18rem">
              <img
                src="https://thumbs.dreamstime.com/b/doctor-pharmacy-medical-health-care-hospital-clinic-diagnosis-logo-symbols-doctor-plus-stethoscope-health-care-medical-logo-208104745.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title">Ailment symptomps diagnostics</h3>
                <p class="card-text">
                  By using NLP, we can show you the ailment based on your
                  symptomp
                </p>
                <a href="#" class="btn btn-primary">Diagnose</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Services -->
</template>
<style>
.flex-container {
  display: flex;
  justify-content: space-between;
}
</style>
