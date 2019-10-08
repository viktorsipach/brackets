module.exports = function check(str, arr) {
  const chars = str.split('');
  const stack = [];
  const open = [];
  const close = [];
  let closeIndex;
  let openIndex;

const lengthArray = arr.length;
const addOpenBrackets=(value) => {
  switch (value) {
      case 1:
        return open.push(arr[0][0]);
      case 2:
        return open.push(arr[0][0],arr[1][0]);
      case 3:
        return open.push(arr[0][0],arr[1][0],arr[2][0]);
      case 4:
        return open.push(arr[0][0],arr[1][0],arr[2][0],arr[3][0],arr[4][0]);
      default:
        return open.push(arr[0][0],arr[1][0],arr[2][0],arr[3][0],arr[4][0],arr[5][0]);
    }
}
const addCloseBrackets=(value) => {
  switch (value) {
      case 1:
        return close.push(arr[0][1]);
      case 2:
        return close.push(arr[0][1],arr[1][1]);
      case 3:
        return close.push(arr[0][1],arr[1][1],arr[2][1]);
      case 4:
        return close.push(arr[0][1],arr[1][1],arr[2][1],arr[3][1],arr[4][1]);
      default:
        return close.push(arr[0][1],arr[1][1],arr[2][1],arr[3][1],arr[4][1],arr[5][1]);
    }
}
   addOpenBrackets(lengthArray);
   addCloseBrackets(lengthArray);
  
    for (var i = 0, lent = chars.length; i < lent; i++) {
       openIndex = open.indexOf(chars[i]);
       if (openIndex !== -1) {
           stack.push(openIndex);
           continue;
       }
       closeIndex = close.indexOf(chars[i]);
       if (closeIndex !== -1) {
           openIndex = stack.pop();
           if (closeIndex !== openIndex) {
               return false;
           } 
       }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}

