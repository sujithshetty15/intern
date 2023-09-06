let a = 16;
var result="true";
if(a<15)
{
  result="true"
}
else{
  result="false"
}
console.log(result)


function smallerThan(b,c)
{
    if(b<c)
    console.log("lesser than")
}

smallerThan(80,90)

function nameof(name,solution="hello")
{
    const message=`hello,${name}`;   
    console.log(`${solution},${name}`)
    return message;
}
console.log(nameof("hero"))
