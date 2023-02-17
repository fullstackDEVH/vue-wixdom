

<template>
  <div class="layout">
    <div class="container">
      <div class="dashboard-view">
        <h1 class="the-heading--center">Checker view</h1>
      </div>
    </div>
  </div>
</template>
  
  <style scoped>
.layout {
  padding-top: var(--header-height);
}
.community {
  padding: 40px 0;
}
.dashboard-view {
  padding: 40px 0;
  height: 100vh;
}
</style>
  
  
  <script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
  
  