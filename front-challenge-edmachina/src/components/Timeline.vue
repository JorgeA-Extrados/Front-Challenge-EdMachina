<template>
  <div class="colorweight">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item li-activity " >
        <a class="nav-link activity active" aria-current="true">Activity</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled"><i class="fa-regular fa-envelope fa-sm fa-fw"></i>&nbsp; Emails </a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link disabled"><i class="fa-solid fa-phone"></i>&nbsp; Calls</a>
      </li>
    </ul>
    <section class="py-5">
      <div >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <h4 class="title">Timeline</h4>
            <div class="d-flex" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="btn btn-outline-secondary dropdown-toggle btndrop"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Year
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">2020</a></li>
                    <li><a class="dropdown-item" href="#">2021</a></li>
                    <li><a class="dropdown-item" href="#">2022</a></li>
                    <li><a class="dropdown-item" href="#">2023</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="btn btn-outline-secondary dropdown-toggle btndrop"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filer by User
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Name</a></li>
                    <li><a class="dropdown-item" href="#">Last Name</a></li>
                    <li><a class="dropdown-item" href="#">Age</a></li>
                  </ul>
                </li>
              </ul>
              <div class="input-group">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <label for="search-input" class="input-group-addon">
                  <i class="fas fa-search"></i>
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="timeline overflow-auto p-4">
        <ul v-for="item in jsonData" :key="item.id" class="timeline-with-icons ">
          <h5 class="fw-bold">{{ item.title }}</h5>
          <li
            v-for="card in item.cadrs"
            :key="card.id"
            class="timeline-item mb-5"
          >
            <span class="timeline-icon">
              <i :class="card.icon"></i>
            </span>
            <div class="cards">
              <div class="row g-0">
                <div class="col-md-auto">
                  <h5 style="color: blue !important" class="fw-bold m-0">
                    {{ card.text1 }} &nbsp;
                  </h5>
                </div>
                <div class="col-md-auto">
                  <h5 class="m-0">{{ card.text2 }}</h5>
                </div>
              </div>
              <p class="text-muted mb-2 fw-bold text-end">{{ card.date }}</p>
              <div class="row g-0">
                <div class="col-md-auto">
                  <p class="text-muted mb-2 fw-bold">{{ card.text3 }} &nbsp;</p>
                </div>
                <div class="col-md-auto">
                  <p
                    style="color: blue !important"
                    class="text-muted mb-2 fw-bold"
                  >
                    {{ card.text4 }}
                  </p>
                </div>
              </div>
              <p class="text-muted mb-2 fw-bold">{{ card.text5 }}</p>
              <p class="text-muted mb-2 fw-bold">{{ card.text6 }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
section {
  background: #ffffff !important;
  border-radius: 5px;
  overflow: visible !important;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
}

.li-activity {
  background: #ffffff;
  border-radius:6px 6px 0 0;
}

.activity {
  border: none !important;
}

.nav-link {
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1), 0px -1px 3px rgba(0, 0, 0, 0.08);
}

nav {
  background: #fff !important;
}

.cards {
  background: #ebebeec2 !important;
  border-radius: 5px;
  padding: 10px;
}
.title {
  color: #6e6b7b;
}

.timeline {
  max-height: 279px !important;
}
.timeline-with-icons {
  border-left: 1px solid hsl(0, 0%, 90%);
  position: relative;
  list-style: none;
}

.timeline-with-icons .timeline-item {
  position: relative;
}

.timeline-with-icons .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline-with-icons .timeline-icon {
  position: absolute;
  left: -48px;
  background-color: hsl(217, 88.2%, 90%);
  color: hsl(217, 88.8%, 35.1%);
  border-radius: 50%;
  height: 31px;
  width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-group {
  position: relative;
  display: flex;
}

.input-group .input-group-addon {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0.375rem 0.75rem;
  pointer-events: none;
}

.btndrop {
  margin-right: 15px;
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