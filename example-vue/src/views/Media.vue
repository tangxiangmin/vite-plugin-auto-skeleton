<template>
  <div class="page">
    <div v-if="loading">__SKELETON_MEDIA_CONTENT__</div>
    <div data-skeleton-root="MEDIA" v-else>
      <div class="header">
        <div class="logo"></div>
        <!--    <img src="http://placekitten.com/200/200" class="logo" alt=""/>-->
        <input type="text" class="search" placeholder="搜索">
        <nav>
          <ul class="nav">
            <li class="nav_item">首页</li>
            <li class="nav_item">我的</li>
          </ul>
        </nav>
      </div>
      <main>
        <h1 class="title">测试标题</h1>

        <div data-skeleton-type="list">
          <div class="media">
            <img src="http://placekitten.com/200/200" class="media_img" alt=""/>
            <div class="media_mn">
              <div class="media_tt">大标题</div>
              <div class="media_ct" data-skeleton-type="text">
                这里是几行文字这里是几行文字这里字这里是几几行<span class="text-red">文字这里</span>
              </div>
            </div>
          </div>
          <div class="media">
            <img src="http://placekitten.com/200/200" class="media_img" alt=""/>
            <div class="media_mn">
              <div class="media_tt">大标题胜多负少的</div>
              <div class="media_ct">
                这里是几行文字这里是几行文字这里字这里是几行文字这里是几行文字这里是几行<span class="text-red">文字这里</span>
              </div>
            </div>
          </div>
        </div>


        <ul class="list">
          <li class="list_item">列表1</li>
          <li class="list_item">列表2</li>
          <li class="list_item">列表3</li>
        </ul>
        <button class="btn">click</button>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<style scoped lang="scss">
.page {
  padding: 10px;
}

.wrap {
  font-size: 15px;
  line-height: 30px;
  width: 160px;
  border: 1px solid #dedede;
  margin-bottom: 20px;
}

.media {
  display: flex;
  align-items: flex-start;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #000;
}

.media_img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  flex-shrink: 0;
}

.media_tt {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 6px;
}

.media_ct {
  font-size: 14px;
  line-height: 1.5;
}

.test {
  height: 30px;
  width: 160px;
  margin-bottom: 20px;
  border: 1px solid #000;
  background-image: linear-gradient(red 25%,
      blue 25%,
      blue 75%,
      red 75%);
}

.text-red {
  color: red
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: url("http://placekitten.com/200/200") no-repeat center;
  background-size: contain;

}

.nav {
  display: flex;
}

.nav_item {
  list-style: none;
  padding: 0 20px;
  line-height: 30px;
  text-align: center;
}

.btn {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  padding: 0;
  line-height: 50px;
  border: none;
  color: #fff;
  background-color: royalblue;
  border-radius: 5px;
}

.title {
  margin: 20px 0;
  font-size: 50PX;
  font-weight: 400;
  line-height: 1;
}

.search {
  width: 100px;
  height: 30px;
  margin: 0 10px;
}

.list {
  margin-left: 20px;
}
</style>
