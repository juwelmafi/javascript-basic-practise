let marks = [100, 44, 67, 90, 30, 120, 600, 300];

let max = marks[0];

for(let i = 0; i < marks.length; i++){
  if(max < marks[i]){
    max = marks[i];
  }
}

console.log(max);

sum = 0;
for(let mark of marks){
  sum = sum + mark;
}

console.log(sum);
console.log("Avarage: ", sum / marks.length);


let reMarks = [];

for(let i = marks.length-1; i >= 0; i--){
  reMarks.push(marks[i]);
}
console.log(reMarks);