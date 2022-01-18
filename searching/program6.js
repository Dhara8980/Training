// var array=[1,2,3,4,5,6,7,8,9,10]
// startIndex=1;
// lastIndex=array.length;
// result=odd(startIndex,lastIndex);
// function odd(x,y)
// {
//     if(startIndex<=lastIndex)
//     {
//         console.log("*");
//         console.log(startIndex%2)
//         if(startIndex%2==0)
//         {
//             return (arry[index]*2);
//         }
//         else 
//         {
//             return null;
//         }
//         startIndex++;
//     }
//     odd(startIndex.lastIndex);

// }

var number=1;
check(number);
function check(number)
{
    if(number>10)
    {
        return null;
            // console.log(number);
            
      
        //     console.log("odd"); 
        // }
    }
    else
    {
        console.log("number is even"+ number*2); 
            // console.log(number*2-1); 
            console.log("number is odd"+ ((number*2)-1)); 
        
    }
    number++;

    check(number);
}

// onsole.log(result);