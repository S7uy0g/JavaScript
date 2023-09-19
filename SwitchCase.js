function SwitchCase() {
    var num1 = parseInt(document.getElementById("num1").value);
    var result=document.getElementById("Day");
    switch(num1){
        case 1:
            result.innerHTML="Sunday";
            break;
        case 2:
            result.innerHTML="Monday";
            break;
        case 3:
            result.innerHTML="Tuesday";
            break;
        case 4:
            result.innerHTML="Wednesday";
            break;
        case 5:
            result.innerHTML="Thursday";
            break;
        case 6:
            result.innerHTML="Friday";
            break;
        case 7:
            result.innerHTML="Satday";
            break;
        default:
            result.innerHTML="Mula 7 days hunxa";
        break;
    }
}