<template>
  <div class="col l-4 mb-4">
    <RouterLink
      :to="`/community/events/${_id}`"
      class="the-tournament__list-item"
    >
      <div class="the-tournament__list-item__inner">
        <img
          :src="banner"
          alt="img"
          class="the-tournament__list-item__inner-img"
        />
        <div class="the-tournament__list-item-header">
          <span>{{ name }}</span>
          <div class="the-tournament__list-item-status expired">
            {{ status }}
          </div>
        </div>
        <div class="the-tournament__list-item-info">
          <div class="the-tournament__list-item-info__col">
            <span class="the-tournament-list-item__info__label"> Reward </span>
            <div class="the-tournament-list-item__info__reward">
              <img
                src="https://static.wixdomplanet.io/public/images/wxp/nft.png"
                alt="icon"
                class="the-tournament-list-item__info__reward-icon"
              />
              <span class="the-tournament-list-item__info__reward-text">{{
                reward
              }}</span>
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
                >{{ currentParticipants }} / {{ limitParticipants }}</span
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
              <span class="the-tournament-list-item__info__reward-text">{{
                duration
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
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
</style>
<script lang="ts">
export default {
  props: {
    _id: {
      type: String,
    },
    name: {
      type: String,
    },
    status: {
      type: String,
    },
    banner: {
      type: String,
    },
    currentParticipants: {
      type: Number,
    },
    limitParticipants: {
      type: Number,
    },
    duration: {
      type: String,
    },
    reward: {
      type: String,
    },
  },
};
</script>