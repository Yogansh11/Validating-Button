var count = 0;
var  button =  null 
function incrementButton1() {
    count = count + 1;    
    var element = document.getElementById('incrementText1');
    var value = element.innerHTML;
    ++value;
    document.getElementById('incrementText1').innerHTML = value;
    if (count == 2) {
        count = count - 1;
    }
    if(button == null ){
        button = incrementButton1;
    
    }
}
var count1 = 0;
function incrementButton2() {
    count1 = count1 + 1;   
    var element = document.getElementById('incrementText2');
    var value = element.innerHTML;
    ++value;
    document.getElementById('incrementText2').innerHTML = value;
    if (count1 == 2) {
        count1 = count1 - 1;
    }
    if(button == null ){
        button = incrementButton2;
    }
}
var count2 = 0;
function incrementButton3() {
    count2 = count2 + 1;   
    var element = document.getElementById('incrementText3');
    var value = element.innerHTML;
    ++value;
    document.getElementById('incrementText3').innerHTML = value;
    if (count2 == 2) {
        count2 = count2 - 1;
    }
    if(button == null ){
        button = incrementButton3;
    }
}
function sync_and_add() {
    if ((count == 0) && (count1 == 0) && (count2 == 0)) {
        var element = document.getElementById('incrementText1');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText1').innerHTML = value;
        var element = document.getElementById('incrementText2');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText2').innerHTML = value;
        var element = document.getElementById('incrementText3');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText3').innerHTML = value;
    }
    else if ((count == 1) && (count1 == 0) && (count2 == 0)) {
        var element = document.getElementById('incrementText2');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText2').innerHTML = value;
        var element = document.getElementById('incrementText3');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText3').innerHTML = value;
    }
    else if ((count == 0) && (count1 == 1) && (count2 == 0)) {
        var element = document.getElementById('incrementText1');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText1').innerHTML = value;
        var element = document.getElementById('incrementText3');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText3').innerHTML = value;
    }
    else if ((count == 0) && (count1 == 0) && (count2 == 1)) {
        var element = document.getElementById('incrementText1');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText1').innerHTML = value;
        var element = document.getElementById('incrementText2');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText2').innerHTML = value;
    }
    else if ((count == 1) && (count1 == 1) && (count2 == 0)) {
        var element = document.getElementById('incrementText3');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText3').innerHTML = value;
    }
    else if ((count == 0) && (count1 == 1) && (count2 == 1)) {
        var element = document.getElementById('incrementText1');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText1').innerHTML = value;
    }
    else if ((count == 1) && (count1 == 0) && (count2 == 1)) {
        var element = document.getElementById('incrementText2');
        var value = element.innerHTML;
        ++value;
        document.getElementById('incrementText2').innerHTML = value;
    }
    else if ((count == 1) && (count1 == 1) && (count2 == 1)) {
        if(button == incrementButton1){
            var element = document.getElementById('incrementText1');
            var value = element.innerHTML;
            ++value;
            document.getElementById('incrementText1').innerHTML = value;

        }
        else if(button == incrementButton2){
            var element = document.getElementById('incrementText2');
            var value = element.innerHTML;
            ++value;
            document.getElementById('incrementText2').innerHTML = value;

        }
        else if(button == incrementButton3){
            var element = document.getElementById('incrementText3');
            var value = element.innerHTML;
            ++value;
            document.getElementById('incrementText3').innerHTML = value;
        }
        button = null;
    }

    count = 0;
    count1 = 0;
    count2 = 0;
}