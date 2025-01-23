# WEBPACK 설치

### WEBPACK, Command Line Interface
웹팩 설치[`WEBPACK`](https://webpack.js.org/)



```bash
npm init -y
npm install webpack webpack-cli --save-dev
```


> webpack.config.js 생성 **_Code 추가_**

```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
```


> webpack.config.js - **_Code 추가_**
```javascript
//module.export 에 추가
mode:'development', //production(배포용), development(개발용)
entry: './src/index.js' //모든 스크립트를 작성할 곳, 입구
```

여러개의 javascirpt를 사용할경우
```javascript
//module.export 에 추가
entry:{
    index : './src/index.js'
}  //모든 스크립트를 작성할 곳, 입구
```

> webpack.config.js - **_Code 수정_**

Output 의 filename 에 [name]을 지정하면 entry의 index 라는 속성명을 받아옴
```javascript
//module.export 의 output 에 추가
//filename: 'bundle.js',
filename: '[name].js',
```


> node의 서버 설치 
```bash
npm install webpack-dev-server --save-dev
```
package.json 확인 : "webpack-dev-server": "^5.2.0"

>  webpack.config.js - **_Code 수정_** : 
devServer 가 오픈할 위치
```javascript
//module.export 에 추가
devServer:{
    static:'./dist/'
},
```

html 파일을 생성하고 번들링 하고 싶은경우
https://webpack.js.org/ 에서 Html-webpack-plugin 검색

```bash
npm install --save-dev html-webpack-plugin
```

> webpack.config.js - **_Code 수정_**
```javascript
// 상단추가
const HtmlWebpackPlugin = require('html-webpack-plugin');
...
//module.export 에 추가
plugins:[new HtmlWebpackPlugin({
    template: './src/index.html', //번들전 html
    filename: './index.html', //번들후 html
    hash: true, //모든스크립트, css 캐시 무효화
    showErrors: true, //에러 발생시 html에 에러 메시지 표시        
})],

```

> package.json - **_Code 추가_**
```javascript
"scripts": {
    "build": "webpack",
    "start": "webpack serve --open"    
  },
```

> src/index.html 생성

> src/index.js - _Code 추가_


```bash
npm start //먼저 확인하고
npm run build //이상없을경우
```



# WEBPACK 설정(Loader, Plugin)

### Loader 설치 (webpack.kr 검색)
- style-loader : 빌드시에 <style></style> 태그안에 생성
- css-loader : css파일 불러오기

```bash
npm install --save-dev style-loader css-loader
```

> webpack.config.js - **_Code 추가_**
```javascript
//module.export 에 추가
rules: [
    {
        test: /\.css$/, //확장자가 css로 끝나는 파일 선택
        use: ["style-loader", "css-loader"], //로딩순서는 오른쪽 부터
        },
    ],
```

- MiniCssExtractPlugin 설치
```bash
npm install --save-dev mini-css-extract-plugin
```

> webpack.config.js - **_Code 추가_**
```javascript
//상단추가
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
...
//module.export 에 추가
plugins: [new MiniCssExtractPlugin()],

```

- Clean-webpack-plugin : dist 폴더에 자동생성된 파일 정리
```bash
npm install --save-dev clean-webpack-plugin
```

> webpack.config.js - **_Code 추가_**
```javascript

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
...
plugins:[
    ...
new CleanWebpackPlugin(), //웹팩실행(build) 할때 마다 dist 폴더 청소
...

module: {
        rules: [
            ...
        exclude: /node_modules/,
```




- entry 추가가

