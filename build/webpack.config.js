const path = require('path');

module.exports = {
  // mode: 'development', // mode参数 设置开发模式或者生产模式
  entry: {
    index: './src/app/index.ts',
    picture: './src/app/picture.ts'
  }, // 入口
  output: {
    filename: '[name].[hash].js', // 文件名+哈希
    path: path.resolve(__dirname,'..', 'dist') // 输出文件绝对路径
  }, // 出口.
  resolve: {
    extensions: ['.ts', '.js']
  }, // 此选项告诉解析器在解析中能够接受哪些扩展名
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  }, // loader 让webpack能够去处理那些非JavaScript文件(将所有类型的文件转化为webpack处理的有效模块)
  plugins: [

  ] // 使用插件作用?
}