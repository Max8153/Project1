import {photos} from "./main.js";
const body = document.body;
const bigPicture = document.querySelector(".big-picture");
const closeButton = bigPicture.querySelector(".big-picture__cancel");
const image = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsCount = bigPicture.querySelector(".comments-count");
const socialComments = bigPicture.querySelector(".social__comments");
const caption = bigPicture.querySelector(".social__caption");
function openBigPhoto(photoIndex) {
  const photo = photos[photoIndex];
  image.src = photo.url;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  caption.textContent = photo.description;
  bigPicture.classList.remove("hidden");
  body.classList.add("modal-open");
  closeButton.addEventListener("click", closeBigPhoto);
  document.addEventListener("keydown", handleEscKeyPress);
}
function closeBigPhoto() {
  bigPicture.classList.add("hidden");
  body.classList.remove("modal-open");
  closeButton.removeEventListener("click", closeBigPhoto);
  document.removeEventListener("keydown", handleEscKeyPress);
}
function handleEscKeyPress(evt) {
  if (evt.key === "Escape") {
    closeBigPhoto();
  }
}
export {openBigPhoto};