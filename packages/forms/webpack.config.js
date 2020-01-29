const path = require('path');
const webpack = require('webpack');

const config = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'production',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]',
      append: null,
      module: true,
      columns: true,
      lineToLine: false,
      noSources: false,
      namespace: ''
    })
  ]
};

const mainConfig = Object.assign({}, config, {
  name: 'main',
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: '@while-and-for/forms',
    libraryTarget: 'umd'
  },
  externals: {
    antd: 'antd',
    '@ant-design': '@ant-design',
    formik: 'formik',
    moment: 'moment',
    react: 'react',
    'react-dom': 'reactDOM',
    'styled-components': 'styled-components'
  }
});

module.exports = [mainConfig];
