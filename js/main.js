// question1
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});
console.log(result);

// question2
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
let checkYear = 2020;
if(isLeapYear(checkYear)){
  console.log(checkYear + '年はうるう年です');
}else{
  console.log(checkYear + '年はうるう年ではありません');
}