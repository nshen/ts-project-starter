# TypeScript Project Starter 2019

一个干净的 `TypeScript 3.x + Babel 7.x + webpack + rollup + Jest` 的开发环境 

## 创建一个新项目

```cmd

git clone git@github.com:nshen/ts-project-starter.git newProject # 克隆到本地命名为 newProject
cd newProject/
npm install # 或者用阿里的 cnpm install
rm -rf .git # 删除.git目录
git init    # 建立全新的git目录，历史清空了
git add .
git commit -m 'initial commit' # 创建第一条提交，新项目

```



## :relaxed: 目录结构

```
+--- __test__ 所有test文件，直接用typescript编写，命名为 xxx.test.ts
+

```

## :relaxed: 命令行

todo

## 发布一个npm包

```javascript
npm run build  // build typs
npm run rollup // compile
npm login
npm publish --access public
```

----
基于

https://github.com/Microsoft/TypeScript-Babel-Starter
https://rollupjs.org/guide/en
https://kulshekhar.github.io/ts-jest/