function ln(valorx,cterminos)
{
    var termino=0, suma=0;
    for(var i=1; i<=cterminos; i++)
    {
        termino+=Math.pow((valorx-1)/valorx,i)*(1/i);
        suma+=termino;
    }

    return suma;
}

console.log(ln(3,100000000));