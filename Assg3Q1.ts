
class Arithmetic
{   
    Number1 : number;
    Number2 : number;

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1;
        this.Number2 = No2;
    }

    Addition()
    {
        let Ans : number = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    }

    Subtraction()
    {
        let Ans : number = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }

    Multiplication()
    {
        let Ans : number = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }

    Division()
    {
        let Ans : number = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }
}

var obj1 = new Arithmetic(21,11);
var obj2 = new Arithmetic(100,20);

var Ret : number = 0;
Ret = obj1.Addition();
console.log("Addition of object 1 is : "+Ret);

Ret = obj1.Subtraction();
console.log("Subtraction of object 1 is : "+Ret);

Ret = obj2.Multiplication();
console.log("Product of object 2 is : "+Ret);

Ret = obj2.Division();
console.log("Division of object 2 is : "+Ret);