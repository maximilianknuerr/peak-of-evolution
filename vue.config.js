const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/peak-of-evolution/'
    : '/',
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
      theme: {
        options: {
          customProperties: true
        },
        light: true,
        themes: {
          light: {
            background: '#EBE5D2',
          }
        }
      }
		}
  }
})
