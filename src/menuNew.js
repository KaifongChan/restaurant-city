import Menu from "./menu";

const MenuNew = () => {

    let contentContainer = document.querySelector(".content-container");

    contentContainer.innerHTML = "";

    let pastaContainer = document.createElement("div");
    pastaContainer.classList.add("menu-class");
    let pastaName = document.createElement("h3");
    pastaName.textContent = "Pasta";
    pastaName.classList.add("food-name");
    let pastaDescription = document.createElement("p");
    pastaDescription.textContent = "Spaghetti, thin, straight, cylindrical pasta of Italian origin, the most popular of all pastas eaten today."
    pastaDescription.classList.add("food-description");
    let pastaPrice = document.createElement("p");
    pastaPrice.textContent = "$45.00"
    pastaPrice.classList.add("food-price");
    pastaContainer.appendChild(pastaName);
    pastaContainer.appendChild(pastaDescription);
    pastaContainer.appendChild(pastaPrice);

    let spaghettiContainer = document.createElement("div");
    spaghettiContainer.classList.add("menu-class");
    let spaghettiName = document.createElement("h3");
    spaghettiName.textContent = "Spaghetti";
    spaghettiName.classList.add("food-name");
    let spaghettiDescription = document.createElement("p");
    spaghettiDescription.textContent = "Spaghetti, thin, straight, cylindrical pasta of Italian origin, the most popular of all pastas eaten today.";
    spaghettiDescription.classList.add("food-description");
    let spaghettiPrice = document.createElement("p");
    spaghettiPrice.textContent = "$36.00";
    spaghettiPrice.classList.add("food-price");
    spaghettiContainer.appendChild(spaghettiName);
    spaghettiContainer.appendChild(spaghettiDescription);
    spaghettiContainer.appendChild(spaghettiPrice);

    contentContainer.appendChild(pastaContainer);
    contentContainer.appendChild(spaghettiContainer);

    // menuContainer.appendChild(pastaContainer);
    // menuContainer.appendChild(spaghettiContainer);

    // container.appendChild(menuContainer);

}

export default MenuNew;

// const HomeNew = () => {

//     let contentContainer = document.querySelector(".content-container");

//     // Delete everything from contentContainer first before appending
//     contentContainer.innerHTML = "";

//     // Create Home Information

//     let homeInformation = document.createElement("h2");
//     homeInformation.textContent = "The kitchen is often regarded as the heart of a home. Yet, when it comes to professional kitchens, they are not just the heart but the entire nervous system of a restaurant, a place bustling with creativity, precision, and speed. There are secrets to a professional kitchen's success, elements often hidden behind the 'staff only' door. Let's dive into some of these intriguing secrets from the professional kitchen.";
//     homeInformation.classList.add("home-information");
//     contentContainer.appendChild(homeInformation);

//     return;
// }

// export default HomeNew;