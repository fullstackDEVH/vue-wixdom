<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="the-sidebar">
    <div class="the-sidebar__logo">
      <RouterLink to="/">
        <img
          src="https://wxp.wixdomplanet.io/images/logo_horizontal.png"
          alt="logo"
        />
      </RouterLink>
    </div>
    <ul class="the-sidebar__menu">
      <li
        v-for="(item, index) in menu"
        :key="index"
        class="the-sidebar__menu-item"
        @click="handleActiveTab(index)"
        :class="{ 'is-active': isActive === index }"
      >
        <div class="the-sidebar__menu-link">
          <fa :icon="`${item.icon}`" class="the-sidebar__menu-icon" />
          <span>{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import type { PropType } from "vue";
import type IMenu from "@/interfaces/IMenu";
export default {
  props: {
    menu: {
      type: [] as Array<IMenu>,
    },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    handleActiveTab(idx: number) {
      this.isActive = idx;
      this.$emit("onChangePath", this.menu[idx].path);
    },
  },
};
</script>
<style scoped>
.the-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  border-right: var(--border);
  padding: 32px 16px;
  z-index: 51;
  overflow-y: auto;
  transition: all 0.3s ease;
}
.the-sidebar__logo {
  text-align: center;
}
.the-sidebar__logo a {
  display: inline-block;
}
.the-sidebar__logo a img {
  height: 60px;
  max-width: 100%;
}
.the-sidebar__menu {
  margin-top: 48px;
  margin-bottom: 16px;
}
.the-sidebar__menu-link {
  padding: 15px;
  border-radius: var(--border-radius-8);
  display: flex;
  align-items: center;
  color: var(--white-color);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  cursor: pointer;
}
.the-sidebar__menu-icon {
  font-size: 1.6rem;
  z-index: 2;
}
.the-sidebar__menu-link::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  z-index: 1;
  transition: all 0.3s ease;
  background: var(--main-color);
}
.the-sidebar__menu-item.is-active div::before {
  background: var(--main-color);
  opacity: 1;
}
.the-sidebar__menu-link span {
  font-size: 1.4rem;
  margin-left: 12px;
  z-index: 2;
}
</style>