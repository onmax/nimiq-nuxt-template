import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
      attributifyUtilities: true,
      icons: false,
      scrollbar: true
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
