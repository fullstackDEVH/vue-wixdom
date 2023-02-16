<script lang="ts" setup>
import { ref } from "vue";
import { TAGS } from "@/constants";
</script>

<template>
  <div class="the-card">
    <h3 class="the-card__heading">{{ headingContent }}</h3>
    <div class="the-card__body">
      <form action="" class="the-form">
        <div v-if="currentStep === 1">
          <div class="the-form__item is-required" label="Project name">
            <label for="name" class="the-form__item-label">Project name</label>
            <div class="the-form__item-content">
              <div class="the-input">
                <input
                  v-model="dataCard.projectName"
                  type="text"
                  placeholder="Enter your project name"
                  autocomplete="off"
                  class="the-input-inner"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            @click="onClickNextButton()"
            class="the-form__button"
          >
            <span>Next</span>
          </button>
        </div>
        <div v-if="currentStep === 2">
          <div class="the-form__item">
            <div class="the-form__item-content">
              <div class="the-form__checkbox">
                <label
                  v-for="(tag, index) in TAGS"
                  :key="index"
                  class="the-form__checkbox-tag"
                  @click="handleChooseTag(tag)"
                  :class="{ picked: dataCard.tagsList.includes(tag) }"
                >
                  <span class="the-form__checkbox-label">{{ tag }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="gird">
            <div class="row">
              <div class="col l-6">
                <button
                  type="button"
                  @click="onClickPrevButton()"
                  class="the-form__button prev"
                >
                  <span>Previous</span>
                </button>
              </div>
              <div class="col l-6">
                <button
                  type="button"
                  @click="onClickNextButton()"
                  class="the-form__button next"
                >
                  <span>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentStep === 3">
          <div class="the-form__item is-required" label="Twitter username">
            <label for="name" class="the-form__item-label"
              >Twitter username</label
            >
            <div class="the-form__item-content">
              <div class="the-input">
                <input
                  v-model="dataCard.socialMediaName"
                  type="text"
                  placeholder="Enter a username"
                  autocomplete="off"
                  class="the-input-inner"
                />
              </div>
            </div>
          </div>
          <div class="gird">
            <div class="row">
              <div class="col l-6">
                <button
                  type="button"
                  @click="onClickPrevButton()"
                  class="the-form__button prev"
                >
                  <span>Previous</span>
                </button>
              </div>
              <div class="col l-6">
                <button
                  type="button"
                  @click="onClickNextButton()"
                  class="the-form__button next"
                >
                  <span>Skip</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      dataCard: {
        projectName: "",
        tagsList: [] as Array<string>,
        socialMediaName: "",
      },
      message: "",
    };
  },

  props: {
    headingContent: {
      type: String,
      default: "",
    },
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onClickNextButton() {
      if (this.currentStep === 3) {
        this.$emit("onClickNextButton", this.dataCard);
      } else {
        this.$emit("onClickNextButton");
      }
    },
    onClickPrevButton() {
      this.$emit("onClickPrevButton");
    },
    handleChooseTag(tagName: string) {
      const currentTagsList = this.dataCard.tagsList;
      const idxOfTagName = currentTagsList.indexOf(tagName);
      idxOfTagName > -1
        ? currentTagsList.splice(idxOfTagName, 1)
        : currentTagsList.push(tagName);
    },
  },
};
</script>
<style scoped>
.the-card {
  border-radius: 32px;
  background-color: var(--background-item);
  padding: 32px;
  box-sizing: border-box;
}
.the-card__heading {
  font-size: 2.4rem;
  color: var(--white-color);
  font-weight: 700;
  margin-bottom: 0;
  text-align: center;
}
.the-card__body {
  margin-top: 32px;
}

/* The-form CSS here */
.the-form__button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-8);
  overflow: visible;
  color: #fff;
  padding: 12px 20px;
  margin-top: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.1s;
  outline: none;
  user-select: none;
  background: var(--background-color-layer);
  border: 1px solid var(--background-color-layer);
}
.the-form__button.next {
  background: var(--hover-color);
  border: 1px solid var(--hover-color);
}
.the-form__button.prev:hover {
  color: var(--hover-color);
}
.the-form__button span {
  font-size: 1.6rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.the-form__checkbox-tag {
  padding: 4px 12px;
  background-color: #3a3a3c;
  border-radius: 16px;
  line-height: 20px;
  color: #eee;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
}
.the-form__checkbox-tag.picked {
  background-color: var(--hover-color);
}
.the-form__checkbox-tag:not(:last-child) {
  margin-right: 16px;
}
.the-form__checkbox-label {
  padding-left: 0;
  text-align: center;
  line-height: 19px;
  font-size: 14px;
  display: inline-block;
}
</style>