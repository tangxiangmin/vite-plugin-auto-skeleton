import $ from 'jquery'

import {
  renderBackgroundImage,
  renderBlock,
  renderBorder,
  renderButton,
  renderIgnore,
  renderImg,
  renderInput,
  renderList,
  renderListItem,
  renderSubBlock,
  renderText,
} from './strategy'


import { KEY, KEY_EXCLUDE, SKELETON_TYPE } from './constant'

const { IGNORE, TEXT, IMAGE, BLOCK, SUB_BLOCK, BORDER, LIST, BUTTON, BACKGROUND_IMAGE, INPUT, LIST_ITEM } = SKELETON_TYPE

function checkNodeVisible($node: JQuery) {
  //  校验各种不可见的情况
  // https://segmentfault.com/q/1010000020091228
  return $node.css('display') !== 'none'
}

function hasBorder($node: JQuery) {
  const style = $node.css('border-width')
  return style && style !== '0px'
}

function hasBackgroundImage($node: JQuery) {
  const re = /url/ // 处理背景图片
  const background = $node.css('background')
  return re.test(background)
}

function isImage(node: Element) {
  return node.tagName === 'IMG'
}

function isList(node: Element) {
  return node.children.length > 0 && /UL|OL/.test(node.tagName)
}

function isText(node: Element) {
  return node.childNodes
    // node.childNodes.length === 1 &&
    && node.childNodes[0] && node.childNodes[0].nodeType === 3
    && /\S/.test(node.childNodes[0]?.textContent as string)
}

function isButton(node: Element) {
  // 需要按照规范编写语义化的代码
  return node.nodeType === 1
    && (node.tagName === 'BUTTON' || (node.tagName === 'A' && node.getAttribute('role') === 'button'))
}

function isInput(node: Element) {
  if (node.tagName === 'INPUT') {
    const type = node.getAttribute('type') as string
    return ['text', 'password', 'search'].includes(type)
  }
  return false
}

function isSVG(node: Element) {
  return node.tagName === 'SVG'
}

function getNodeSkeletonType($dom: JQuery) {
  const node = $dom[0]
  if (!node) return

  // 按照常见优先级指定对应type
  if (isInput(node)) {
    return INPUT
  }

  if (hasBorder($dom)) {
    return BORDER
  }
  if (hasBackgroundImage($dom)) {
    return BACKGROUND_IMAGE
  }

  if (isImage(node) || isSVG(node)) {
    return IMAGE
  }

  if (isList(node)) {
    return LIST
  }

  if (isButton(node)) {
    return BUTTON
  }

  // 把文本节点处理放在最后面
  if (isText(node)) {
    return TEXT
  }
}

function replaceTextNode($dom: JQuery) {
  const type = $dom.attr(KEY)
  if (type === TEXT) return
  // 文本节点
  const $texts = $dom.contents().filter(function () {
    return this.nodeType === 3 // 文本节点
  })
  $texts.each(function () {
    const node = this
    const $this = $(this)
    // 过滤空文本
    if (!$this.text().trim()) {
      return
    }
    // 使用一个内联元素包裹起来，方便渲染对应宽度的背景颜色
    const span = document.createElement('span')

    const $span = $(span)
    $span.attr(KEY, TEXT)
    $span.insertAfter($this)
    $this.remove()

    span.appendChild(node)
  })
}


// 遍历DOM，根据节点类型执行对应的渲染逻辑
function preorder($dom: JQuery) {
  replaceTextNode($dom)

  // 排除不可见的元素
  if (!checkNodeVisible($dom)) {
    return
  }

  const type = ($dom.attr(KEY) || getNodeSkeletonType($dom)) as SKELETON_TYPE // 自动检测节点类型，并附上type

  const excludeType = $dom.attr(KEY_EXCLUDE)

  if (!excludeType || type !== excludeType) {
    const handlers = {
      [TEXT]: renderText,
      [IMAGE]: renderImg,
      [BLOCK]: renderBlock,
      [SUB_BLOCK]: renderSubBlock,
      [BORDER]: renderBorder,
      [BUTTON]: renderButton,
      [LIST]: renderList,
      [LIST_ITEM]: renderListItem,
      [BACKGROUND_IMAGE]: renderBackgroundImage,
      [INPUT]: renderInput,
      [IGNORE]: renderIgnore,
    }

    const handler = handlers[type]
    handler && handler($dom)
    // 不再执行后面的模块
    if ([SUB_BLOCK].includes(type)) {
      $dom.empty()
      return
    }
  }

  // 元素节点
  $dom.children().each(function () {
    const $this = $(this)
    // 递归
    preorder($this)
  })
}

interface SkeletonConfig {
  selector: any
  ignore: any
}

function preset(config: SkeletonConfig) {
  const { selector = {}, ignore } = config

  // 提前设置一些类型参数
  for (const key of Object.keys(selector)) {
    const { include, exclude } = selector[key]
    include && $(include).attr(KEY, key)
    exclude && $(exclude).attr(KEY_EXCLUDE, key)
  }

  ignore && $(ignore).attr(KEY, IGNORE)
}

export function renderSkeleton(sel: string, config: SkeletonConfig) {
  const $root = $(sel).eq(0)
  $root.addClass('sk')

  preset(config)

  preorder($root)

  const name = $root.attr('data-skeleton-root')
  const content = $root.prop('outerHTML')

  return {
    name: `__SKELETON_${name}_CONTENT__`,
    content,
  }
}

export default {
  SKELETON_TYPE,
  KEY,
}
