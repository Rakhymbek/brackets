module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const pairs = {};

  for(let arr of bracketsConfig) {
      pairs[arr[1]] = arr[0];
  }

    for(let i = 0; i < str.length; i++) {
        let currentBracket = str[i];
        let topElem = stack[stack.length - 1];
        
        if(Object.keys(pairs).includes(currentBracket) && topElem === pairs[currentBracket]) {
          if(pairs[currentBracket] !== stack.pop()) {
            return false;
          }
        }else {
          stack.push(currentBracket);
        }
        console.log(stack);
    }

    return stack.length === 0;
}
