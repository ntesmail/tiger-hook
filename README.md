## 简介:
@tiger/tiger-hook，主要是用来做node相关的基建。

主要提供以下功能:
1. 链路跟踪
2. 内存泄漏检测
3. 远程调试
4. 日志收集
5. 错误信息监控

## 项目介绍:
项目通过Typescript开发、使用OO的思想、主要吸纳了Pandora里面的shimmer这个思路来对包进行hook最终达到我们的效果。

最终项目Npm发包的时候，跟浩哥那边前端那边规范一样，使用以下方式发包
```text
npm run package
cd publish
npm publish
```

## 目录结构
```text
app
    lib: 包的源代码
    src: 用来测试包的代码
```