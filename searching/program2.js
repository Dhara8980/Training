var Arrayindex=[1,2,3,4,5,6];
var index;
index=0;
printindex(index);

function printindex(index)
{
    if(index<Arrayindex.length)
    {
        console.log(index,Arrayindex[index]);
        index++;
    }
    else{
        return null;
    }
    printindex(index);
}











// var Arraysearch=[1,2,3,4,5,6,7,8];
// n=6;
// for(i=0;i<Arraysearch.length;i++)
// {

// }
// function divideByTwo(Arraysearch)
// {
//     if(>Arraysearch[0] && <Arraysearch.length)
//     {

//     }
// }