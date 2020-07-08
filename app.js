var min=00;
var sec=00;
var msec=00;
var minValue=document.getElementById('min');
var secValue=document.getElementById('sec');
var msecValue=document.getElementById('msec');

var interval;
function timer(){
    msec++;
    msecValue.innerHTML=msec;
    if(msec>=100){
        sec++;
        secValue.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++;
        minValue.innerHTML=min;
        sec=0;
    }
    
}
function start(){
interval=setInterval(timer,10);
    document.getElementById('start').disabled = true;
    
}


function stop(){
    clearInterval(interval); 
    document.getElementById('start').disabled = false;  
}
function reset(){
    min=00;
    sec=00;
    msec=00;
    minValue.innerHTML=min+"<span>0</span>";
    secValue.innerHTML=sec+"<span>0</span>";
    msecValue.innerHTML=msec+"<span>0</span>";
    stop();

}


    



