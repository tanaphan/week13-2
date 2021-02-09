function myHello(){
    console.log("What year are you born");
    document.getElementById("hContent").innerHTML="What year are you born";
}
myHello();
function myGeneration(){
    let gen = prompt("Please Enter any value of gen: ");
    if(gen>=2444 && gen<2564){
        if(gen>=2553 && gen<2564){
            console.log(gen + " Gen Alpha")
            document.getElementById("hContent2").innerHTML=gen +" = Gen Alpha";
        }
        else if(gen>=2540 && gen<2553){
            console.log(gen + " Gen Z")
            document.getElementById("hContent2").innerHTML=gen +" = Gen Z";
        }
        else if(gen>=2523 && gen<2540){
            console.log(gen + " Gen Y")
            document.getElementById("hContent2").innerHTML=gen +" = Gen Y";
        }
        else if(gen>=2508 && gen<2522){
            console.log(gen + " Gen X")
            document.getElementById("hContent2").innerHTML=gen +" = Gen X";
        }
        else if(gen>=2489 && gen<2507){
            console.log(gen + " Gen Baby Boomer")
            document.getElementById("hContent2").innerHTML=gen +" = Gen Baby Boomer";
        }
        else if(gen>=2468 && gen<2488){
            console.log(gen + " Gen Silent")
            document.getElementById("hContent2").innerHTML=gen +" = Gen Silent";
        }
        else if(gen>=2444 && gen<2467){
            console.log(gen + " Gen Greatest")
            document.getElementById("hContent2").innerHTML=gen +" = Gen Greatest";
        }
    }
    else{
    console.log(gen + " ERROR");
    document.getElementById("hContent3").innerHTML=gen +"ERROR";
    }
}
myGeneration();