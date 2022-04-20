<script></script>

<template>
  <!-- Login Page -->
  <div class="container-fluid loginPage">
    <div class="row">
      <div class="col-md-4 col-sm-9 loginSide">
        <h2 style="color: #06260b">Welcome Back</h2>
        <h6 class="mb-4" style="color: #9ac535">
          Please enter yout credentials
        </h6>
        <form action="">
          <div class="loginField">
            <div class="mb-3 mt-3">
              <label class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
              />
            </div>
            <div class="mb-5">
              <label class="form-label">Password</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />
            </div>
            <button type="button" class="btn loginField mb-2">Success</button>
            <div class="mb-2 divider">Or</div>
            <button type="button" class="btn loginField mb-3">Google</button>
          </div>
        </form>
        <h6>Don't have an account? <a href="">Register</a></h6>
      </div>
      <div class="col-md-8 col-sm-3 imageLogin"></div>
    </div>
  </div>
</template>
