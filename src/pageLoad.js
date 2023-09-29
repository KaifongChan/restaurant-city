const pageLoad = () => {
    let container = document.getElementById('container');

    let headline = document.createElement('h1');
    headline.textContent = 'Nobu';
    container.appendChild(headline);
    console.log("YAHOO");

    // let breaking = document.createElement('br');
    // container.appendChild(breaking);

    let image = document.createElement("img");
    image.src = "https://p6.itc.cn/q_70/images01/20220401/c74e89e9aa634d049d9518d23ed11b81.jpeg";
    container.appendChild(image);
    console.log("YAHOO 2");

    let information = document.createElement("p");
    information.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    container.appendChild(information);
    console.log("YAHOO 3");

    return;
}

export default pageLoad;