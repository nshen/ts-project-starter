# typescript + webpack + mocha + chai 工作流模板 



:relaxed: 开发：自动编译

`npm start`

http://localhost:8080/webpack-dev-server/bundle

:relaxed: Mocha测试：用`typescript`写测试

`npm test`


:relaxed: 发布：发布到build目录下，压缩代码

`webpack`

---

# [TsLint](http://palantir.github.io/tslint/)

## 1. 安装vscode-tslint 扩展

https://marketplace.visualstudio.com/items?itemName=eg2.tslint

## 2. 安装tslingt

`npm install -g tslint`

## 3. 在 `.vscode/settings.json` 中配置

```
// Place your settings in this file to overwrite default and user settings.
{
    // tslint.enable - enable/disable tslint.
    "tslint.enable": true,
    // tslint.rulesDirectory - an additional rules directory, for user-created rules.
    // tslint.configFile - the configuration file that tslint should use instead of the default tslint.json.
}

```

todo: 使用微软的rules

>https://www.npmjs.com/package/tslint-microsoft-contrib
>https://github.com/Microsoft/tslint-microsoft-contrib

-----

#### 附：安装太慢可以使用淘宝镜像

http://npm.taobao.org/

##### 安装 `cnpm`

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

安装后就可以用`cnpm`代替`npm`了
