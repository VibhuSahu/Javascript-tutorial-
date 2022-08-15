// Find the Average 
// Grades
// 1 - 59 : F
// 60 - 69 : D
// 70 - 79 : C
// 80 - 89 : B
// 90 - 100 : A 


function Grades(marks) {
    var sum = 0
    for (var num of marks) sum += num;

    var Average = sum / marks.length;

    var Grade;
    if (1 <= Average && Average < 59) return 'Grade : F';
    else if (60 <= Average && Average < 69) return 'Grade : D';
    else if (70 <= Average && Average < 79) return 'Grade : C';
    else if (80 <= Average && Average < 89) return 'Grade : B';
    else return 'Grade : A';
}



const marks = [90,40,90,90];
console.log(Grades(marks));