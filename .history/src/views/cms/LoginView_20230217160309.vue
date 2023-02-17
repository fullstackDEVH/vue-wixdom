<script lang="ts" setup>
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
        <div class="the-login">
          <div class="the-login__header">
            <img
              src="https://wxp.wixdomplanet.io/images/logo.png"
              alt="logo"
              class="the-login__logo"
            />
          </div>
          <div class="the-login__description">
            <h2 class="the-heading--center auth__title">
              Welcome to my community
            </h2>
          </div>
          <div class="the-login__form">
            <form action="">
              <div class="the-form__item is-required" label="Username">
                <label for="username" class="the-form__item-label"
                  >Username</label
                >
                <div class="the-form__item-content">
                  <div class="the-input">
                    <input
                      v-model="dataLogin.userName"
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      autocomplete="off"
                      class="the-input-inner"
                    />
                  </div>
                </div>
              </div>
              <div class="the-form__item is-required" label="Password">
                <label for="password" class="the-form__item-label"
                  >Password</label
                >
                <div class="the-form__item-content">
                  <div class="the-input">
                    <input
                      v-model="dataLogin.password"
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      autocomplete="off"
                      class="the-input-inner"
                    />
                  </div>
                </div>
              </div>
              <button
                @click="handleClickLogin()"
                type="button"
                class="the-button auth"
              >
                <span>Login</span>
              </button>
            </form>
          </div>
        </div>
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
.the-login__header {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.the-login__logo {
  width: 277px;
  height: auto;
  border-style: none;
  max-width: 100%;
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