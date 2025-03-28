function watch (){

    let time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // rotation of hands
    let hourDeg = ((hours/12)* 360) + 90;
    let minuteDeg = ((minutes/60)* 360) + 90;
    let secondDeg = ((seconds/60)* 360) + 90;

    // web page display
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;

}
setInterval(watch,1000);
watch(); 


