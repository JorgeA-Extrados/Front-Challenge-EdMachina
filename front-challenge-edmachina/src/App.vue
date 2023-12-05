<!-- App.vue -->
<template>
  <div>
    <NavBar />
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main :class="{ 'col-md-9': !isCollapsed, 'col-md-12': isCollapsed }" class="ms-sm-auto col-lg-10 px-md-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    NavBar,
    Sidebar,
  },
  data() {
    return {
      isCollapsed: false,
    };
  },
};
</script>

<style>
/* Estilos adicionales si es necesario */
  @import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/brands.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/solid.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/regular.css';
</style>
