class student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    display() {
        console.log(`Name is:${this.name}`);
        console.log(`Age is:${this.age}`);
        console.log(`Grade is:${this.grade}`);
        console.log("----------------------");
        
    }
}
let student1=new student("Kavibalan",20,"B")
let student2=new student("Rajesh",28,"A")
let student3=new student("Aarthi",23,"A")

student1.display();
student2.display();
student3.display();

