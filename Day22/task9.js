class shape{
    constructor(name){
        this.name=name;
    }
    displayName(){
        console.log(`Name :${this.name}`);
        
    }
}
class radius extends shape{
    constructor(radius){
        super("Cirlce");
        this.radius=radius;
    }
    calculateArea(){
        let area=Math.PI*this.radius*this.radius;
        console.log(`Area of ${this.name}:${area.toFixed(2)}`);
        
    }
}
let circle1=new radius(5)
circle1.displayName();
circle1.calculateArea();