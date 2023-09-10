function Largest() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var result=document.getElementById("Largest");
    if(num1>num2)
    {
        if(num1>num3)
        {
            result.innerHTML="Result:"+num1;
        }
        else{
            result.innerHTML="Result:"+num3;
        }
    }else if(num2>num3){
        result.innerHTML="Result:"+num2;
    }
    else{
        result.innerHTML="Result:"+num3;
    }
}
