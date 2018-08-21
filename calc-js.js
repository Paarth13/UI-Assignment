
function valuePicker(number){

    var data=document.getElementById("display").value;
    
    console.log(data.length);
    if((data[data.length-1]=="*" || data[data.length-1]=="/" || data[data.length-1]=="+" || data[data.length-1]=="-") && (number.value=="*" ||number.value=="-"||number.value=="+"||number.value=="/"))
    {
        window.alert("Cannot perform multiple functions on two values");
    }
    else
    {document.getElementById("display").value+=number.value;
}
    
}
function result(){
    var data=document.getElementById("display").value;
    if(data[data.length-1]=="*" || data[data.length-1]=="/" || data[data.length-1]=="+" || data[data.length-1]=="-")
    window.alert("Invalid expression");
    else
    {
        document.getElementById("final").innerHTML=data+" = "+eval(data);
        document.getElementById("display").value="";
        document.getElementById("history").innerHTML=data+" = "+eval(data)+"<br>"+document.getElementById("history").innerHTML;
    }
    
}

function clearScreen(){
    document.getElementById("final").innerHTML=" ";
    document.getElementById("display").value="";
}

function validInput(input,eventName){
    var num=input.value;
    if(eventName.keyCode==13)
    {
        
        result();
    }
    else{
        
    console.log(input.value);
    if(num[num.length-1]>=0 ||num[num.length-1]=="*"||num[num.length-1]=="/"||num[num.length-1]=="+"||num[num.length-1]=="-")
    {
        
        
    }
    else{
        document.getElementById("display").value="";
    
    }
}
}