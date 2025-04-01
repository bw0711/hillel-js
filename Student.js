class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }

    getGradeList() {
        return this.grades;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
            console.log('Запис додано');
            return true;
        } else {
            console.log('Відвідуваність уже заповнена!');
            return false;
        }
    }

    absent() {
        let index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
            console.log('Запис видалено');
            return true;
        } else {
            console.log("Відвідуваність уже заповнена!");
            return false;
        }
    }

    getAttendanceRate() {
        const attendedClasses = this.attendance.filter(element => element === true).length;
        const totalClasses = this.attendance.filter(element => element !== null).length;
        return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    }

    getAttendanceList() {
        return this.attendance;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const avgAttendence = this.getAttendanceRate();

        if (avgGrade > 90 && avgAttendence > 0.9) {
            return 'Молодець!';
        } else if (avgGrade > 90 || avgAttendence > 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }
}

module.exports = Student;
