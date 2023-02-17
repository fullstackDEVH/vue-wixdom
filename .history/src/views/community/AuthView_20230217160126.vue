<script setup>
import TheLogin from "@/components/Common/TheLogin.vue";
</script>
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
    <div class="auth__right">
      <div class="auth__form">
        <TheLogin />
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
  max-width: 100%;
}
.auth__right {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.auth__form {
  text-align: center;
  margin-top: 64px;
}
@media (min-width: 768px) {
  .auth__right {
    padding: 64px 80px;
  }
}
</style>

<script lang="ts">
export default {
  components: {
    TheLogin,
  },
};
</script>