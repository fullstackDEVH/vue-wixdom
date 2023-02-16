<script setup lang="ts">
</script>

<template>
  <div class="layout__container">
    <TheSideBar :menu="MENU_COMMUNITY" />
    <div class="panel__layout-main">
      <div class="layout__container-header no-border">
        <TheUserInfo />
      </div>
      <div class="panel__layout-content">
        <div class="the-container">
          <div class="container">
            <div class="event__detail">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                  >Home</el-breadcrumb-item
                >
                <el-breadcrumb-item><a href="/">Event</a></el-breadcrumb-item>
              </el-breadcrumb>
              <img src="" alt="Event cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
h3 {
  color: white;
}
</style>
<script lang="ts">
import TheSideBar from "@/components/Common/TheSideBar.vue";
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import { MENU_COMMUNITY } from "../../constants";
export default {
  components: {
    TheSideBar,
    TheUserInfo,
  },
};
</script>