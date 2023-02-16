<template>
  <main class="layout">
    <div class="container">
      <div class="community">
        <h1 class="community__heading">Communities</h1>
        <div class="community__find">
          <div class="spacer"></div>
          <div class="community__find-input">
            <input
              type="text"
              placeholder="Find a community"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="community__list">
          <div class="grid">
            <div class="row"></div>
          </div>
        </div>
        <div class="community__pagination">
          <ThePagination />
        </div>
      </div>
    </div>
  </main>
</template>
<style scope>
</style>


<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {},
});
</script>

