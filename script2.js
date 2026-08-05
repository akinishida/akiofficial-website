// ===========================
// 西田亜季 Official Website
// script2.js
// ===========================


function showPage(pageId){

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page){
        page.style.display = "none";
    });

    const target = document.getElementById(pageId);

    if(target){

        target.style.display = "block";

        // 表示したページまでスクロール
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// 写真クリックで拡大表示

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

img.addEventListener("click", function(){

document.getElementById("lightbox").style.display = "flex";
document.getElementById("lightbox-img").src = this.src;

});

});

function closeLightbox(){

document.getElementById("lightbox").style.display = "none";

}

function showProfile(id){

    const pages = document.querySelectorAll(".profile-page");

    pages.forEach(function(page){
        page.style.display = "none";
    });

    const target = document.getElementById(id);

    if(target){
        target.style.display = "block";
    }
}

