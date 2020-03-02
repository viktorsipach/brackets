module.exports = function check(str, arr) {

  const configMap = {};
  const bracketsArray = [];

  arr.forEach(config => {
    configMap[config[0]] = config[1];
  });

  for (let i = 0; i < str.length; i++) {
     
    if (configMap[bracketsArray[bracketsArray.length - 1]] === str[i]) {
      bracketsArray.pop();
    } else {
      bracketsArray.push(str[i]);
    }
  }
  return bracketsArray.length === 0;
}

