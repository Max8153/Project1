const photos = [];
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomComment() {
    const comments = [
    "Все відмінно!",
    "Загалом все непогано. Але не всі.",
    "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
    "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
    "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
    "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?"
    ]
    const randomAvatar = `img/avatar-${getRandom(1, 6)}.svg`;
    const randomComment = Math.floor(Math.random() * comments.length);
    const randomName = ["Алексей", "Андрей", "Владимир", "Владислав", "Олег", "Максим", "Катя", "Маша", "Аня", "Виолетта"][getRandom(0, 9)];
    return {
        id: getRandom(1, 6),
        avatar: randomAvatar,
        message: comments[randomComment],
        name: randomName
    }
}
for (let i = 1; i <= 25; i++) {
    const photo = {
        id: i,
        url: `photos/${i}.jpg`,
        description: "some random text",
        likes: getRandom(15, 200),
        comments: []
    }
    const numberOfComments = getRandom(1, 6);
    for (let j = 0; j < numberOfComments; j++) {
        photo.comments.push(getRandomComment());
    }
    photos.push(photo);
}
export {photos};