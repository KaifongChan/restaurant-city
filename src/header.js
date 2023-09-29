const Header = () => {

    let container = document.getElementById("container");

    const headerEl = document.createElement("header");
    headerEl.classList.add("header");

    const nameEl = document.createElement("h1");
    nameEl.classList.add("restaurant-name");
    nameEl.textContent = "Nobu";

    headerEl.appendChild(nameEl);
    container.appendChild(headerEl);

    const navEl = document.createElement("div");
    navEl.classList.add('restaurant-tabs');
    // navEl.textContent = "HELLO";

    const homeEl = document.createElement("a");
    homeEl.href = "#home";
    homeEl.textContent = "Home";
    homeEl.classList.add("nav-link");
    

    homeEl.addEventListener('click', function (e) {
        let homeTab = document.querySelector(".home-container");
        if (homeTab.classList.contains("showing")) {
            homeTab.classList.remove("showing");
            homeTab.classList.add("hiding");
            // alert("ALREADY SHOWING");
        }
        else {
            homeTab.classList.add("showing");
            // alert("NOW HAS CLASS OF SHOWING");
            homeTab.classList.remove("hiding");
        }
    })
    // homeEl.addEventListener('click', function (e) {
    //     // alert("HELLO");
    //     // need to add class of showing to HOME TAB and ALL HOME RELATED
    //     // add class of hiding to MENU AND CONTACT TAB simultaneously

    // })

    const menuEl = document.createElement("a");
    menuEl.href = "#menu";
    menuEl.textContent = "Menu";
    menuEl.classList.add("nav-link");

    const contactEl = document.createElement("a");
    contactEl.href = "#contact";
    contactEl.textContent = "Contact";
    contactEl.classList.add("nav-link");

    navEl.appendChild(homeEl);
    navEl.appendChild(menuEl);
    navEl.appendChild(contactEl);




    headerEl.appendChild(navEl);

}

export default Header;