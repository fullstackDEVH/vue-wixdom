<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="col l-3">
    <div class="community__list-item">
      <RouterLink
        :to="`/community/tournament/${_id}`"
        class="community__list-item-link"
      >
        <div class="community-list-item__inner">
          <img :src="banner" :alt="name" class="community-list-item__logo" />
          <span class="community-list-item__name"> {{ name }} </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    _id: {
      type: String,
    },
    name: {
      type: String,
    },
    banner: {
      type: String,
    },
  },
};
</script>
