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
          <label for="name" class="the-form__item-label">Event name</label>
          <div class="the-form__item-content">
            <div class="the-input">
              <input
                id="name"
                type="text"
                placeholder="Enter your event name"
                autocomplete="off"
                class="the-input-inner"
              />
            </div>
          </div>
        </div>
        <div class="the-form__item is-required" label="Password">
          <label for="name" class="the-form__item-label">Event name</label>
          <div class="the-form__item-content">
            <div class="the-input">
              <input
                id="name"
                type="text"
                placeholder="Enter your event name"
                autocomplete="off"
                class="the-input-inner"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


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
<script lang="ts">
export default {};
</script>