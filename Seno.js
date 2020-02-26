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

function seno(n,angulo)
{
    var seno=0;
    for(var i=0; i<n; i++)
    {
        seno += Math.pow(-1,i)*Math.pow(angulo,2*i+1)/factorial(2*i+1);
    }

    return seno;
}

console.log(seno(2,1));