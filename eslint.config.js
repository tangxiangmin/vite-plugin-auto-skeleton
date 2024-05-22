import antfu from '@antfu/eslint-config'
import { createESLintConfig } from 'eslint-config-shymean'

export default antfu(createESLintConfig({ vue: false }))
