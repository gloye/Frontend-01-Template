// utf8 与 utf关系
var relations = [
  {
    key: 7, // 位数
    value: '0xxxxxxx', // 字节名
  },
  {
    key: 11,
    value: '110xxxxx10xxxxxx',
  },
  {
    key: 16,
    value: '1110xxxx10xxxxxx10xxxxxx',
  },
  {
    key: 21,
    value: '11110xxx10xxxxxx10xxxxxx10xxxxxx',
  },
  {
    key: 26,
    value: '111110xx10xxxxxx10xxxxxx10xxxxxx10xxxxxx',
  },
  {
    key: 31,
    value: '1111110x10xxxxxx10xxxxxx10xxxxxx10xxxxxx10xxxxxx',
  },
]
function EncodingUTF8(str) {
  const point = str.codePointAt(0)
  const pointBinary = Array.from(point.toString(2))
  const { value } = relations.find((item) => point < Math.pow(2, item.key))
  var valueArr = Array.from(value)
  var dist = ''
  while (valueArr.length) {
    let n = valueArr.pop()
    n = n === 'x' ? (pointBindary.length ? pointBindary.pop() : 0) : n
    dist = n + dist
  }
  return parseInt(dist,2).toString(16)
}