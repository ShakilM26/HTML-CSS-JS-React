// elements select 
const nameShow = document.getElementById("name");
const photoShow = document.getElementById("photo");
const emailShow = document.getElementById("email");
const loadBtn = document.getElementById("btn");

// fetching data
async function fetchData() {
    try {
        // api call to extract data
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json(); // convert to json data

        // using Destructuring extract data
        const user = data.results[0];
        const {first, last} = user.name;
        const email = user.email;
        const photo = user.picture.large;

        nameShow.textContent = `${first} ${last}`;
        emailShow.textContent = email;
        photoShow.src = photo;
    }   catch (error) {
        console.log("File not found or error", error)
    }
}

// this is calling the function on button click
loadBtn.addEventListener('click', fetchData);
fetchData();