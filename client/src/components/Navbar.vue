<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div>
        <a class="navbar-brand">KamiMampu</a>
      </div>
      <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Event List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Helping Hand History</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-brand:hover {
  cursor: pointer;
}

.nav-link:hover {
  cursor: pointer;
}
</style>
