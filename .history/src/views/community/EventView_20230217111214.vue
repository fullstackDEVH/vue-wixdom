<script setup lang="ts">
import { MENU_COMMUNITY } from "../../constants";
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
              <img
                src="https://static.wixdomplanet.io/public/images/polygon-guide-banner.jpg"
                alt="Event cover"
                class="event__cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.event__cover {
  border-radius: 16px;
  object-fit: cover;
  width: 100%;
  margin-top: 24px;
  border-style: none;
  max-width: 100%;
}
@media (min-width: 768px) {
  .event__cover {
    height: auto;
    aspect-ratio: 1136/320;
  }
}
</style>
<script lang="ts">
import TheSideBar from "@/components/Common/TheSideBar.vue";
import TheUserInfo from "@/components/Common/TheUserInfo.vue";

export default {
  components: {
    TheSideBar,
    TheUserInfo,
  },
};
</script>