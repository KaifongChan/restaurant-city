const HomeNew = () => {

    let contentContainer = document.querySelector(".content-container");

    // Delete everything from contentContainer first before appending
    contentContainer.innerHTML = "";

    // Create Home Information

    let homeInformation = document.createElement("h2");
    homeInformation.textContent = "The kitchen is often regarded as the heart of a home. Yet, when it comes to professional kitchens, they are not just the heart but the entire nervous system of a restaurant, a place bustling with creativity, precision, and speed. There are secrets to a professional kitchen's success, elements often hidden behind the 'staff only' door. Let's dive into some of these intriguing secrets from the professional kitchen.";
    homeInformation.classList.add("home-information");
    contentContainer.appendChild(homeInformation);

    return;
}

export default HomeNew;


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