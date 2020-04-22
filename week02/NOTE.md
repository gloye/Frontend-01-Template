# 第二周总结

## 编程语言

编程语言这一块主要讲了编程语言的追本溯源

### BNF范式

BNF的描述：巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。

### 图灵机

什么是图灵完备性： 图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。

### 编程语言

知乎上有相关问题，[弱类型、强类型、动态类型、静态类型语言的区别是什么？](https://www.zhihu.com/question/19918532)
- 无类型： 汇编
- 弱类型、静态类型 ： C/C++
- 弱类型、动态类型检查： Perl/PHP/JavaScript
- 强类型、静态类型检查 ：Java/C#
- 强类型、动态类型检查 ：Python, Scheme
- 静态显式类型 ：Java/C
- 静态隐式类型 ：Ocaml, Haskell

## Javascript类型和词法

JavaScript 主要讲了词法与类型的部分

### Unicode字符集

ASCII是Unicode的子集，绝大多数网页的编码都是Unicode8的

常用方法

- `charCodeAt()`
- `codePointAt()`
- `String.fromCharCode(num)`

可以使用`encodeURIComponent()`方法对字符进行`utf-8`的转移

### 词法分析

- InputElement
  - WhiteSpace(空格)
  - LineTerminator(换行符)
  - Comment(注释)
  - Token(有效部分)
    - Punctuation(符号)
    - Keywords(关键词)
    - IdentifierName(标识符)
    - Literal(直接量)
      - Number
        - IEEE 754
      - String
        - 87 .toString()
      - Boolean
      - Null
      - Undefined

