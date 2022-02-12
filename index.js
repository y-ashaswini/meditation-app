const h = document.querySelector("hours");
const m = document.querySelector("minutes");
const s = document.querySelector("seconds");

function checkTime() {
    if(h.isInteger() && m.isInteger() && s.isInteger()) {
        console.log("Entered numbers");
    } else {
        alert('Enter Time in Integers!');
        h.innerHTML = "00";
        m.innerHTML = "00";
        s.innerHTML = "00";
    }
}
