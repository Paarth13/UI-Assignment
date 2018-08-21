function validate(){
    var fname=document.getElementById("Fname");
    if(fname.value=="")
    {
        
        document.getElementById("errName").innerHTML="Do not leave First name empty.";
        document.getElementById("errName").style.display="block";
        fname.focus();
        return false; 
    }
   else if (!/^[a-zA-Z]*$/g.test(fname.value)) {
        document.getElementById("errName").innerHTML="Invalid characters";
        document.getElementById("errName").style.display="block";
        fname.focus();
        return false;
    }
    else{
        document.getElementById("errName").style.display="none";
    }
//---------------------FOR LAST NAME------------------------------------------------------------------------------------
    var lname=document.getElementById("Lname");
    if(lname.value=="")
    {
        document.getElementById("errLname").innerHTML="Do not leave Last name empty.";
        document.getElementById("errLname").style.display="block";
        lname.focus();
        return false; 
    }
   else if (!/^[a-zA-Z]*$/g.test(lname.value)) {
    document.getElementById("errLname").innerHTML="Invalid characters";
    document.getElementById("errLname").style.display="block";
        lname.focus();
        return false;
    }
    else{
        document.getElementById("errLname").style.display="none";
    }
//---------------------FOR GENDER------------------------------------------------------------------------------------
    var gender=document.getElementsByName("Gender");
    if(gender[0].checked || gender[1].checked || gender[2].checked)
    {
        document.getElementById("errGender").style.display="none"; 
    }
    else{
        document.getElementById("errGender").innerHTML="Please select a gender.";
        document.getElementById("errGender").style.display="block";
    
        return false; 
       
    }

//---------------------For City------------------------------------------------------------------------------------
    
    var city=document.getElementById("City");
    if(city.value=="--Select--")
    {
        document.getElementById("errCity").innerHTML="Please choose a city";
        document.getElementById("errCity").style.display="block";
        return false;

    }
    else{
        document.getElementById("errCity").style.display="none";
    }

//---------------------FOR NUMBER------------------------------------------------------------------------------------
    var number=document.getElementById("mynumber");
    if(number.value=="")
    {
        document.getElementById("errPhone").innerHTML="Please enter the number.";
        document.getElementById("errPhone").style.display="block";
        number.focus();
        return false; 
    }
    else if (!/^[0-9]{7,10}$/g.test(number.value)) {
        document.getElementById("errPhone").innerHTML="Invalid characters for mobile number";
        document.getElementById("errPhone").style.display="block";
        
        number.focus();
        return false;
    }
    else{
        document.getElementById("errPhone").style.display="none";
    }

    //---------------------FOR EMAIL------------------------------------------------------------------------------------
    var email1=document.getElementById("email1");
    var regex=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(email1.value=="")
    {
        document.getElementById("errEmail").innerHTML="Please enter an email.";
        document.getElementById("errEmail").style.display="block";
        email1.focus();
        return false; 
    }
    else if (!email1.value.match(regex)) {
        document.getElementById("errEmail").innerHTML="Invalid email id";
        document.getElementById("errEmail").style.display="block";
        email1.focus();
        return false;
        
    }
    else{
        
        document.getElementById("errEmail").style.display="none";
        
    }

    
}