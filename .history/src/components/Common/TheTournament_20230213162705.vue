<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="the-tournament">
    <div class="the-tournament__profile">
      <img
        src="https://static.wixdomplanet.io/public/images/wxp/Org_Cover_WixdomPlanet.png"
        alt="cover"
        class="the-tournament__profile-cover"
      />
      <div class="the-tournament__profile-inner">
        <img
          src="https://static.wixdomplanet.io/public/images/Logo-wxp.png"
          alt="avatar"
          class="the-tournament__profile-avatar"
        />
        <div class="the-tournament__profile-inner-info">
          <h3 class="the-tournament__profile-inner-info-name">WixdomPlanet</h3>
          <p class="the-tournament__profile-inner-info-desc">
            WixdomPlanet is a D'App that helps projects to acquire new users and
            educate them to become true fans
          </p>
          <div class="the-tournament__profile-inner-info-social">
            <img
              src="https://static.wixdomplanet.io/public/images/social/twitter.jpg"
              alt="wixdomplanet"
              class="the-tournament__profile-inner-info-social-item"
            />
            <img
              src="https://static.wixdomplanet.io/public/images/social/twitter.jpg"
              alt="wixdomplanet"
              class="the-tournament__profile-inner-info-social-item"
            />
          </div>
        </div>
        <div class="the-tournament__profile-inner-sub">
          <div class="the-tournament__event">
            <span class="the-tournament__label">Events</span>
            <span class="the-tournament__text">3</span>
          </div>
        </div>
      </div>
    </div>
    <h3 class="the-tournament__sub-title">Events</h3>
    <div class="the-tournament__list">
      <div class="grid">
        <div class="row"></div>
      </div>
    </div>
    <div class="the-tournament__paginaion">
      <ThePagination></ThePagination>
    </div>
  </div>
</template>
<script lang="ts">
import ThePagination from "./ThePagination.vue";
import TheTournamentItem from "./TheTournamentItem.vue";
export default {
  components: {
    ThePagination,
    TheTournamentItem,
  },
};
</script>
<style scoped>
.the-tournament__profile {
  position: relative;
}
.the-tournament__profile-cover {
  aspect-ratio: 1137/232;
  width: 100%;
  object-fit: cover;
  max-width: 100%;
}
.the-tournament__profile-inner {
  margin-top: -40px;
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
}
.the-tournament__profile-avatar {
  margin-left: 32px;
  border-radius: 50%;
  background-color: var(--white-color);
  width: 164px;
  height: 164px;
  object-fit: contain;
}
.the-tournament__profile-inner-info {
  padding: 52px 16px 16px;
  flex: 1;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
}
.the-tournament__profile-inner-info-name {
  text-align: left;
  color: var(--white-color);
  font-weight: 700;
  margin-bottom: 0;
  font-size: 2.4rem;
}
.the-tournament__profile-inner-info-desc {
  text-align: left;
  margin-top: 4px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--gray-color-community);
  font-weight: 400;
  margin-bottom: 0;
  max-width: 700px;
  white-space: pre-line;
  word-break: break-word;
}
.the-tournament__profile-inner-info-social {
  margin-top: 16px;
  display: flex;
  gap: 0 16px;
}
.the-tournament__profile-inner-info-social-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  border-style: none;
  max-width: 100%;
}
.the-tournament__profile-inner-sub {
  padding: 52px 0 16px;
}
.the-tournament__event {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: var(--main-color);
  border-radius: var(--border-radius-8);
}
.the-tournament__label {
  font-size: 1.4rem;
  color: var(--white-color);
  line-height: 2.4rem;
}
.the-tournament__text {
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 4rem;
  color: var(--white-color);
}
.the-tournament__sub-title {
  color: var(--white-color);
  font-weight: 700;
  text-align: left;
  margin: 16px 0;
  font-size: 2.4rem;
}

.the-tournament__paginaion {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
@media (min-width: 768px) {
  .the-tournament__event {
    width: 156px;
    height: 100px;
  }
}
</style>
