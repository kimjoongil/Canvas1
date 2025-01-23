const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development', //production(배포용), development(개발용)
    //entry: './src/index.js',
    entry:{
        index : './src/index.js'
    },  //모든 스크립트를 작성할 곳, 입구
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename: 'bundle.js',
        filename: '[name].js', //index.js
    },
    devServer:{
        static:'./dist/'
    },
    plugins:[new HtmlWebpackPlugin({
        template: './src/index.html', //번들전 html
        filename: './index.html', //번들후 html
        hash: true, //모든스크립트, css 캐시 무효화
        showErrors: true, //에러 발생시 html에 에러 메시지 표시        
    })],
};