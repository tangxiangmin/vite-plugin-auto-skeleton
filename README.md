## vite-plugin-auto-skeleton

这是[使用Chrome扩展程序生成网页骨架屏](https://www.shymean.com/article/使用Chrome扩展程序生成网页骨架屏)的后续研究，研究一种通过vite插件实现骨架屏自动化的方案。

整个项目处于Demo阶段，欢迎交流。

## 开发文档

[vite插件实现骨架屏自动化](https://www.shymean.com/article/vite插件实现骨架屏自动化)

## 效果预览

点击生成骨架屏
![](https://img.shymean.com/oPic/%E7%94%9F%E6%88%90.gif)

首屏访问
![](https://img.shymean.com/oPic/%E9%A6%96%E5%B1%8F%E6%B8%B2%E6%9F%93.gif)

## 示例

参考[example-vue](https://github.com/tangxiangmin/vite-plugin-auto-skeleton/tree/master/example-vue)示例项目，该项目使用vue+vite+unocss构建

## 使用步骤

首先初始化插件

```ts
import { SkeletonPlaceholderPlugin, SkeletonApiPlugin } from "vite-plugin-auto-skeleton/vite"

export default defineConfig({
  plugins: [
    SkeletonPlaceholderPlugin(),
    vue(),
    SkeletonApiPlugin(),
  ],
  build: {
    cssCodeSplit: false
  }
})
```

然后填写占位符，对于首屏渲染的骨架屏，在`index.html`中

```html
<div id="app">__SKELETON_CONTENT__</div>
```

对于页面组件内，需要在数据返回前渲染的骨架屏，通过`loading`变量和`__SKELETON_${data-skeleton-root}_CONTENT__`来处理，其中的`data-skeleton-root`是组件内骨架根节点的属性值

```vue
<!--其中占位符格式为`__SKELETON_${data-skeleton-root}_CONTENT__`-->
<script setup lang="ts">
  import { ref, onMounted } from "vue";
  const loading = ref(true)
  onMounted(() => {
    // 模拟接口请求
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
</script>

<template>
  <div>
    <div v-if="loading">__SKELETON_DEMO_CONTENT__</div>
    <div data-skeleton-root="DEMO" v-else>
      <h1>标题</h1>
      <p>内容内容内容</p>
    </div>
  </div>
</template>
```

接着初始化客户端触发器，同时向页面插入一个可以点击生成骨架屏的按钮

```ts

import { initInject } from 'vite-plugin-auto-skeleton/client'
import 'vite-plugin-auto-skeleton/skeleton.css' // 内置的骨架屏样式，可以自己重写

createApp(App).use(router).mount('#app')

// 开发环境下才注入
if (import.meta.env.DEV) {
  setTimeout(initInject)
}
```

点击触发器，自动将当前页面转换成骨架屏，刷新页面即可看见效果，后续正常打包部署即可。

## 注意事项

由于复用了大部分的原始HTML节点，对应节点的样式类，需要全局可访问，因为vue scoped等样式暂时不支持，该方案目前测试在原子类等全局UI中表现更好。


