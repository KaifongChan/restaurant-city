const Menu = () => {

    let container = document.getElementById("container");

    // Create Menu Page

    let menuContainer = document.createElement("div");
    // menuContainer.classList.add("hiding");
    menuContainer.classList.add("menu-container");

    let pastaContainer = document.createElement("div");
    let pastaName = document.createElement("h3");
    pastaName.textContent = "Pasta";
    pastaName.classList.add("food-name");
    let pastaPrice = document.createElement("p");
    pastaPrice.textContent = "$45.00"
    pastaPrice.classList.add("food-price");
    pastaContainer.appendChild(pastaName);
    pastaContainer.appendChild(pastaPrice);


    let spaghettiContainer = document.createElement("div");
    let spaghettiName = document.createElement("h3");
    spaghettiName.textContent = "Spaghetti";
    spaghettiName.classList.add("food-name");
    let spaghettiPrice = document.createElement("p");
    spaghettiPrice.textContent = "$36.00";
    spaghettiPrice.classList.add("food-price");
    spaghettiContainer.appendChild(spaghettiName);
    spaghettiContainer.appendChild(spaghettiPrice);

    menuContainer.appendChild(pastaContainer);
    menuContainer.appendChild(spaghettiContainer);

    container.appendChild(menuContainer);

    return;
}

export default Menu;


// const Home = () => {

//     let container = document.getElementById("container");

//     // Create Home Page
//     let homeContainer = document.createElement("div");
//     // homeContainer.classList.add("showing");
//     homeContainer.classList.add("home-container");

//     let homeInformation = document.createElement("h2");
//     homeInformation.textContent = "The kitchen is often regarded as the heart of a home. Yet, when it comes to professional kitchens, they are not just the heart but the entire nervous system of a restaurant, a place bustling with creativity, precision, and speed. There are secrets to a professional kitchen's success, elements often hidden behind the 'staff only' door. Let's dive into some of these intriguing secrets from the professional kitchen.";
//     homeInformation.classList.add("home-information");
//     homeContainer.appendChild(homeInformation);

//     container.appendChild(homeContainer);

//     return;
// }

// export default Home;