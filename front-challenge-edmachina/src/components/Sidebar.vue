<!-- Sidebar.vue -->
<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <!-- Contenido del sidebar -->
    <div class="list-group">
      <!-- Botón para colapsar/expandir el Sidebar -->
      <button @click="toggleSidebar" class="list-group-item button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <path
            d="M7.98443 15.984C7.98443 16.547 7.56252 17.016 7.00002 17.016H4.00002C3.43752 17.016 3.01562 16.547 3.01562 15.984V9.00003H1.28122C0.859425 9.00003 0.625023 8.43753 0.953123 8.10943L9.34382 0.609431C9.71882 0.281231 10.2812 0.281231 10.6562 0.609431L19.0469 8.10943C19.375 8.43753 19.1406 9.00003 18.7188 9.00003H16.9844V15.984C16.9844 16.547 16.5625 17.016 16 17.016H13C12.4375 17.016 12.0156 16.547 12.0156 15.984V11.0156H7.98443V15.984Z"
            fill="white"
          />
        </svg>
        <span v-if="!isCollapsed">Dashboard</span>
      </button>
      <span class="reports" v-if="!isCollapsed">REPORTS</span>
      <router-link to="/dashboard" class="list-group-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M15.9844 0C17.1094 0 18 0.891006 18 2.01601V15.984C18 17.109 17.1094 18 15.9844 18H2.0156C0.890598 18 0 17.109 0 15.984V2.01601C0 0.891006 0.890598 0 2.0156 0H15.9844ZM12.9844 9.98399C13.5469 9.98399 14.0156 9.562 14.0156 9C14.0156 8.438 13.5469 8.01601 12.9844 8.01601H9.9844V5.01601C9.9844 4.45301 9.5625 3.98399 9 3.98399C8.4375 3.98399 8.0156 4.45301 8.0156 5.01601V8.01601H5.0156C4.4531 8.01601 3.9844 8.438 3.9844 9C3.9844 9.562 4.4531 9.98399 5.0156 9.98399H8.0156V12.984C8.0156 13.547 8.4375 14.016 9 14.016C9.5625 14.016 9.9844 13.547 9.9844 12.984V9.98399H12.9844Z"
            fill="#6E6B7B"
          />
        </svg>
        <span v-if="!isCollapsed">Smart Enroller</span>
      </router-link>
      <router-link to="/dashboard" class="list-group-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 0.0159912C15.5312 0.0159912 19.9844 4.46898 19.9844 9.99998C19.9844 15.531 15.5312 19.984 10 19.984C4.46883 19.984 0.015625 15.531 0.015625 9.99998C0.015625 4.46898 4.46883 0.0159912 10 0.0159912ZM11.875 9.53099L13.1406 10.797C13.4688 11.125 13.9844 10.891 13.9844 10.422V6.48398C13.9844 6.20298 13.75 6.01599 13.4688 6.01599H9.53123C9.10943 6.01599 8.87502 6.53098 9.20312 6.85898L10.4688 8.12498L6.20312 12.391C5.82812 12.766 5.82812 13.422 6.20312 13.797C6.62502 14.172 7.23443 14.172 7.60943 13.797L11.875 9.53099Z"
            fill="#6E6B7B"
          />
        </svg>
        <span v-if="!isCollapsed">Dropout Shield</span>
      </router-link>
    </div>
  </aside>
</template>
  
<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>
  
<style scoped>
.sidebar {
  width: 250px;
  position: fixed;
  height: 100%;
  background-color: #ffffff;
  padding-top: 10px;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 50px; /* Ancho cuando está colapsado */
}
.sidebar.collapsed .list-group-item {
  width: 45px;
  height: 42px;
  flex-shrink: 0;
  margin: auto;
  padding: auto;
}

.list-group-item {
  color: #6e6b7b;
  width: 230px;
  height: 42px;
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
  border: none;
  margin-right: 12px;
}

.list-group-item:hover {
    background: #7169db;
}

/* Estilo para el botón, siempre visible */
.btn-sidebar {
  position: fixed;
  top: 20px; /* Ajusta según sea necesario */
  left: 10px; /* Ajusta según sea necesario */
  z-index: 1000; /* Asegura que esté sobre otros elementos */
}

.list-group-item span {
  margin-left: 12px;
}
.collapsed .list-group-item span {
  display: none; /* Oculta el texto cuando está colapsado */
}

.button {
  color: #000;
  background: #4436fd;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
  flex-shrink: 0;
  padding: auto;
}

.button:hover {
  background: #4436fd;
}

.reports {
  flex-shrink: 0;
  color: #babfc7;
  padding: auto;
}
</style>
  