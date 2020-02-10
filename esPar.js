var x =  Math.floor(Math.random()*20)+1;
var y =  Math.floor(Math.random()*20)+1;
var z =  Math.floor(Math.random()*20)+1;

if(x>y && x>z){
    console.log(x+"Es el mayor")
    console.log(y);
    console.log(z);
}
else if(y>x && y>z)
{
    
        console.log(y+"Es el mayor");
        console.log(x);
        console.log(z);
    
}
else{
    console.log(z+"Es el mayor");
    console.log(x);
    console.log(z);
}