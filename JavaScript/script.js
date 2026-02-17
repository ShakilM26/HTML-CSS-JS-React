
        const userProfile = {
            firstName: "Hasnat",
            lastName: "Shakil",
            skills: ["HTML", "CSS", "JS"],
            getFullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        };

        const nameDisplay = document.getElementById("user-name");
        const skillListUI = document.getElementById("skill-list");
        const skillInput = document.getElementById("skill-input");
        const addBtn = document.getElementById("add-btn");
        const countDisplay = document.getElementById("skill-count");


        function updateUI() {

            skillListUI.innerHTML = "";
            

            userProfile.skills.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item.toUpperCase(); 
                skillListUI.appendChild(li);
            });


            countDisplay.textContent = userProfile.skills.length;
        }


        nameDisplay.textContent = userProfile.getFullName();
        updateUI();


        addBtn.addEventListener("click", function() {
            const val = skillInput.value.trim();

            if (val !== "") {
                userProfile.skills.push(val);
                updateUI();
                skillInput.value = "";
                console.log("New Skill Added:", val);
            } else {
                alert("Type something first, brother!");
            }
        });