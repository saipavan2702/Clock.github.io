function digtime(){
    var date=new Date();
    var hrs=date.getHours();
    var mins=date.getMinutes();
    var sec=date.getSeconds();
    var noon="AM";
    
    if(hrs==0)
    hrs=12;
    
    if(hrs>12){
        hrs-=12;
        noon="PM";
    }
    
    if(sec<10)
    sec="0"+sec;
    
    if(hrs<10)
    hrs="0"+hrs;
    
    var tot=hrs+":"+mins+":"+sec+" "+noon;
    document.getElementById("need").innerText=tot;
    setTimeout(digtime,1000);
}
digtime();