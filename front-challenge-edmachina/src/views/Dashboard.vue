<!-- Dashboard.vue -->
<template>
  <div class="dashboard-content">
    <Breadcrumb />
    <Title />
    <div class="flex-container">
      <Card :jsonData="jsonData"/>
    </div>
    <h1>Dashboard</h1>
    <Timeline />
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import Title from "../components/Title.vue";
import Card from "../components/Card.vue";
import Timeline from "../components/Timeline.vue";
import axios from "axios";

export default {
  components: {
    Breadcrumb,
    Title,
    Card,
    Timeline
  },
  data() {
    return {
      jsonData: [],
    };
  },
  mounted() {
    axios
      .get("../../public/locales/card.json")
      .then((response) => {
          this.jsonData = response.data;
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON", error);
      });
  },
};
</script>

<style scoped>
  .flex-container {
      display: flex;
    }
</style>


  