# 每周总结可以写在这里

## HTML parser

## CSS parser

### 第二步骤
1. 创建一个元素 立即计算CSS
2. 分析一个元素时候，所有CSS规则已经收集完毕
3. 遇到style标签，可能重新进行CSS计算
   
### 第三步骤

```javascript
function computeCSS(element){
  var elements = stack.slice().reverse()
}

```

- 必须知道元素的所有父元素
- 本元素的所有父元素
- 首先获取当前元素 从内向外
****
### 第四部分

### 第五部分

### 第六部分

- 一旦匹配 就应用到元素上