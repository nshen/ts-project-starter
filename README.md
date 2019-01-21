
npm install --save-dev typescript @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/preset-env @babel/preset-typescript


https://github.com/Microsoft/TypeScript-Babel-Starter

  "devDependencies": {
    "@types/chai": "^3.4.34",
    "@types/mocha": "^2.2.33",
    "chai": "^3.5.0",
    "mocha": "^3.2.0",
    "ts-loader": "^1.3.1",
    "tslint": "^4.0.2",
    "typescript": "^2.1.4",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
  },
  "scripts": {
    "start": "webpack-dev-server --inline",
    "build-src": "webpack",
    "build-test": "tsc -p test-tsconfig.json",
    "build": "npm run build-src && npm run build-test",
    "pretest": "npm run build-test",
    "test": "mocha built/test/**/*.js"
  }
# TypeScript Project Starter

一个干净的 ` vscode + typescript + webpack + mocha + chai` 的开发环境 

## :relaxed: 目录结构

```
|---.vscode  // vscode配置
|---built    // 编译后的js代码都在这里
|---src      // .ts 源文件
|---test     // .test.ts 测试源文件
```

## :relaxed: 命令行

`npm start` 打开 webpack-dev-server 调试

 > http://localhost:8080/index.html

`npm test` 运行用 `typescript` 编写的 Mocha 测试

`npm run build` 发布：发布到built目录下，压缩代码

---

## :relaxed: 如需要 [TsLint](http://palantir.github.io/tslint/)

### 1. 安装vscode-tslint 扩展

https://marketplace.visualstudio.com/items?itemName=eg2.tslint

### 2. 安装tslingt

`npm install -g tslint`

### 3. 在 `.vscode/settings.json` 中配置

```
// Place your settings in this file to overwrite default and user settings.
{
    // tslint.enable - enable/disable tslint.
    "tslint.enable": true,
    // tslint.rulesDirectory - an additional rules directory, for user-created rules.
    // tslint.configFile - the configuration file that tslint should use instead of the default tslint.json.
}
```

### 4. 在跟目录的`tslint.json` 中修改规则

`"indent": [ true,"tabs"]`
            
`"quotemark": [false,"double"]`

