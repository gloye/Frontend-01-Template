function match(string) {
  let foundA = false
  let foundB = false
  let foundC = false
  let foundD = false
  let foundE = false
  for (let c of string) {
    if (c === 'a') foundA = true
    else if (foundA && c === 'b');
  }
}

function match(string) {
  let state = start
  for (let c of string) {
    console.log(c)
    state = state(c)
  }
  return state === end
}
