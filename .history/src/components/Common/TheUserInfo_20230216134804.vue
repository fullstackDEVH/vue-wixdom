<template>
  <div class="header__user">
    <div class="header__user-notification">
      <!-- icon -->
    </div>
    <div class="header__user-info">
      <div @click="handleShowDropDown()" class="header__user-info-wrapper">
        <div class="header__user-info-inner">
          <img
            src="https://static.wixdomplanet.io/public/images/avatar/Avatar1.png"
            alt="avatar"
          />
          <span>Hậu Đặng Ngọc</span>
          <fa class="header__user-info-icon" icon="sort-down" />
        </div>
      </div>
      <ul :class="{ hidden: isShowDropDown }" class="dropdown-menu">
        <li class="dropdown-menu__item">
          <fa class="dropdown-menu__item-icon" icon="user" />
          <span>Me</span>
        </li>
        <li class="dropdown-menu__item dropdown-menu__item--divided">
          <fa class="dropdown-menu__item-icon" icon="right-from-bracket" />
          <span>Logout</span>
        </li>
        <div class="popper__arrow"></div>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let isShowDropDown = false;
    const handleShowDropDown = () => {
      isShowDropDown = !isShowDropDown;
    };
    return {
      // count,
      handleShowDropDown,
      isShowDropDown,
    };
  },
});
</script>

<style scoped>
.header__user {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
}
.header__user-info {
  margin-left: 16px;
  position: relative;
}
.header__user-info-wrapper {
  border-radius: 25px;
  padding: 2px;
  background: var(--main-color);
  max-width: 200px;
}
.header__user-info-inner {
  border-radius: 25px;
  padding: 6px 16px 6px 6px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  cursor: pointer;
}
.header__user-info-inner img {
  border-radius: 50%;
  object-fit: cover;
  width: 32px;
  height: 32px;
}
.header__user-info-inner span {
  -webkit-line-clamp: 1;
  display: -webkit-box;
  color: var(--white-color);
  font-size: 14px;
  margin-left: 12px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: inherit;
  word-break: break-word;
  margin-right: 10px;
}
.header__user-info-icon {
  display: block;
  font-size: 1.4rem;
  color: var(--hover-color);
  height: 16px;
  transform: translateY(-20%);
}
.dropdown-menu {
  display: block;
  position: absolute;
  background-color: #2c2c2e;
  border-radius: 12px;
  padding: 16px;
  min-width: 200px;
  top: 64px;
}
.dropdown-menu__item {
  border-radius: 4px;
  margin-top: 0;
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 1.4rem;
  color: #eee;
  cursor: pointer;
  outline: none;
}
.dropdown-menu__item-icon {
  margin-right: 5px;
}
.dropdown-menu__item--divided {
  border-radius: 0px;
  position: relative;
  margin-top: 0px;
  border-top: 1px solid #ebeef5;
}
.dropdown-menu__item:hover {
  background: linear-gradient(239deg, #3262dd, #7af4ae 98.78%);
  color: #fcfcfc;
}
.dropdown-menu__item--divided:hover {
  border-radius: 4px;
}
.popper__arrow {
  position: absolute;
  left: 103.281px;
  top: -6px;
  margin-right: 3px;
  border-top-width: 0;
  border-bottom-color: #121820;
}
.popper__arrow::after {
  content: " ";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 6px;
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #222933;
}
.hidden {
  display: none;
}
</style>

