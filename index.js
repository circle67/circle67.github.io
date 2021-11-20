function chance(percent) {
    return Math.random < (percent / 100);
}

window.onload = function (e) {
    let titleImageCont = document.querySelector('#titleImageContainer');

    let titleImage = document.createElement("img");
    titleImage.className = "img-fluid";

    const d = new Date();

    if (d.getMonth() === 11 && d.getDate() === 25) {
        console.log("Merry Christmas!");
        titleImage.src = "images/title_img_tree.png";
        titleImage.alt = "Merry Christmas!";
    } else if (d.getMonth() === 1 && d.getDate() === 14) {
        console.log("Happy Valentine's Day!");
        titleImage.src = "images/title_img_heart.png";
        titleImage.alt = "Happy Valentine's Day!";
    } else {
        if (chance(0.25)) {
            console.log("🗿 yuh!");
            titleImage.src = "images/title_img_silly.png";
            titleImage.alt = "🗿 yuh!"
        } else {
            titleImage.src = "images/title_img_normal.png";
            titleImage.alt = "Circle67io Title Image";
        }
    }

    titleImageCont.appendChild(titleImage);
}