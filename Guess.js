function guess(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var a=parseInt(num1);
    var b=parseInt(num2);
    if(a>b){
        document.getElementById("Winner").innerHTML = "Winner: " + a;
    }
    else{
        document.getElementById("Winner").innerHTML = "Winner: " + b;
    }
}
function generateA(){
    var num1 = Math.floor(Math.random()*1000);
    var a=parseInt(num1);
    document.getElementById("num1").value =a;
}
function generateB(){
    var num1 = Math.floor(Math.random()*1000);
    var b=parseInt(num1);
    document.getElementById("num2").value =b;
}