class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullNamn() {
        return `${this.firstName} ${this.lastName}`;
    }

    get birthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }

    getDetails() {
        return `Name: ${this.fullNamn}, Age: ${this.age}`;
    }
}

class Teacher extends User {
    constructor(firstName, lastName, age, groups, experience) {
        super(firstName, lastName, age);
        this.groups = groups;
        this.experience = experience;
    }

    isGroupTeacher(group) {
        return this.groups.includes(group);
    }

    getDetails() {
        return `${super.getDetails()}, Groups: ${this.groups.join(', ')}, Experience: ${this.experience} years`;
    }
}

class Student extends User {
    static MIN_GRADE_FOR_SCHOLARSHIP = 4.0;

    constructor(firstName, lastName, age, group, grade) {
        super(firstName, lastName, age);
        this.group = group;
        this.grade = grade;
    }


    isEligibleForScholarship() {
        return this.grade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }

    getDetails() {
        return `${super.getDetails()}, Group: ${this.group}, Grade: ${this.grade}`;
    }
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
console.log(teacher1.getDetails());

const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
console.log(student1.getDetails());

const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9);
console.log(student2.getDetails());

console.log(student1.fullNamn); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // True
console.log(student2.isEligibleForScholarship()); // False
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log("Minimum grade for scholarship is " + " " + Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4
