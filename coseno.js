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

function coseno(n,angulo)
{
    var coseno=0;
    for(var i=0; i<n; i++)
    {
        coseno += Math.pow(-1,i)*Math.pow(angulo,2*i)/factorial(2*i);
    }

    return coseno;
}

console.log(coseno(2,1));