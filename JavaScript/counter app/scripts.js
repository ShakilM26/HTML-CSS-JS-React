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
        count = count - 1;
        document.getElementById("count").innerText = count;
}
// reset function
function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}