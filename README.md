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

