import HomeNew from "./homeNew";
import MenuNew from "./menuNew";

const Content = () => {

    let container = document.getElementById("container");

    // Create Content Div

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");
    container.appendChild(contentContainer);

    let homeEl = document.querySelector(".home-nav");
    homeEl.addEventListener('click', (e) => {
        e.preventDefault();
        HomeNew();
        console.log("STARTED HOMENEW");
    });


    let menuEl = document.querySelector(".menu-nav");
    menuEl.addEventListener('click', (e) => {
        e.preventDefault();
        MenuNew();
        console.log("STARTED MENUNEW");
    });


    // if (homeEl) {
    //     console.log("here");
    // }




    return;
}

export default Content;



// const Home = () => {

//     let container = document.getElementById("container");

//     // Create Home Page
//     let homeContainer = document.createElement("div");
//     homeContainer.classList.add("showing");
//     homeContainer.classList.add("home-container");

//     let homeInformation = document.createElement("h2");
//     homeInformation.textContent = "The kitchen is often regarded as the heart of a home. Yet, when it comes to professional kitchens, they are not just the heart but the entire nervous system of a restaurant, a place bustling with creativity, precision, and speed. There are secrets to a professional kitchen's success, elements often hidden behind the 'staff only' door. Let's dive into some of these intriguing secrets from the professional kitchen.";
//     homeInformation.classList.add("home-information");
//     homeContainer.appendChild(homeInformation);
//     // homeContainer.classList.add("hiding");

//     container.appendChild(homeContainer);

//     return;
// }

// export default Home;