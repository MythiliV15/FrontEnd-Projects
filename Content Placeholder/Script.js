const title = document.querySelector(".titleCard");
const description = document.querySelector(".descriptionCard");
const image = document.querySelector(".imgCard");

setTimeout(() => {
    // 1. Remove the loading skeleton look
    title.classList.remove("loading");
    description.classList.remove("loading");
    image.classList.remove("loading");

    // 2. Set the actual data
    title.textContent = "Apple iPhone 15 (Black, 128 GB)";
    description.textContent = "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly.";
    image.innerHTML = `<img src="assets/iphone15.jpg" alt="Apple iPhone 15" />`;
}, 3000);