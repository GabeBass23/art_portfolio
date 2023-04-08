let photoList = document.querySelectorAll(".photo");
for(i = 0; i < photoList.length; ++i){
    let left = new Image(), right = new Image(), top = new Image(), 
    bottom = new Image();
    let TL = new Image();
    let TR = new Image();
    let BL = new Image();
    let BR = new Image(); 
    left.src = "../images/frames/Left.jpg";
    right.src = "../images/frames/Right.jpg";
    top.src = "../images/frames/Top.jpg";
    bottom.src = "../images/frames/Bottom.jpg";
    TL.src = "../images/frames/TL.jpg";
    TR.src = "../images/frames/TR.jpg";
    BL.src = "../images/frames/BL.jpg";
    BR.src = "../images/frames/BR.jpg";
    left.classList.add("left");
    right.classList.add("right");
    top.classList.add("top");
    bottom.classList.add("bottom");
    TL.classList.add("TL");
    TR.classList.add("TR");
    BL.classList.add("BL");
    BR.classList.add("BR");
    photoList[i].appendChild(left);
    photoList[i].appendChild(right);
    photoList[i].appendChild(top);
    photoList[i].appendChild(bottom);
    photoList[i].appendChild(TL);
    photoList[i].appendChild(TR);
    photoList[i].appendChild(BL);
    photoList[i].appendChild(BR);

}

window.addEventListener("resize", function(){
    var width, height;
    for(j = 0; j < photoList.length; ++j){
        width = photoList[j].children[0].width;
        height = photoList[j].children[0].height;

        console.log(height);
        photoList[j].children[1].style.height = height;
        photoList[j].children[2].style.height = height;
        photoList[j].children[3].style.width = width;
        photoList[j].children[4].style.width = width;
    }

})