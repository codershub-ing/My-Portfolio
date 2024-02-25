

let projectTitles = ["find%", "JS Property", "find AP and sum"];
let imageUrls = ["url1", "url2", "url3"]; // Replace with your desired image URLs
let cardContainer = document.querySelector(".cardContainer");

for (let i = 0; i < projectTitles.length; i++) {
    // Create a new card element
    let card = document.createElement("div");
    card.classList.add("card");

    // Create project title element
    let projectTitle = document.createElement("div");
    projectTitle.classList.add("projectTitle");
    projectTitle.innerHTML = `<h3>${projectTitles[i]}</h3>`;
    card.appendChild(projectTitle);

    // Create project image element
    let projectImage = document.createElement("div");
    projectImage.classList.add("projectImage");
    projectImage.innerHTML = `<img src="${imageUrls[i]}" alt="" class="projectImage">`;
    card.appendChild(projectImage);

    // Create project info element
    let projectInfo = document.createElement("div");
    projectInfo.classList.add("projectInfo");
    projectInfo.innerHTML = `<p>Your info is here replace with ather</p>`;
    card.appendChild(projectInfo);

    // Append the card to the card container
    cardContainer.appendChild(card);
}


function c() {

    let x = document.querySelector(".leftMenu");

    if (x.style.display == "block") {
        x.style = "display:none; animation: out .5s ease-in-out;  "
        document.querySelector(".navLogo").src= "hamIco.png"
    } else {
        x.style = "display:block ; animation: in .5s ease-in-out;"
        document.querySelector(".navLogo").src= "xIco.png";

    }
}