let header_button = document.querySelector(".mobile-icon");
header_button.addEventListener("click", function () {
    let header = document.querySelector("header");
    if (header.classList.contains("open")) {
        close_popup();
    } else {
        header.classList.add("open");
        header_button.querySelector("img").src = "img/cross.png";
    }
});

function close_popup() {
    document.querySelector("header").classList.remove("open");
    header_button.querySelector("img").src = "img/menu-icon.png";
}

document.querySelector("#grid").addEventListener("click", close_popup, false);

document.querySelector("header .popup").addEventListener("click", close_popup, false);

document.querySelector("#show_add_photo").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.add("open");
});

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.remove("open")
})

document.querySelector("#add_photo").addEventListener("click", function () {
    close_popup();
    let src_inp = document.querySelector("#new_photo_src");
    let text_inp = document.querySelector("#new_photo_text");
    let src = src_inp.value;
    let text = text_inp.value;

    if (!src) {
        document.querySelector("#new_photo_src").classList.add("error");
        return;
    }

    let new_photo_div = document.createElement("div");
    new_photo_div.classList.add("photo");
    let new_img = document.createElement("img");
    new_img.src = src;
    new_photo_div.append(new_img);
    let new_p = document.createElement("p");
    new_p.innerText = text? text: "Дефолт";
    new_photo_div.append(new_p);
    document.querySelector("#grid").prepend(new_photo_div);
    document.querySelector("#add_new_photo").classList.remove("open");
    src_inp.value = "";
    text_inp.value = "";
    new_photo_div.addEventListener("click", open_photo, false);
})

function open_photo() {
    let src = this.querySelector("img").src, 
        popup_photo = document.querySelector("#popup_photo");
    popup_photo.querySelector("img").src = src;
    popup_photo.classList.add("open");
}

let photos = document.querySelectorAll(".photo");
for (let photo of photos) {
    photo.addEventListener("click", open_photo, false);
}

document.querySelector("#popup_photo").addEventListener("click", function () {
    this.classList.remove("open");
})