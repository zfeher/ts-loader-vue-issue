const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, options) => {
  return {
    entry: './src/Stuff.vue',

    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              declaration: false,
              declarationDir: undefined,
              declarationMap: undefined,
            },
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
      ],
    },

    externals: ['vue'],

    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
    },

    output: {
      publicPath: '/',
      filename: '[name].js',
    },

    plugins: [new VueLoaderPlugin()],
  }
}
