class Circle
{
    protected Radius : number;
    protected PI : number;

    constructor(R : number)
    {
        this.Radius = R;
        this.PI = 3.14;
    }

    CalArea()
    {
        let Result : number;
        Result = this.PI * this.Radius * this.Radius;
        return Result;
    }
}

class CircleX extends Circle
{
    constructor(No : number)
    {
        super(No);
    }

    CalCircumference()
    {
        let Result : number;
        Result = this.PI * this.Radius * 2;
        return Result;
    }
}

var cobj = new CircleX(11);
var cobj2 = new CircleX(21);
var Ret : number = 0;

Ret = cobj.CalArea();
console.log("Area of circle is : "+Ret);

Ret = cobj2.CalCircumference();
console.log("Circumference of circle is : "+Ret);