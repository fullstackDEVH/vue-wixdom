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
        <div class="row">
          <div class="col l-4 mb-4">
            <RouterLink to="/" class="the-tournament__list-item">
              <div class="the-tournament__list-item__inner">
                <img
                  src="https://static.wixdomplanet.io/public/images/wxp/1136%20x%20320_Banner_Have%20fun%20and%20earn%20tokens_V1.png"
                  alt="img"
                  class="the-tournament__list-item__inner-img"
                />
                <div class="the-tournament__list-item-header">
                  <span>Have fun and earn our NFTs</span>
                  <div class="the-tournament__list-item-status expired">
                    Expired
                  </div>
                </div>
                <div class="the-tournament__list-item-info">
                  <div class="the-tournament__list-item-info__col">
                    <span class="the-tournament-list-item__info__label">
                      Reward
                    </span>
                    <div class="the-tournament-list-item__info__reward">
                      <img
                        src="https://static.wixdomplanet.io/public/images/wxp/nft.png"
                        alt="icon"
                        class="the-tournament-list-item__info__reward-icon"
                      />
                      <span class="the-tournament-list-item__info__reward-text"
                        >NFT</span
                      >
                    </div>
                  </div>
                  <div class="the-tournament__list-item-info__col col-center">
                    <span class="the-tournament-list-item__info__label">
                      Participants
                    </span>
                    <div class="the-tournament-list-item__info__reward">
                      <img
                        src="https://wxp.wixdomplanet.io/images/ic_person.svg"
                        alt="icon"
                        class="the-tournament-list-item__info__reward-icon"
                      />
                      <span class="the-tournament-list-item__info__reward-text"
                        >10/20</span
                      >
                    </div>
                  </div>
                  <div class="the-tournament__list-item-info__col col-end">
                    <span class="the-tournament-list-item__info__label">
                      Duration
                    </span>
                    <div class="the-tournament-list-item__info__reward">
                      <img
                        src="https://wxp.wixdomplanet.io/images/ic_time.svg"
                        alt="icon"
                        class="the-tournament-list-item__info__reward-icon"
                      />
                      <span class="the-tournament-list-item__info__reward-text"
                        >-</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="the-tournament__paginaion">
      <ThePagination></ThePagination>
    </div>
  </div>
</template>
<script lang="ts">
import ThePagination from "./ThePagination.vue";
export default {
  components: {
    ThePagination,
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
.the-tournament__list-item {
  border-radius: 12px;
  padding: 2px;
  cursor: pointer;
  background: var(--background-item);
  position: relative;
  z-index: 1;
  height: 100%;
  display: block;
  color: var(--gray-color-community);
  transition: color 0.3s ease;
}
.the-tournament__list-item__inner {
  border-radius: 12px;
  padding: 12px;
  background: var(--background-item);
  height: 100%;
  display: flex;
  flex-direction: column;
}
.the-tournament__list-item__inner-img {
  border-radius: 8px;
  aspect-ratio: 333/156;
  object-fit: cover;
  border-style: none;
  max-width: 100%;
}
.the-tournament__list-item-header {
  display: flex;
  align-items: center;
}
.the-tournament__list-item-header span {
  margin-top: 12px;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.6rem;
  color: var(--white-color);
  margin-bottom: 16px;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  word-break: break-word;
  -webkit-line-clamp: 2;
  display: -webkit-box;
}
.the-tournament__list-item-info {
  margin-top: auto;
  display: flex;
}
.the-tournament__list-item-info__col {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.col-center {
  align-items: center;
}
.col-end {
  align-items: flex-end;
}
.the-tournament-list-item__info__label {
  color: var(--gray-color-community);
  font-size: 1.2rem;
  line-height: 1.6rem;
}
.the-tournament-list-item__info__reward {
  display: flex;
  align-items: end;
}
.the-tournament-list-item__info__reward-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-style: none;
  max-width: 100%;
}
.the-tournament-list-item__info__reward-text {
  margin-top: 4px;
  color: #dddde5;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
}
.the-tournament__list-item-status {
  background-color: #f5f5f5;
  color: #3a3a3c;
  font-size: 12px;
  line-height: 20px;
  padding: 2px 8px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.mb-4 {
  margin-bottom: 24px;
}
.the-tournament__list-item:hover {
  color: var(-hover-color);
  background: var(--main-color);
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
