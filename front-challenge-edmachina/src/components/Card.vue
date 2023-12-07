<template>
  <div class="d-flex justify-content-between align-items-center w-100 flex-row">
    <div v-for="item in jsonData" :key="item.id" class="custom-card">
      <div class="card rounded">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="rounded-circle bg-primary justify-content-center">
              <div class="card-radius">
                <span class="timeline-icon">
                  <i :class="item.icon"></i>
                </span>
              </div>
            </div>
            <div class="ms-3 flex-grow-1 text-end">
              <p class="mb-0">{{ item.title }}</p>
              <p class="mb-0">{{ item.text }}</p>
            </div>
          </div>
          <hr class="my-3" />
          <div class="d-flex justify-content-between">
            <p class="mb-0">{{ item.footer1 }}</p>
            <p class="mb-0">{{ item.footer2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
export default {
  props: {
    jsonData: {
      type: Array,
      required: true,
    },
  },
};
</script>
        
<style scoped>
.custom-card {
  height: 111px;
  margin-bottom: 1rem;
}

.card {
  border: none;
  flex: 0 0 207px;
  width: 250px !important;
  height: 130px;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
}
.bg-primary {
  background: #91CC75 !important;
}

.card-radius {
  color: #fff;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
}

p {
  font-weight: bold;
}

@media (max-width: 992px) {
  .custom-card {
    flex: 0 0 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
}

@media (max-width: 576px) {
  .custom-card {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>