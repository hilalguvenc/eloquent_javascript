function range(start,end,step){
    let array = [];
    for(let i=start; i <= end;i+= step){
    array += i;
}
return array;
}
console.log(range(4,12,2));

function sum (...numbers){
  let count = 0;
  for(let n of numbers){
   count += n ;
  }
  return count;
}
console.log(sum(2,3,4,5,6,7));