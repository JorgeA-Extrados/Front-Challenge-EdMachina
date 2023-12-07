<template>
  <div class="w-100 d-flex">
    <div class="btn-group mx-auto" role="group" aria-label="Basic example">
      <button type="button"  class="btn " @click="selectTab('Overview')"  :class="{ select: selectedTab === 'Overview' }">Overview</button>
      <button type="button" class="btn " @click="selectTab('Enrollment')"  :class="{ select: selectedTab === 'Enrollment' }">Enrollment</button>
      <button type="button" class="btn " @click="selectTab('Academic')"  :class="{ select: selectedTab === 'Academic' }">Academic</button>
    </div>
  </div>
</template>
      
<script>
export default {
  data() {
    return {
      selectedTab: "Overview",
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
  };
</script>
      
<style scoped>
  .d-flex {
      display: flex;
    }

    .justify-content-center {
      justify-content: center;
    }

    .m-2 {
      margin: 0.5rem;
    }

    .mt-3 {
      margin-top: 1rem;
    }
    .btn{
      border-radius: 0px;
      font-size: 20px !important;
      font-weight: bold;
      margin-bottom: 15px;
      border-bottom: 5px solid #F8F8F8 ;
    }

    .select{
      border-bottom: 5px solid #7367f0 ;
    }

    @media (max-width: 768px) {
      .d-flex {
        flex-direction: column; 
        align-items: center; 
      }
    }

</style>