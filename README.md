## ✨ 简介

页面翻译谷歌插件

## 🐱‍💻 项目使用

```bash
pnpm dev
# or
npm run dev
```

打开谷歌浏览器->更多工具->拓展程序->打开开发者模式->加载已解压的扩展程序->选择`build/chrome-mv3-dev`

## 🎯 Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

- 如果无法运行commitlint，请运行以下指令：

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```
