var Arrayindex=[1,2,3,4,5,6];
var start_index;
index=0;
sum=0;
printindex(index);

function printindex(index)
{
    if(index<Arrayindex.length)
    {
        console.log("index is: "+index,"value is: "+Arrayindex[index]);
        sum+=Arrayindex[index];
        index++;
    }
    else{
        return null;
    }
    printindex(index);
}
console.log("sum is"+sum);
