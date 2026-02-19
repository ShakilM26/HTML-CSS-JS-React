let count = 0;

const counting = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset");

function updateUI() {
    counting.innerText = count;

    if (count === 5){
        document.body.style.backgroundColor = 'lightblue';
    } else {
        document.body.style.backgroundColor = 'white';
    }
}

increase.addEventListener("click", function () {
    count ++;
    if (count === 10) {
        alert("It's Ten")
    }
    updateUI();
})

decrease.addEventListener("click", function() {
    if (count > 0) {
        count --;
    }
    updateUI();
})

reset.addEventListener("click", function() {
    count = 0;
    updateUI();
})