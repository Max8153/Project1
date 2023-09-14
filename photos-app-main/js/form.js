const uploadForm = document.querySelector(".img-upload__overlay");
const uploadFileInput = document.querySelector("#upload-file");
const commentInput = document.querySelector(".text__description");
const hashtagsInput = document.querySelector(".text__hashtags");
const hashtagsErrorMessage = document.querySelector(".hashtags-error-message");
const submitButton = document.querySelector(".img-upload__submit");
const closeButton = document.querySelector(".img-upload__cancel");
function validateHashtags(hashtags) {
    const hashtagPattern = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;
    for (const hashtag of hashtags) {
        if (!hashtagPattern.test(hashtag)) {
            return false;
        }
    }
    return true;
}
function openForm() {
    function handleFileInputChange() {
        uploadForm.classList.remove("hidden");
        document.body.classList.add("modal-open");
    }
    uploadFileInput.addEventListener("change", handleFileInputChange);
    submitButton.addEventListener("click", () => {
        const hashtags = hashtagsInput.value.split(" ");
        const errorMessage = "Хеш-теги должны начинаться с '#' и содержать только буквы и цифры, максимальная длина - 20 символов";
        if (!validateHashtags(hashtags)) {
            hashtagsInput.setCustomValidity(errorMessage);
            hashtagsErrorMessage.textContent = errorMessage;
        } else {
            hashtagsInput.setCustomValidity("");
            hashtagsErrorMessage.textContent = "";
            closeForm();
        }
    });
    closeButton.addEventListener("click", () => {
        closeForm();
    });
}
function closeForm(evt) {
    uploadForm.classList.add("hidden");
    document.body.classList.remove("modal-open");
    evt.target.value = "";
}
openForm();