class product{
    constructor(name,price){
        this.name=name;
        this.price=price
    }
    priceDiscount(discountpercent){
        let discount=(this.price*discountpercent)/100;
        let orginalprice=this.price-discount;
        console.log(`Product :${this.name}`);
        console.log(`Orginal Price:${this.price}`);
        console.log(`Discount:${discount}`);
        console.log(`Discount Price:${orginalprice}`);
    }
}
let finalprice=new product("soap",100)
finalprice.priceDiscount(10);