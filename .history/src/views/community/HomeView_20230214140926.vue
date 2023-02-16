<script setup lang="ts">
import { RouterLink } from "vue-router";
import { communities } from "@/mock";
</script>
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
            <div class="row">
              <TheCommunityItem
                v-for="community in communities"
                :key="community._id"
                :name="community.name"
                :_id="community._id"
                :image="community.image"
              />
            </div>
          </div>
        </div>
        <div class="community__pagination">
          <ThePagination />
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import ThePagination from "@/components/Common/ThePagination.vue";
import TheCommunityItem from "@/components/Common/TheCommunityItem.vue";
export default {
  components: {
    ThePagination,
    TheCommunityItem,
  },
};
</script>

<style scoped>
.layout {
  padding-top: var(--header-height);
}
.community {
  padding: 40px 0;
}
.community__heading {
  font-size: 4.8rem;
  text-align: center;
  color: var(--white-color);
  font-weight: 700;
  margin-bottom: 0;
  line-height: 4.8rem;
}
.community__find {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.spacer {
  flex: 1;
}
.community__find-input {
  width: 280px;
  box-sizing: border-box;
  position: relative;
  font-size: 1.4rem;
  display: inline-block;
}
.community__find-input input {
  background-color: var(--background-color-layer);
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 15px;
  border: 1px solid var(--gray-color);
  color: var(--input-color);
  display: inline-block;
  font-size: 1.4rem;
  height: 40px;
  line-height: 40px;
  outline: none;
  width: 100%;
}
.community__find-input-icon {
  position: absolute;
  left: 5px;
  top: 0;
  color: var(--input-color);
  height: 100%;
  text-align: center;
}
.community__find-input-icon i {
  width: 2.5rem;
  line-height: 40px;
}

.community__pagination {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
</style>
