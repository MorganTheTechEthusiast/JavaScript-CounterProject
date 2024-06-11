let count = 0;

document.getElementById("decrease-btn").onclick = function(){
    count --;
    document.getElementById("counter").innerHTML = count;
}

//Function to increase to increase count number

document.getElementById("increase-btn").onclick = function(){
    count ++;
document.getElementById("counter").innerHTML = count;
}

document.getElementById("reset-btn").onclick = function(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
}