// We have access to "this" keyword in every part of a class, which calls the same object this is being created
class product{
    constructor(n, p, d){
        console.log("This will add things in constructors and will always execute when obj is created.")
        this.name = n;                      //here name, price and discount are key value pair
        this.price = p;
        this.discount = d;
    }
    finalPrice(){                             //In methods we don't need to use "function" or "method" keyword.
        let newPrice = this.price * (100-this.discount) / 100;
        console.log("The Original price ", this.price)
        return newPrice;
    }
}

const iphone = new product("Iphone", 120000, 20);       //calls the constructor
let s23 = new product("Samsung S23 Ultra", 89000, 15);
console.log(iphone);
console.log("The final price is ", iphone.finalPrice());
console.log(s23);
console.log("The final price is ", s23.finalPrice());
