const clock =function(){
    let now =new Date();
    let options = {
        timeZoneName: "short",
        hour: "2-digit",       
        minute: "2-digit",     
        second: "2-digit"
        
};
    
    document.getElementsByClassName("Date")[0].innerText =now.toLocaleTimeString([], options);
}

setInterval(clock,1000);

clock();