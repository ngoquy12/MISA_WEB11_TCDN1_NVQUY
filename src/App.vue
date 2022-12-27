<template>
  <div>
    <div class="m-container">
      <!-- Thanh sidebar -->
      <the-sidebar></the-sidebar>
      <!-- Main -->
      <div class="m-content">
        <!-- Thanh navbar -->
        <the-navbar></the-navbar>
        <div class="m-main-content">
          <TheContent></TheContent>
          <div class="m-content-body">
            <!-- Table -->
            <employee-list></employee-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./components/layout/TheSidebar.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheContent from "./components/layout/m-content.vue";
import EmployeeList from "./employees/employeeList.vue";

export default {
  name: "App",
  components: {
    TheSidebar,
    TheNavbar,
    TheContent,
    EmployeeList,
  },
};
</script>

<style>
@import url(./css/main.css);
</style>
