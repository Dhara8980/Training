str="";
var n=7;
for(i=0;i<n;i++)
{
    for(j=0;j<n;j++)
    {
        if((i==j)||((i+j)==n-1))
        {
            str+="#";
        }
        else
        {
            str+="*";
        }
    }
    str+="\n";
}
console.log(str);