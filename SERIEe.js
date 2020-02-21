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

function seriee(n)
{
    var termino, sumatoria=0;

    for(var i=0; i<n; i++)
    {
        termino=1/factorial(i);
        sumatoria+=termino;
    }

    return sumatoria;
}

console.log(seriee(123));