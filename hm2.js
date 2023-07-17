let arr = [1,1];
let opp = '+';
let res = "";
function calculate (ar, op){
for(let i = 0; i<ar.length; i++){
  
  switch(op) {
  case '-':
    res-=ar[i]
  case '+':
    res+=ar[i]
  case '*':
    res*=ar[i]
  case '/':
    res/=ar[i]
    break;
  default:
}
}
  return res;
}
let result = calculate(arr, opp);
console.log(result);