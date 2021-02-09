let age = prompt("Please Enter any value of age: ");

if(age>=25)
{
    alert(age + " Adult ago");
    console.log(age + " Adult ago");
    document.getElementById("hContent").innerHTML=age+ " Adult ago";
}
else if(age>=18 && age<25)
{
    alert(age + " Teenage");
    console.log(age +" Teenage");
    document.getElementById("hContent").innerHTML=age+ " Teenage";
}
else if(age>=1 && age<18)
{
    alert(age + " Children");
    console.log(age +" Children");
    document.getElementById("hContent").innerHTML=age+ " Children";
}
else{
    alert(age + " ERROR");
    console.log(age + " Adult ERROR");
    document.getElementById("hContent").innerHTML=age+ " Adult ERROR";

}