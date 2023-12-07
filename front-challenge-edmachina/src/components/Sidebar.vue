<template>
  <aside class="sidebar colorweight" :class="{ collapsed: isCollapsed }">
    <div class="list-group gap-2">
      <button
        @click="toggleSidebar"
        class="list-group-item button d-flex justify-content-center align-items-center"
      >
        <div v-html="jsonSidebar.svg1" style="display: inline-block"></div>
        <span v-if="!isCollapsed" style="display: inline-block; color:#fff">{{
          jsonSidebar.name1
        }}</span>
      </button>
      <span class="reports" v-if="!isCollapsed">REPORTS</span>
      <router-link
        to="/dashboard"
        class="list-group-item d-flex justify-content-center align-items-center"
        @click="selectTab('smart')"
        :class="{
          active: selectedTab === 'smart',
        }"
      >
        <div v-html="jsonSidebar.svg2" id="smart" style="display: inline-block"></div>
        <span v-if="!isCollapsed">{{ jsonSidebar.name2 }}</span>
      </router-link>
      <router-link
        to="/dashboard"
        class="list-group-item d-flex justify-content-center align-items-center"
        @click="selectTab('dropout')"
        :class="{ active: selectedTab === 'dropout' }"
      >
        <div v-html="jsonSidebar.svg3" id="dropout" style="display: inline-block"></div>
        <span v-if="!isCollapsed">{{ jsonSidebar.name3 }}</span>
      </router-link>
      <router-link
        to="/dashboard"
        class="list-group-item d-flex justify-content-center align-items-center"
        @click="selectTab('retention')"
        :class="{ active: selectedTab === 'retention' }"
      >
        <div v-html="jsonSidebar.svg4" id="retention" style="display: inline-block"></div>
        <span v-if="!isCollapsed">{{ jsonSidebar.name4 }}</span>
      </router-link>
      <div class="btn-group colorweight" role="group">
        <button
          id="btn-dropdown"
          type="button"
          class="list-group-item button2"
          :class="{
            'dropdown-toggle': !isCollapsed,
            active: selectedTab === 'about',
          }"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          @click="selectTab('about')"
        >
          <div v-html="jsonSidebar.svg5" id="dropdown" style="display: inline-block"></div>
          <span v-if="!isCollapsed" style="display: inline-block">{{
            jsonSidebar.name5
          }}</span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">My Reports</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">My Reports</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">My Reports</a>
          </li>
        </ul>
      </div>
      <router-link
        to="/dashboard"
        class="list-group-item d-flex justify-content-center align-items-center"
        @click="selectTab('academic')"
        :class="{
          'dropdown-toggle': !isCollapsed,
          active: selectedTab === 'academic',
        }"
      >
        <div v-html="jsonSidebar.svg6" id="academic" style="display: inline-block"></div>
        <span v-if="!isCollapsed">{{ jsonSidebar.name6 }}</span>
      </router-link>
      <router-link
        to="/dashboard"
        class="list-group-item d-flex justify-content-center align-items-center"
        @click="selectTab('reports')"
        :class="{ active: selectedTab === 'reports' }"
      >
        <div v-html="jsonSidebar.svg7" id="reports" style="display: inline-block"></div>
        <span v-if="!isCollapsed">{{ jsonSidebar.name7 }}</span>
      </router-link>
      <router-link
        to="/dashboard"
        class="list-group-item d-flex justify-content-center align-items-center"
        @click="selectTab('custom')"
        :class="{ active: selectedTab === 'custom' }"
      >
        <div v-html="jsonSidebar.svg8" id="custom" style="display: inline-block"></div>
        <span v-if="!isCollapsed">{{ jsonSidebar.name8 }}</span>
      </router-link>
      <router-link
        to="/dashboard"
        class="list-group-item d-flex justify-content-center align-items-center"
        @click="selectTab('workflows')"
        :class="{ active: selectedTab === 'workflows' }"
      >
        <div v-html="jsonSidebar.svg9" id="workflows" style="display: inline-block"></div>
        <span v-if="!isCollapsed">{{ jsonSidebar.name9 }}</span>
      </router-link>
    </div>
  </aside>
</template>
  
<script>
export default {
  data() {
    return {
      isCollapsed: false,
      selectedTab: "home",
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
  props: {
    jsonSidebar: {
      required: true,
    },
  }
};
</script>
  
<style scoped>
.sidebar {
  width: 250px;
  position: fixed;
  height: 100%;
  background-color: #fafafa;
  padding-top: 10px;
  transition: width 0.3s ease;
  padding-left: 7px !important;
  padding-right: 7px !important;
}

.sidebar.collapsed {
  width: 60px;
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
  border-radius: 8px;
}

.list-group-item:hover {
  background: #0d6dfd9c;
  color: #fafafa;
}

svg path {
  fill: #f80000;
}

.btn-sidebar {
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 1000;
}

.list-group-item span {
  margin-left: 12px;
}
.collapsed .list-group-item span {
  display: none;
}

.button {
  color: #212121;
  background: #0d6efD !important;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
  flex-shrink: 0;
  padding: auto;
  border-radius: 8px !important;
}
.button2 {
  color: #212121;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
  flex-shrink: 0;
  padding: auto;
  border-radius: 8px !important;
  color: #6E6B7B ;
  font-weight: 700 !important;
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
  