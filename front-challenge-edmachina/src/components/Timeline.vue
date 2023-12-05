<template>
  <section class="py-5 container">
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h4 class="title">Timeline</h4>
          <div class="d-flex" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <ul class="timeline-with-icons">
      <li class="timeline-item mb-5">
        <span class="timeline-icon">
          <i class="fas fa-rocket text-primary fa-sm fa-fw"></i>
        </span>

        <h5 class="fw-bold">Our company starts its operations</h5>
        <p class="text-muted mb-2 fw-bold">11 March 2020</p>
        <p class="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          necessitatibus adipisci, ad alias, voluptate pariatur officia
          repellendus repellat inventore fugit perferendis totam dolor voluptas
          et corrupti distinctio maxime corporis optio?
        </p>
      </li>

      <li class="timeline-item mb-5">
        <span class="timeline-icon">
          <i class="fas fa-hand-holding-usd text-primary fa-sm fa-fw"></i>
        </span>
        <h5 class="fw-bold">First customer</h5>
        <p class="text-muted mb-2 fw-bold">19 March 2020</p>
        <p class="text-muted">
          Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed aliquet
          laoreet sapien, eget pulvinar lectus maximus vel. Phasellus suscipit
          porta mattis.
        </p>
      </li>

      <li class="timeline-item mb-5">
        <span class="timeline-icon">
          <i class="fas fa-users text-primary fa-sm fa-fw"></i>
        </span>
        <h5 class="fw-bold">Our team exceeds 10 people</h5>
        <p class="text-muted mb-2 fw-bold">24 June 2020</p>
        <p class="text-muted">
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
          facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
          convallis. Quisque consectetur purus erat, et ullamcorper sapien
          tincidunt vitae.
        </p>
      </li>

      <li class="timeline-item mb-5">
        <span class="timeline-icon">
          <i class="fas fa-money-bill-wave text-primary fa-sm fa-fw"></i>
        </span>
        <h5 class="fw-bold">Earned the first million $!</h5>
        <p class="text-muted mb-2 fw-bold">15 October 2020</p>
        <p class="text-muted">
          Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed et
          urna sit amet massa dapibus tristique non finibus ligula. Nam pharetra
          libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit vulputate
          mattis.
        </p>
      </li>
    </ul>
  </section>
</template>
      
<script>
export default {};
</script>
      
<style scoped>
section {
  background: #fff;
}
.title {
  color: #6e6b7b;
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
</style>