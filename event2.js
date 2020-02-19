//console.log()
//console.log()
var c = document.getElementById("count")//to change the integer for every second
var c1 = c.innerHTML;
var bk = document.getElementById("bd")//to access the body of html in order to change back groundcolor
setInterval(function () { //setInterval is used to execute a function for a particular time here i have takem for 1sec=1000 milliseconds 
    c1 = c1 > 0 ? c1 - 1 : -1//ternary operator to change if it had reached zero or not?
    if (c1 != -1) {
        hello()// if it is non-negative then calls hello function
        c.innerHTML = c1// updates the integer for every second
    }
}, 1000)// end of function

function hello() {
    var a = Math.floor((Math.random() * 255))//random function used to get red value 
    var b = Math.floor((Math.random() * 255))//random function used to get green value
    var c = Math.floor((Math.random() * 255))//random function used to get blue value
    bk.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")"//the above values a,b,c are placed in rgb(a,b,c) to get some random color which is the applied to background color
    return;
}