# 第七周总结

## CSS部分

### BFC

简单介绍了BFC，相关参考(MDN:块状可视化上下文)[https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context]

### 标准部分

介绍了CSS相关部分标准，以及如何从W3C网站获取相关标准 (W3C CSS Standard)[https://www.w3.org/TR/?tag=css]

#### 1. 在标准页面收集相关标准文档

```javascript
var lis = document.getElementById("container").children

var result = [];

for(let li of lis) {
    if(li.getAttribute('data-tag').match(/css/))
        result.push({
            name:li.children[1].innerText,
            url:li.children[1].children[0].href
        })
}
console.log(result)

```

#### 2. 收集CSS属性相关标准

属性总是在一个具有 propdef 的容器中，有属性 data-dfn-type 值为 property。

```javascript
let iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);

function happen(element, event){
    return new Promise(function(resolve){
        let handler = () => {
            resolve();
            element.removeEventListener(event, handler);
        }
        element.addEventListener(event, handler);
    })
}

void async function(){
    for(let standard of standards) {
        iframe.src = standard.url;
        console.log(standard.name);
        await happen(iframe, "load");
    }
}();

```