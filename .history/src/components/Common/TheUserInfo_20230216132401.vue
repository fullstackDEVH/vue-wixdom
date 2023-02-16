<template>
  <el-dropdown>
    <div class="header__user">
      <div class="header__user-notification">
        <!-- icon -->
      </div>
      <div class="header__user-info">
        <div class="header__user-info-wrapper">
          <div class="header__user-info-inner">
            <img
              src="https://static.wixdomplanet.io/public/images/avatar/Avatar1.png"
              alt="avatar"
            />
            <span>Hậu Đặng Ngọc</span>
            <arrow-down />
          </div>
        </div>
      </div>
    </div>
  </el-dropdown>
</template>
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
</style>

