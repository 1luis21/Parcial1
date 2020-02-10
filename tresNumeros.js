var x =  Math.floor(Math.random()*20)+1;
var y =  Math.floor(Math.random()*20)+1;
var z =  Math.floor(Math.random()*20)+1;

console.log(y);
console.log(z);

if(x>y && x>z){
    console.log(x+"Es el mayor")
}
else if(y>x && y>z)
{
    
        console.log(y+"Es el mayor");
}
else{
    console.log(z+"Es el mayor");
}