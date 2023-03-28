class Circle
{
    Radius : number;
    private PI : number;

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

var obj = new Circle(11);
var Ret : number = 0;

Ret = obj.CalArea();
console.log("Area of circle is : "+Ret);