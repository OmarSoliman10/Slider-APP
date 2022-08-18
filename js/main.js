
var imgList = Array.from(document.querySelectorAll(".item img"));
var lightbox = document.querySelector(".lightbox");
var lightboxitem = document.querySelector(".lightboxitem");


var currentSlidIndex = 0;  
for(i=0; i<imgList.length;i++){
    imgList[i].addEventListener("click" , function (e) { 

        var imgSrc = e.target.getAttribute("src"); 
        var currentSlidIndex = imgList.indexOf(e.target);
        lightboxitem.style.backgroundImage = `url(${imgSrc})`;
        lightbox.classList.remove("d-none");
    })
}

var nextBtn = document.getElementById("next");
var prefBtn = document.getElementById("pref");
var closeBtn = document.getElementById("close");

function nextSlide() {
    currentSlidIndex++;
    if(currentSlidIndex == imgList.length)
    {
        currentSlidIndex = 0;
    }

    imgSrc =imgList[currentSlidIndex].getAttribute("src"); 
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
};


function prefSlide() {
    currentSlidIndex--;
    if(currentSlidIndex < 0 )
    {
        currentSlidIndex = imgList.length -1;
    }
    imgSrc =imgList[currentSlidIndex].getAttribute("src");
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
};
nextBtn.addEventListener("click" , nextSlide);
prefBtn.addEventListener("click" , prefSlide);


closeBtn.addEventListener("click" , function () {
    lightbox.classList.add("d-none");
})