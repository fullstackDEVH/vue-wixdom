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
              <TheTournamentItem
                v-for="community in communities"
                :key="community._id"
                :name="community.name"
                :_id="community._id"
                :banner="community.image"
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
// import TheCommunityItem from "@/components/Common/TheCommunityItem.vue";
export default {
  components: {
    ThePagination,
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
.community__list {
  margin-top: 8px;
}
.community__list-item {
  margin-top: 24px;
}
.community__list-item-link {
  border-radius: var(--border-radius-8);
  background: var(--background-item);
  color: var(--gray-color-community);
  padding: 2px;
  cursor: pointer;
  display: block;
  height: 100%;
  transition: color 0.3s ease;
}
.community__list-item-link:hover {
  background: var(--main-color);
  color: var(--hover-color);
}
.community-list-item__inner {
  border-radius: var(--border-radius-8);
  background: var(--background-item);
  padding: 32px 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.community-list-item__logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.community-list-item__name {
  -webkit-line-clamp: 2;
  display: -webkit-box;
  margin-top: 24px;
  font-size: 2rem;
  line-height: 26px;
  color: var(--white-color);
  text-align: center;
  word-break: break-word;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.community__pagination {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
</style>
