let count = 0;

// increase func
function increase() {
    count = count + 1;
    document.getElementById("count").innerText = count;
    if (count === 10){
        alert("It's Ten")
    }
}
// decrease func
function decrease() {
    if (count > 0) {
        count = count - 1;
        document.getElementById("count").innerText = count;
    } else {
        count = 0;
       }
}
// reset function
function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}