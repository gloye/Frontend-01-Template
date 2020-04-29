function convertNumberToString(number, x) {
  var integer = Math.floor(number)
  // 精度问题 在不调用字符串方法的情况下暂未找到解决方案
  var fraction = number - integer
  var string = ''
  while (integer > 0) {
    string = String(integer % x) + string
    integer = Math.floor(integer / x)
  }
  fraction = fraction ? fraction : ''
  string = (string + fraction).replace('0', '')
  return string
}
