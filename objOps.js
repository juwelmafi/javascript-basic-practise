let student = {
  name: "Bucket Boy Shojib",
  id: 102,
  marks: {
    bangla: 73,
    english: 90,
    math: 63,
  },
};

totalMarks = 0;
totalSubj = 0;

for (let sub in student.marks) {
  totalMarks = totalMarks + student.marks[sub];
  totalSubj++;
}

const avg = (totalMarks / totalSubj).toFixed(2);

console.log(totalMarks);
console.log(totalSubj);

if (avg >= 80) {
  console.log("Tumi A+ paico, tumar avg mark: ", avg, "%");
} else {
  console.log("Tui to shash, rat vor phone chalas");

}



