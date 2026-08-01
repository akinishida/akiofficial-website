// ===========================
// 西田亜季 Official Website
// script2.js
// ===========================

function showPage(pageId){

    // すべてのページを取得
    const pages = document.querySelectorAll(".page");

    // いったん全部非表示
    pages.forEach(function(page){
        page.style.display = "none";
    });

    // 選択したページだけ表示
    const target = document.getElementById(pageId);

    if(target){

        target.style.display = "block";

        // ページの先頭へスクロール
        window.scrollTo({
            top:0,
            behavior:"smooth"
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