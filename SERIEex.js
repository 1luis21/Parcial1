function factorial(num)
{
    var res=1;
   
    while(num!=0)
    {
        res*=num;
        num--;
    }
    return res;
}

function taylor(n,x)
{
    var termino, sumatoria=0;

    for(var i=0; i<n; i++)
    {
        termino=Math.pow(x,i)/factorial(i);
        sumatoria+=termino;
    }

    return sumatoria;
}

console.log(taylor(10,10));