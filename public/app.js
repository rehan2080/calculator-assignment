

// function calc(num)
// {

// a = document.getElementById("name");

// a.value += num;

// }




// function clear1()
// {

// a = document.getElementById("name");

// a.value = "";
// }


// function result()
// {

// a = document.getElementById("name");

// a.value = eval(a.value)
// }

var msec = 0;
var sec = 0;
var min = 0;



var minute = document.getElementById("min")
var second = document.getElementById("sec")
var millisecond = document.getElementById("msec")

var interval;


function timer() {

msec++

millisecond.innerHTML = msec;

if (msec >= 100){

    sec++
    second.innerHTML = sec;
    msec = 0;

}

if (sec >= 60){

    min++
    minute.innerHTML = min;
    sec = 0;
    
}



}


function Start(){

interval = setInterval(timer,10)

var b = document.getElementById("btn2").disabled = true;


}

function Pause(){

    
    clearInterval(interval)
    document.getElementById("btn2").disabled = false;

    
    }



    function Reset(){


       msec = 0;
 sec = 0;
 min = 0;

 millisecond.innerHTML = 0;
 second.innerHTML = 0;
 minute.innerHTML = 0;
    
        clearInterval(interval)
    
        
        }

