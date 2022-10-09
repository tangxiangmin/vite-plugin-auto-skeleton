## vite-plugin-auto-skeleton

这是[使用Chrome扩展程序生成网页骨架屏](https://www.shymean.com/article/使用Chrome扩展程序生成网页骨架屏)的后续研究，研究一种通过vite插件实现骨架屏自动化的方案。

整个项目出于Demo阶段，欢迎交流。

## 开发文档

[vite插件实现骨架屏自动化](https://www.shymean.com/article/vite插件实现骨架屏自动化)

## 效果预览

点击生成骨架屏
![](https://img.shymean.com/oPic/%E7%94%9F%E6%88%90.gif)

首屏访问
![](https://img.shymean.com/oPic/%E9%A6%96%E5%B1%8F%E6%B8%B2%E6%9F%93.gif)

## 使用步骤

首先初始化插件

```ts
import {SkeletonPlaceholderPlugin, SkeletonApiPlugin} from '../src/plugins/vitePlugin'

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

然后填写占位符，对于首屏渲染的骨架屏

```html
<div id="app">__SKELETON_CONTENT__</div>
```

对于组件内的骨架屏

```html
<!--其中占位符格式为`__SKELETON_${data-skeleton-root}_CONTENT__`-->
<div v-if="loading">__SKELETON_APP_CONTENT__</div>
<div class="card-list" data-skeleton-root="APP" data-skeleton-type="list"></div>
```

接着初始化客户端触发器，同时向页面插入一个可以点击生成骨架屏的按钮

```ts
import '../../src/style/skeleton.scss'
import {initInject} from '../../src/inject'

createApp(App).use(router).mount('#app')

// 开发环境下才注入
if (import.meta.env.DEV) {
  setTimeout(initInject)
}
```

点击触发器，自动将当前页面转换成骨架屏，后续正常打包部署即可。
