import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		VitePluginSvgSpritemap('./src/assets/*.svg',{
			styles: {
				lang: 'scss',
				filename: './src/scss/spritemap.scss'
			},
		})
	],
})