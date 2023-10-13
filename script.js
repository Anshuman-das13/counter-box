const a = document.getElementById('value')
let c=0
function increment()
{
    if(c<20)
    {
        c=c+1
        a.textContent=c
    }
    else{
        alert("not more than 20")
    }
}
function decrement()
{
    if(c>0)
    {
        c=c-1
        a.textContent=c
    }
    else{
        alert("Decrement Not Possible")
    }
}
function reset(){
    if(c!=0){
    c=c*0
    a.textContent=c
    }
    else{
        alert("counter alredy on reset")
    }
}