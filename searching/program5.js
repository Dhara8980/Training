var number1=117;
var number2=7;
var x;
var res=divisibleBySeven(number2); 
var res1=divisibleBynine(number1);
console.log(res);
console.log(res1);

function divisibleBySeven(x)
{
    var act1=number2%10;
    console.log(act1);
    var act2=act1*2;
    console.log(act2)
    var act3=Math.floor(number2/10);
    console.log(act3);
    act4=act3-act2;
    console.log(act4);
    if((act4%7)==0)
    {
        return "yes";
    }
    else
    {
        return "no";
    }

}

function divisibleBynine(number1)
{
    if(number1%9==0)
    {
        return "yes";
    }
}
