str="";
var n=8;
for(i=-n;i<=n;i++)
{
    if(i==0)
        {
            continue;
        }
    for(j=-n;j<=n;j++)
    {
        if(j==0)
        {
            continue;
        }
        // if(Math.abs(i)+Math.abs(j)<=n+1&& Math.sign(i)==Math.sign(j))
        if(Math.abs(i)+Math.abs(j)<=n+1 && ((i<0 && j<0)||(i>0 && j>0)))
        {
            str+="@";
        }
        else{
            str+=" ";
        }
    }
    str+="\n";
}
console.log(str);