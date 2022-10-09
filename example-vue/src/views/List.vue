<script setup lang="ts">
import {ref, onMounted} from "vue";

const loading = ref(true);
const list = ref<any>([]);

function sleep(ms: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchList() {
  await sleep(1000)
  list.value = [1, 2, 3, 4, 5]
  loading.value = false
}

onMounted(() => {
  fetchList()
})

</script>

<template>
  <div class="page">
    <div v-if="loading">__SKELETON_APP_CONTENT__</div>
    <div class="card-list card-list-knowledge" data-skeleton-root="APP" data-skeleton-type="list">
      <div class="card" v-for="item in list" :key="item" data-skeleton-type="block">
        <div class="card_hd">
          <div class="card_no">No.1</div>
          <div class="card_score">2022.09.18</div>
        </div>
        <div class="card_bd">
          <div class="card_tt">五个字标题</div>
          <div class="card_status-finished" data-skeleton-type="sub-block">
            <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.39697 18.7647L18.0146 31L48.6029 5" stroke="#FFE532" stroke-width="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
$knowledge-card-color: #06dcbf;
$action-card-color: #ff9212;

.card-list {
  margin: 0 auto;

  &-knowledge {
    --base-color: #{$knowledge-card-color};
    --background-color: linear-gradient(90deg, #00dabc 0%, #37ead2 100%);
  }

  &-action {
    --base-color: #{$action-card-color};
    --background-color: linear-gradient(90deg, #ff9f63 0%, #fea94d 100%);
  }
}

.card {
  width: 336px;
  margin: 0 auto 20px auto;

  background: #fff;
  color: var(--base-color);
  padding: 14px 19px 14px 14px;
  border-radius: 8px;
  box-shadow: 0 5px 18px 1px #eeeeee;

  &.finished {
    background: var(--background-color);
    box-shadow: 0 5px 18px 1px rgba(0, 0, 0, 0.0664276);
    color: #fff;

    .card_bd {
      //margin-top: 38px;
    }
  }

  &_hd {
    display: flex;
    align-items: center;
  }

  &_no {
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    opacity: 0.8;
  }

  &_score {
    display: flex;
    align-items: center;
    height: 44px;
    margin-left: auto;
  }

  &_type {
    margin-top: 11px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
  }

  &_bd {
    margin-top: 20px;
    display: flex;
    align-items: center;
    height: 24px;
  }

  &_tt {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    margin-right: auto;
  }

  &_status {
    width: 53px;
    height: 28px;
    background: #f5f5f5;
    border-radius: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    text-align: center;

    &-finished {
      width: 42px;
      height: 42px;
      background: var(--base-color);
      border-radius: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.icon-star {
  display: block;
  width: 21px;
  height: 21px;
  color: #ffe532;
}

.icon-right {
  width: 21px;
  height: 13px;
}
</style>
