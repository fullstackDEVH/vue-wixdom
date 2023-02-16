

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
.tournament {
  height: 100%;
}

.tournament__content {
  flex: 1;
  transition: all 0.3s ease;
}
.tournament__content-main {
  padding: 16px 12px;
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

