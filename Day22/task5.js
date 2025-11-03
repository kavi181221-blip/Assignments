class employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    dispInfo(){
        console.log(`Name:${this.name}`);
        console.log(`Salary:${this.salary}`);
    }
}
class manager extends employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
    }
    dispInfo(){
        super.dispInfo();
        console.log(`Department:${this.department}`);
        
    }
}
let emp1=new manager("Kavibalan",100000,"IT");
emp1.dispInfo();