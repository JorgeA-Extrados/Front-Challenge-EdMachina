<template>
  <div class="flex-container">
    <div v-for="item in jsonData" :key="item.id">
      <div class="card mb-3 card-father col">
        <div class="row g-0">
          <div class="col-md-4">
            <div class="card-radius d-flex justify-content-center" v-html="item.icon">
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.text }}</p>
              <hr />
            </div>
          </div>
          <p class="card-text d-flex">
            <small class="justify-content-center pl-4">{{
              item.footer1
            }}</small>
            <small class="" style="margin-left: auto">{{ item.footer2 }}</small>
          </p>
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
.card-father {
  width: auto;
  height: auto;
  max-width: 540px;
  margin-right: 20px;
}
.icon-card {
  color: #fff;
  margin: auto;
}

.card-radius {
  background: #35e082;
  border-radius: 50%;
  width: 45%;
  height: 25%;
  margin-top: 15px;
  margin-left: 15px;
}

.flex-container {
      display: flex;
    }
</style>