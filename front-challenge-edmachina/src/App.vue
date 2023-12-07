<!-- App.vue -->
<template>
  <div>
    <NavBar />
      <div >
        <Sidebar class="sidebarComponent" :jsonSidebar="jsonSidebar" />
        <router-view />
      </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import { getSidebar } from "./service/api";

export default {
  components: {
    NavBar,
    Sidebar,
    Footer
  },
  data() {
    return {
      isCollapsed: false,
      jsonSidebar: {}
    };
  },
  async mounted() {
    try {
      this.jsonSidebar = await getSidebar();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/brands.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/solid.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/regular.css";

.sidebarComponent {
  z-index: 1; 
}

</style>
