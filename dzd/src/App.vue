<template>
  <nav class="navbar navbar-expand navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <i class="bi bi-journal-text me-2"></i>Blog App
      </router-link>
      <div class="navbar-nav ms-auto">
        <router-link class="nav-link d-flex align-items-center" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="nav-link d-flex align-items-center" to="/posts/new">
          <i class="bi bi-plus-circle me-1"></i>New Post
        </router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css');

#app {
  min-height: 100vh;
  background-color: #f8f9fa;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.btn {
  font-weight: 500;
}

.form-control:focus,
.btn:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

.navbar {
  margin-bottom: 2rem;
}

.nav-link {
  padding: 0.5rem 1rem;
}

.navbar-brand {
  font-size: 1.4rem;
  font-weight: 500;
}

.bi {
  font-size: 1.1rem;
}
</style>
