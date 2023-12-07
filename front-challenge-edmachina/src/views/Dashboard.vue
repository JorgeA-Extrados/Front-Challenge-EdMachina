<template>
  <div class="dashboard-content colorweight">
    <div class="container-fluid d-flex d-grid">
      <div class="col-3 about overflow-auto">
        <Cv v-if="jsonAboutStudent" :jsonAboutStudent="jsonAboutStudent"/>
      </div>

      <div class="main-content col-9">
        <Breadcrumb />
        <Title />
        <div class="mb-5">
          <Card :jsonData="jsonCardData" />
        </div>
        <Timeline :jsonData="jsonTimelineData" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import Title from "../components/Title.vue";
import Card from "../components/Card.vue";
import Timeline from "../components/Timeline.vue";
import { getCards, getTimeline, getAboutStudent } from "../service/api";
import Cv from '../components/Cv.vue';

export default {
  components: {
    Breadcrumb,
    Title,
    Card,
    Timeline,
    Cv,
  },
  data() {
    return {
      jsonCardData: null,
      jsonTimelineData: null,
      jsonAboutStudent: null,
    };
  },
  async mounted() {
    try {
      this.jsonCardData = await getCards();
      this.jsonTimelineData = await getTimeline();
      this.jsonTimelineData = await getTimeline();
      this.jsonAboutStudent = await getAboutStudent();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>

.about {
  max-height: 80vh !important;
}
.dashboard-content {
  padding: 20px;
  padding-right: 2rem !important;
}
.flex-container {
  display: flex;
}

.main-content {
  margin-left: 25px !important;
}

::-webkit-scrollbar {
  width: 12px; 
}

::-webkit-scrollbar-thumb {
  background-color: #6E6B7B; 
  border-radius: 10px; 
}

::-webkit-scrollbar-track {
  background-color: #D8D6DE; 
  border-radius: 10px; 
}
</style>


  