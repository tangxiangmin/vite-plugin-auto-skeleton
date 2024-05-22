<template>
  <div class="p-10px">
    <div v-if="loading">__SKELETON_MEDIA_CONTENT__</div>
    <div data-skeleton-root="MEDIA" v-else>
      <div class="flex flex-center justify-between">
        <div class="w-50px h-50px rounded-50px">
          <img src="http://placekitten.com/200/200" class="block w-full h-full" alt=""/>
        </div>
        <input type="text" class="w-100px h-30px mx-10px" placeholder="搜索">
        <nav>
          <ul class="flex list-none">
            <li class="px-20px leading-30px text-center">首页</li>
            <li class="px-20px leading-30px text-center">我的</li>
          </ul>
        </nav>
      </div>
      <main>
        <h1 class="my-20px text-50px leading-60px mb-20px">测试标题</h1>
        <div data-skeleton-type="list">
          <div class="flex items-start my-20px p-10px border-1px border-solid border-[#000]">
            <img src="http://placekitten.com/200/200" class="w-80px h-80px mr-20px flex-shrink-0" alt=""/>
            <div class="">
              <div class="text-20px leading-[1.5] mb-6px">大标题</div>
              <div class="text-14px leading-[1.5]" data-skeleton-type="text">
                这里是几行文字这里是几行文字这里字这里是几几行<span class="text-red-600">文字这里</span>
              </div>
            </div>
          </div>
          <div class="flex items-start my-20px p-10px border-1px border-solid border-[#000]">
            <img src="http://placekitten.com/200/200" class="w-80px h-80px mr-20px flex-shrink-0" alt=""/>
            <div class="media_mn">
              <div class="text-20px leading-[1.5] mb-6px">大标题胜多负少的</div>
              <div class="text-14px leading-[1.5]">
                这里是几行文字这里是几行文字这里字这里是几行文字这里是几行文字这里是几行<span class="text-red-600">文字这里</span>
              </div>
            </div>
          </div>
        </div>


        <ul class="ml-20px">
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
        </ul>
        <button class="mt-20px w-full h-50px p-0 leading-50px border-none text-white bg-blue-300 rounded-5px">click</button>
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
