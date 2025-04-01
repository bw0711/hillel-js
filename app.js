const Student = require('./Student.js');

function generateRandomArray(maxLength = 25) {
    return Array.from({ length: Math.floor(Math.random() * maxLength) + 1 },
        () => Math.floor(Math.random() * 101));
}

const student1 = new Student("Іван", "Степаненко", 2000, generateRandomArray());
const student2 = new Student("Олег", "Петренко", 2001, generateRandomArray());

student1.present();
student1.present();
student1.present();

while (true) {
    const randomChoice = Math.random() < 0.5;
    
    if (randomChoice) {
        if (!student2.present()) {
            break;
        }
    } else {
        if (!student2.absent()) {
            break;
        }
    }
}

console.log(student2.getAttendanceList());
console.log(student2.getGradeList())
console.log(student2.getAge());
console.log(student2.summary());