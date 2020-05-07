const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 每次构建前清除输出文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/app/index.ts',
    picture: './src/app/picture.ts'
  }, // 入口
  output: {
    filename: '[name].[hash].js', // 文件名+哈希
    path: path.resolve(__dirname, '..', 'dist') // 输出文件绝对路径
  }, // 出口
  resolve: {
    extensions: ['.ts', '.js']
  }, // 此选项告诉解析器在解析中能够接受哪些扩展名
  node: {
    fs: 'empty', // 跳过 不编译
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  }, // loader 让webpack能够去处理那些非JavaScript文件(将所有类型的文件转化为webpack处理的有效模块)
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/static'),
      to: path.resolve(__dirname, '../dist'),
      ignore: ['.*']
    }]), // 拷贝文件
    new HtmlWebpackPlugin({ // 自动生成html,并且自动导入所有依赖同步包
      filename: 'index.html', // 对应此html模板打包后的文件名
      template: path.resolve(__dirname, '../src', 'index.html'), // html模板路径
      chunks: ['index'] // 对应打包后的html文件引用的js文件
    }),
    new HtmlWebpackPlugin({ // 自动生成html,并且自动导入所有依赖同步包
      filename: 'picture.html', // 对应此html模板打包后的文件名
      template: path.resolve(__dirname, '../src', 'picture.html'), // html模板路径
      chunks: ['picture'] // 对应打包后的html文件引用的js文件
    }),
    new CleanWebpackPlugin(), // 自动定位到输出的文件夹
  ]
};