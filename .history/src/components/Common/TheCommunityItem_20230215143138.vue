<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="col l-3">
    <div class="community__list-item">
      <RouterLink :to="`/tournament/${_id}`" class="community__list-item-link">
        <div class="community-list-item__inner">
          <img :src="image" :alt="name" class="community-list-item__logo" />
          <span class="community-list-item__name"> {{ name }} </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
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
</style>

<script lang="ts">
export default {
  props: {
    _id: {
      type: String,
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>
