const images = [
  {
    src: "https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D",
    name: "tiger",
  },
  {
    src: "https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "lion",
  },
];

let currentIndex = 0;
let totalImages = images.length;

const imgTag = document.getElementById("image");
const captionTag = document.querySelector(".description");
const loader = document.querySelector(".loader");
const previewArea = document.querySelector(".previewArea");

// show first image initially
imgTag.src = images[currentIndex].src;
captionTag.textContent = images[currentIndex].name;

function previousImageCard() {
  loader.style.display = "block"; // loader visible
  setTimeout(() => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // previous index
    imgTag.src = images[currentIndex].src;
    captionTag.textContent = images[currentIndex].name;
    loader.style.display = "none"; // loader hide
  }, 1000);
}

function nextImageCard() {
  loader.style.display = "block"; // loader visible
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % totalImages; // next index
    imgTag.src = images[currentIndex].src;
    captionTag.textContent = images[currentIndex].name;
    loader.style.display = "none"; // loader hide
  }, 1000);
}

function addNewImage(event) {
  event.preventDefault();

  const imageUrl = document.getElementById("imgAddressInput").value.trim();
  const imageName = document.getElementById("imgNameInput").value.trim();

  if (!imageUrl || !imageName) return;

  const newObj = { src: imageUrl, name: imageName };
  images.push(newObj);
  totalImages = images.length;

  // create imageCard preview
  const fig = document.createElement("figure");
  fig.classList.add("miniImageCard");
  fig.innerHTML = `<img id="image" src="${newObj.src}" alt="${newObj.name}">
                     <figcaption class="description">${newObj.name}</figcaption>`;
  previewArea.appendChild(fig);

  setTimeout(() => {
    fig.remove();
  }, 1000);

  // clear input fields
  document.getElementById("imgAddressInput").value = "";
  document.getElementById("imgNameInput").value = "";
}

function previewLastAddedImage() {
  if (images.length === 0) return;

  const lastImage = images[images.length - 1];

  const fig = document.createElement("figure");
  fig.classList.add("miniImageCard");
  fig.innerHTML = `<img id="image" src="${lastImage.src}" alt="${lastImage.name}">
                     <figcaption class="description">${lastImage.name}</figcaption>`;
  previewArea.appendChild(fig);

  setTimeout(() => {
    fig.remove();
  }, 1000);
}
