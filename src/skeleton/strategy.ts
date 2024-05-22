import { LIST_NUM } from './constant'

// todo 处理哪些使用px的地方
export function renderText($dom: JQuery) {
  const fontSize = Number.parseFloat($dom.css('font-size'))
  let lineHeight: string | number = $dom.css('line-height')

  // todo 处理浏览器默认行高、包含继承、自定义等属性
  if (lineHeight === 'normal') {
    lineHeight = fontSize * 1.4
  } else {
    lineHeight = Number.parseFloat(lineHeight)
  }

  const textHeightRatio = fontSize / lineHeight
  const firstColorPoint = (((1 - textHeightRatio) / 2) * 100).toFixed(2)
  const secondColorPoint = (((1 - textHeightRatio) / 2 + textHeightRatio) * 100).toFixed(2)

  // const style = `--fp:${firstColorPoint}%;--sp:${secondColorPoint}%;--lh:${(lineHeight / fontSize).toFixed(2)};`;
  const style = `--fp:${firstColorPoint}%;--sp:${secondColorPoint}%;--lh:${lineHeight}px;`
  $dom.addClass('sk-text')
  $dom.attr('style', style)
}

export function renderImg($dom: JQuery) {
  const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  $dom.attr('src', emptyImage)

  $dom.css({
    background: '#eee',
  })
}

export function renderBlock($dom: JQuery) {
  $dom.addClass('sk-block')
}

export function renderSubBlock($dom: JQuery) {
  $dom.addClass('sk-sub-block')
  $dom.empty()
}

export function renderBorder($dom: JQuery) {
  $dom.addClass('sk-border')
}

export function renderButton($dom: JQuery) {
  $dom.addClass('sk-button')
}

export function renderList($dom: JQuery) {
  $dom.addClass('sk-list')

  const $children = $dom.children()
  const $child = $children.first()
  const len = $children.length

  const num = Number.parseInt($dom.attr(LIST_NUM) as string, 10) || len

  // 列表元素子节点统一，保证页面骨架整齐
  for (let i = 1; i < len; ++i) {
    $children.eq(i).remove()
  }
  for (let i = 1; i < num; i++) {
    const tmp = $child.clone(true)
    $dom.append(tmp)
  }
}

export function renderListItem($dom: JQuery) {
  $dom.addClass('sk-list-item')
}

export function renderBackgroundImage($dom: JQuery) {
  $dom.addClass('sk-bg')
}

export function renderInput($dom: JQuery) {
  $dom.addClass('sk-input')
}

export function renderIgnore($dom: JQuery) {
  $dom.addClass('sk-ignore')
}
