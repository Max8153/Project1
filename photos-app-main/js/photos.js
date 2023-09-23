import {photos} from "./main.js";
const picturesContainer = document.querySelector(".pictures");
function createOnePicElem(pictureUrl, commentsAmount, likesAmount) {
    const clone = document.querySelector("#picture").content.cloneNode(true);
    const picture = clone.querySelector(".picture__img");
    const comments = clone.querySelector(".picture__comments");
    const likes = clone.querySelector(".picture__likes");
    picture.src = pictureUrl;
    comments.textContent = commentsAmount;
    likes.textContent = likesAmount;
    return clone;
}
function createAllPicElems(container, picArr) {
    const fragment = document.createDocumentFragment();
    picArr.forEach(elem => {
        fragment.append(createOnePicElem(elem.url, elem.comments.length, elem.likes))
    })
    container.append(fragment);
}
createAllPicElems(picturesContainer, photos);
export {createAllPicElems};
import {openBigPhoto} from "./bigPhoto.js";
const photoElements = document.querySelectorAll(".picture");
photoElements.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    openBigPhoto(index);
  });
});
import {getPhotos} from './api.js';
async function loadPhotos() {
  try {
    const photos = await getPhotos();
    createAllPicElems(picturesContainer, photos);
  } catch (error) {
    console.error('Error loading photos:', error);
  }
}
loadPhotos();