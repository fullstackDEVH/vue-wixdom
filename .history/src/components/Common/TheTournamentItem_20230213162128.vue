<template>
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
          <div class="the-tournament__list-item-status expired">Expired</div>
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
              <span class="the-tournament-list-item__info__reward-text">-</span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
