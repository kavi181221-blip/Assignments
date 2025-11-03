class employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    dispInfo(){
        console.log(`Name:${this.name} ,Salary:${this.salary}`);
        }
}
let emp1=new employee("Kavibalan",90000);
emp1.dispInfo();