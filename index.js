function checkTime() {

    var h = document.querySelector(".hours");
    var m = document.querySelector(".minutes");
    var s = document.querySelector(".seconds");
    

    if (h.value=="00" && m.value=="00" && s.value=="00" ) {
        alert("No time set!")
    } else {
        h.value=parseInt(h.value);
        m.value=parseInt(m.value);
        s.value=parseInt(s.value);

        if(h.value=="NaN" || m.value=="NaN" || s.value=="NaN") {
            h.value="00";
            m.value="00";
            s.value="00";
            alert('Enter time in integers!');
        } else {
            console.log("All numbers are int!");
            var time =s.value+(m.value*60)+(h.value*3600);
            console.log('total time: '+time+' seconds');
            PlayMusic(time);
        }
        
    }
}


function PlayMusic(time) {
    1;
}
