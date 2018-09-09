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

## db
```text
mem_${app}_${time}: JSON.stringify(一天的数据)
err_${app}_${time}: JSON.stringify({
    message: '错误信息',
    line: '行号'
})

err_${app}_${time}: {
    "stack--->md5": {
        message: '错误信息',
        stack: '堆栈',
        count++,
        lastTime: 上一次出现的时间
    }
}

err_${app}_${md5}: {
    "info": {
        message: '错误信息',
        stack: '堆栈',
    }
    "times": [num, num, num]
}

```

## 当前规划
当前只考虑可用性，架构优化方面到时再逐步优化，先把功能可用，然后到时压测下效果。