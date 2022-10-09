import {Rule} from 'postcss'

const processedRules = new WeakSet<Rule>()

type PluginOptions = {
  wrapSelector: string
}
const plugin = (opts: PluginOptions) => {
  const {wrapSelector} = opts

  function processRule(rule: Rule) {
    if (processedRules.has(rule)) {
      return
    }
    processedRules.add(rule)
    rule.selector = rewriteSelector(rule)
  }

  function rewriteSelector(rule: Rule): string {
    const selector = rule.selector || ''

    const group: string[] = []
    selector.split(',').forEach(sel => {
      // todo 这里需要排除不在骨架屏中使用的样式
      const re = /\[data-v-.*?\]/igm
      if (re.test(sel)) {
        group.push(wrapSelector + ' ' + sel.replace(re, ''))
      }
    })

    if(!group.length) return selector
    return selector + ', ' + group.join(',')
  }

  return {
    postcssPlugin: 'skeleton-group-selector-plugin',
    Rule(rule: Rule) {
      processRule(rule)
    },
  }
}
plugin.postcss = true

export default plugin
