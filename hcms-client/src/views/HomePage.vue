<script>
export default {
  data() {},
  methods: {
    diagnoseClick() {
      console.log("diagnose click");
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
                <div class="about-m">
                  <ul id="banner">
                    <li>
                      <img src="../assets/images/about-img-01.jpg" alt="" />
                    </li>
                    <li>
                      <img src="../assets/images/about-img-02.jpg" alt="" />
                    </li>
                    <li>
                      <img src="../assets/images/about-img-03.jpg" alt="" />
                    </li>
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
          <div class="owl-carousel owl-theme">
            <div class="item">
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-h-square" aria-hidden="true"></i>
                </div>
                <h3 class="title">Diagnose Service</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur.
                </p>
                <a
                  href="#"
                  @click.prevent="diagnoseClick()"
                  class="new-btn-d br-2"
                  >Read More</a
                >
              </div>
            </div>
            <div class="item">
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <h3 class="title">Lorem ipsum dolor</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur.
                </p>
                <a href="#" class="new-btn-d br-2">Read More</a>
              </div>
            </div>
            <div class="item">
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-hospital-o" aria-hidden="true"></i>
                </div>
                <h3 class="title">Lorem ipsum dolor</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur.
                </p>
                <a href="#" class="new-btn-d br-2">Read More</a>
              </div>
            </div>
            <div class="item">
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-stethoscope" aria-hidden="true"></i>
                </div>
                <h3 class="title">Lorem ipsum dolor</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur.
                </p>
                <a href="#" class="new-btn-d br-2">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Services -->
</template>
