<script>
export default {
  created(){
    var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
  }
}
</script>

<template>
  <div>
    <!-- navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top p-4"
    >
      <div class="container-fluid">
        <a href="" class="navbar-brand text-white">iQuran</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/gifts"
                >Surah</router-link
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="btn-logout"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- login -->
    <div class="container-fluid">
      <div
        class="d-flex landingPageHeight justify-content-center align-items-center"
      >
        <div class="col text-center">
          <div class="row d-flex justify-content-center">
            <div
              class="m-3 d-flex p-1 prayerTimeBox justify-content-center flex-column"
            >
              <p class="m-0">Maghrib</p>
              <p class="m-0">06:20</p>
            </div>
            <div
              class="m-3 d-flex p-1 prayerTimeBox justify-content-center flex-column"
            >
              <p class="m-0">Maghrib</p>
              <p class="m-0">06:20</p>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <div
            class="container w-75 my-5 bg-light rounded shadow"
            id="login-page"
          >
            <div class="d-flex align-items-center">
              <div class="col p-5">
                <form>
                  <h1 class="mb-3">Login</h1>
                  <div class="mb-3 mx-5">
                    <label for="exampleInputEmail1" class="form-label"
                      >Email address</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3 mx-5">
                    <label for="exampleInputPassword1" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- homepage -->
    <div class="row m-2 my-5" id="home-page">
      <div class="row d-flex justify-content-center">
        <div
          class="m-3 d-flex p-1 dailySurah justify-content-between flex-column"
        >
          <p class="my-3 ms-3 fs-3 fst-italic fw-bold breakWord">Al-Kahf</p>
          <p class="mb-3 ms-3 fw-bold fs-5 breakWord">Ayat-46</p>
          <p class="my-3 ms-3 fs-3 fw-bold breakWord">
            الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا ۖ
            وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ
            أَمَلً
          </p>
          <p class="my-3 ms-3 fs-5 breakWord fst-italic">
            Almaalu walbanoona zeenatul hayaatid dunya wal baaqiyaatus
            saalihaatu khairun 'inda Rabbika sawaabanw wa khairun amalaa
          </p>
          <p class="my-3 ms-3 fs-5 fst-italic breakWord">
            "Harta dan anak-anak adalah perhiasan kehidupan dunia tetapi amal
            kebajikan yang terus-menerus adalah lebih baik pahalanya di sisi
            Tuhanmu serta lebih baik untuk menjadi harapan."
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-start">
        <div
          class="m-3 d-flex p-1 surahBox justify-content-between flex-row align-items-center"
        >
          <div class="ms-4">
            <a class="m-0 namaSurah">Al-Fatihah (7)</a>
            <p class="m-0">pembukaan</p>
          </div>
          <div class="mx-4">
            <p class="m-0 text-center">الفلق</p>
            <a class="m-0 namaSurah">Bookmarks</a>
          </div>
          <a href="" class="red-btn"><i class="bi bi-bookmark"></i></a>
        </div>
      </div>
    </div>
    <!-- detail surah -->
    <div class="container-fluid">
      <div class=" d-flex justify-content-center align-items-center flex-column">
        <p class="my-3 ms-3 fs-3 fst-italic fw-bold">Al-Kahf</p>
        <p class="mb-3 ms-3 fw-bold fs-5">Manusia</p>
          </div>
          <div>
            
          </div>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";
</style>
