<template>
     <!-- Register -->
  <section>
    <div class="container">
      <div class="form-container">
        <form>
          <h1>Register</h1>
          <div class="form-group">
            <input type="text" required />
            <label>Email or phone number</label>
          </div>
          <div class="form-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button>Sign Up</button>

          <div class="signup">
            <p>Already Have an account? <a href="#">Login now</a>.</p>
          </div>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>