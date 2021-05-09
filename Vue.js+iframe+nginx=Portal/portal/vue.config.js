
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
  runtimeCompiler: true,
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify',
  ],
};