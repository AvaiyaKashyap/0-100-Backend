
function timer() {
    function time() {
        
        const date = new Date();
        let localTime = date.toLocaleTimeString();
        console.log(localTime);
    
        setTimeout(time , 1000);

    };
    time();
}
timer();