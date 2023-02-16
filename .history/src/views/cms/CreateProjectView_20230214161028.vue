<template>
  <div class="__layout">
    <div class="panel-full-layout">
      <div class="panel-full-layout__main">
        <div class="the-header is-fluid">
          <TheUserInfo />
        </div>
        <div class="panel-full-layout__content">
          <div class="create-community__wrapper">
            <div>
              <div class="create-community__content">
                <h2 class="create-community__heading">Create a new project</h2>
                <div class="create-community__step">
                  <TheStep />
                </div>
                <div class="create-community__form">
                  <TheCard
                    :headingContent="headings[currentStep - 1]"
                    :currentStep="currentStep"
                    @onClickNextButton="handleNextStep()"
                    @onClickPrevButton="handlePrevStep()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import TheStep from "@/components/Common/TheStep.vue";
import TheCard from "@/components/Common/TheCard.vue";
import { HEADING_STEP } from "@/constants";

export default {
  data() {
    return {
      currentStep: 1,
      headings: HEADING_STEP,
    };
  },
  components: {
    TheUserInfo,
    TheStep,
    TheCard,
  },
  methods: {
    handleNextStep() {
      if (this.currentStep === 3) {
        this.$router.push({ path: "/cms" });
      } else {
        this.currentStep++;
      }
    },
    handlePrevStep() {
      this.currentStep--;
    },
  },
};
</script>

<style scoped>
.panel-full-layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding-top: var(--header-height);
  position: relative;
  width: 100%;
}
.panel-full-layout__content {
  padding: 24px 0;
  flex: 1;
}
.create-community__wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.create-community__content {
  max-width: 544px;
  margin: 0 auto;
  box-sizing: border-box;
}
.create-community__heading {
  font-size: 3.4rem;
  text-align: center;
  font-weight: 700;
  color: var(--white-color);
  margin-bottom: 0;
}
.create-community__step {
  margin-top: 36px;
}
.create-community__form {
  margin-top: 56px;
}
@media (min-width: 768px) {
  .create-community__content {
    padding: 140px 0;
  }
}
</style>