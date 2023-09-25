import {photos} from "./main.js";
const body = document.body;
const bigPicture = document.querySelector(".big-picture");
const closeButton = bigPicture.querySelector(".big-picture__cancel");
const image = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsCount = bigPicture.querySelector(".comments-count");
const socialComments = bigPicture.querySelector(".social__comments");
const caption = bigPicture.querySelector(".social__caption");
const commentLoaderButton = bigPicture.querySelector(".comments-loader");
let currentPhotoIndex = 0;
let displayedComments = 5;
let totalCommentsForCurrentPhoto = 0;
function displayComments(comments, startIndex, count) {
  const fragment = document.createDocumentFragment();
  for (let i = startIndex; i < startIndex + count; i++) {
    const comment = comments[i];
    if (!comment) {
      break;
    }
    fragment.appendChild(createCommentElement(comment));
  }
  socialComments.innerHTML = "";
  socialComments.appendChild(fragment);
}
function createCommentElement(comment) {
  const listItem = document.createElement("li");
  listItem.classList.add("social__comment");
  const img = document.createElement("img");
  img.classList.add("social__picture");
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;
  const text = document.createElement("p");
  text.classList.add("social__text");
  text.textContent = comment.message;
  listItem.appendChild(img);
  listItem.appendChild(text);
  return listItem;
}
function loadMoreComments() {
  const photo = photos[currentPhotoIndex];
  displayedComments += 5;
  if (displayedComments >= totalCommentsForCurrentPhoto) {
    commentLoaderButton.classList.add("hidden");
    displayedComments = totalCommentsForCurrentPhoto;
  }
  const totalCommentsCount = totalCommentsForCurrentPhoto;
  commentsCount.textContent = `${displayedComments} з ${totalCommentsCount} комментарів`;
  displayComments(photo.comments, 0, displayedComments);
}
function openBigPhoto(photoIndex) {
  currentPhotoIndex = photoIndex;
  const photo = photos[photoIndex];
  image.src = photo.url;
  likesCount.textContent = photo.likes;
  totalCommentsForCurrentPhoto = photo.comments.length;
  displayedComments = Math.min(totalCommentsForCurrentPhoto, 5);
  const totalCommentsCount = totalCommentsForCurrentPhoto;
  commentsCount.textContent = `${displayedComments} з ${totalCommentsCount} комментарів`;
  caption.textContent = photo.description;
  bigPicture.classList.remove("hidden");
  body.classList.add("modal-open");
  closeButton.addEventListener("click", closeBigPhoto);
  if (totalCommentsForCurrentPhoto > displayedComments) {
    commentLoaderButton.classList.remove("hidden");
  } else {
    commentLoaderButton.classList.add("hidden");
  }
  commentLoaderButton.addEventListener("click", loadMoreComments);
  document.addEventListener("keydown", handleEscKeyPress);
  displayComments(photo.comments, 0, displayedComments);
}
function closeBigPhoto() {
  bigPicture.classList.add("hidden");
  body.classList.remove("modal-open");
  closeButton.removeEventListener("click", closeBigPhoto);
  commentLoaderButton.removeEventListener("click", loadMoreComments);
  document.removeEventListener("keydown", handleEscKeyPress);
}
function handleEscKeyPress(evt) {
  if (evt.key === "Escape") {
    closeBigPhoto();
  }
}
export {openBigPhoto};