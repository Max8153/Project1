import {photos} from "./main.js";
const picturesContainer = document.querySelector(".pictures");
function createOnePicElem(pictureUrl, commentsAmount, likesAmount) {
    const clone = document.querySelector("#picture").content.cloneNode(true);
    const picture = clone.document.querySelector(".picture__img");
    const comments = clone.document.querySelector(".picture__comments");
    const likes = clone.document.querySelector(".picture__likes");
    picture.src = pictureUrl;
    comments.textContent = commentsAmount;
    likes.textContent = likesAmount;
    return clone;
}
function createAllPicElems(container, picArr) {
    const fragment = document.createDocumentFragment();
    picArr.forEach(elem => {
        fragment.append(createOnePicElem(elem.pictureUrl, elem.comments.length, elem.likes))
    })
    container.append(fragment);
}
createAllPicElems(picturesContainer, photos);
export {createAllPicElems};