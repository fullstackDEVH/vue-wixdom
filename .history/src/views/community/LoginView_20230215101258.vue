<template>
  <div class="auth">
    <div class="auth__left">
      <div class="auth__banner">
        <img
          src="https://static.wixdomplanet.io/public/images/login_background.png"
          alt="banner"
          class="auth__banner-img"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css">
.auth {
  display: flex;
  height: 100%;
}
.auth__left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  position: relative;
  overflow: hidden;
}
.auth__banner {
  z-index: 1;
  width: 100%;
  height: 100%;
}
.auth__banner-img {
  object-fit: cover;
  height: inherit;
  width: inherit;
}
</style>

<script lang="ts">
export default {};
</script>