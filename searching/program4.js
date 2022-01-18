var array=["A","B","C","D","E"]
var searchValue="B";
var start_index=0;
var last_index=array.length-1;


function binarysearch(array,start_index,last_index,searchValue)
{
        var mid=(Math.floor((last_index+start_index)/2));

        if (array[start_index]==searchValue) {
            return start_index;
        }
        else if (array[last_index]==searchValue) {
            return last_index;
        }
        else if (array[mid]==searchValue) {
            return mid;
        }
        else if (array[mid]>searchValue) {
            return binarysearch(array,start_index,mid,searchValue)
        }
        else if (array[mid]<searchValue) {
            return binarysearch(array,mid,last_index,searchValue)
        }
}

console.log(binarysearch(array,start_index,last_index,searchValue));