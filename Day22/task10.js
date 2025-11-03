class student{
    constructor(name,age,grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    display(){
        console.log(`Name:${this.name},Age:${this.age},Grade:${this.grade}`);
        
    }
}

student.prototype.greet=function(){
    console.log(`My nameis ${this.name} and I am in grade ${this.grade} `);
}
let student1=new student("Kavi",20,"A")
let student2=new student("Virat",23,"A")
student1.greet();
student2.greet();
student1.display();
