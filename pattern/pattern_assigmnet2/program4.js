str="";
var n=5;
for(i=0;i<n;i++)
{
    for(j=0;j<n;j++)
    {
        // console.log(i,j,i==j);
        
        if(i==j)
        {
            str+="\\";
        }
        else if(i+j==n-1)
        {
            str+="/";
        }
        else if( (j==0 || j==4))
        {
            str+="|";
        }
        else if(i==0||i==4)
        {
            str+="-";
        }
        else 
        {
            str+=" ";
        }
        // console.log(i,j,n-1,i+j==n-1);
        // if(i+j==n-1)
        // {
        //     str+="o";
        // }
    }
    str+="\n";
}
console.log(str);