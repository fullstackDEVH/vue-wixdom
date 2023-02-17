<template>
  <div class="the-login">
    <div class="the-login__header">
      <img
        src="https://wxp.wixdomplanet.io/images/logo.png"
        alt="logo"
        class="the-login__logo"
      />
    </div>
    <div class="the-login__description">
      <h2 class="the-heading--center auth__title">Welcome to my community</h2>
    </div>
    <div class="the-login__form">
      <form action="">
        <div class="the-form__item is-required" label="Username">
          <label for="username" class="the-form__item-label">Username</label>
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
          <label for="password" class="the-form__item-label">Password</label>
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
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const dataLogin = {
      userName: "",
      password: "",
    };
    const handleClickLogin = () => {
      //const { userName, password } = dataLogin;
      store.dispatch("login");
      router.push({ path: "/" });
      // const usernameRoleEntry = "user_entry";
      // const passwordRoleEntry = "123";
      // if (
      //   userName.trim() === usernameRoleEntry &&
      //   password.trim() === passwordRoleEntry
      // ) {
      //   store.dispatch("login");
      //   router.push("/");
      // } else {
      //   store.dispatch("changeUserRole", { role: "checker" });
      //   router.push("/dashboard");
      // }
    };

    return {
      dataLogin,
      handleClickLogin,
    };
  },
});
</script>



<style lang="css">
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
</style>
