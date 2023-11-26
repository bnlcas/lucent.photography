//imgFiles = ['bridge1.JPG', 'IMG_5353.JPG', 'IMG_7195.JPG', 'IMG_7180.JPG', 'IMG_6516.JPG', 'IMG_5196.JPG', 'IMG_7144.JPG', 'IMG_7019.JPG', 'manhattan_skyline2.JPG', 'IMG_5085.JPG', 'IMG_5509.JPG', 'IMG_4993.JPG', 'IMG_6438.JPG', 'IMG_5125.JPG', 'IMG_6414.jpg', 'IMG_4968.JPG', 'IMG_5083.jpg', 'IMG_5097.JPG', 'IMG_4996.JPG', 'IMG_4941.JPG', 'IMG_6359.JPG', 'IMG_4994.JPG', 'IMG_6167.JPG', 'IMG_5268.JPG', 'IMG_5081.JPG', 'IMG_5269.jpg', 'IMG_7091.JPG', 'IMG_6157.JPG', 'IMG_5099.JPG', 'IMG_6584.JPG', 'IMG_5066.JPG', 'IMG_5271.JPG', 'IMG_5517.JPG', 'IMG_4972.JPG', 'IMG_6169.JPG', 'sea.JPG', 'IMG_5110.JPG', 'IMG_5511.JPG', 'shell2.JPG', 'IMG_7258.JPG', 'fruit.JPG', 'IMG_5006.JPG', 'IMG_5013.JPG', 'IMG_4861.JPG', 'IMG_6332.JPG'];
imgFiles = ['bridge1.jpg', 'IMG_5353.jpg', 'IMG_7195.jpg', 'IMG_7180.jpg', 'IMG_6516.jpg', 'IMG_5196.jpg', 'IMG_7144.jpg', 'IMG_7019.jpg', 'manhattan_skyline2.jpg', 'IMG_5085.jpg', 'IMG_5509.jpg', 'IMG_4993.jpg', 'IMG_6438.jpg', 'IMG_5125.jpg', 'IMG_6414.jpg', 'IMG_4968.jpg', 'IMG_5083.jpg', 'IMG_4996.jpg', 'IMG_4941.jpg', 'IMG_6359.jpg', 'IMG_4994.jpg', 'IMG_6167.jpg', 'IMG_5268.jpg', 'IMG_5081.jpg', 'IMG_5269.jpg', 'IMG_7091.jpg', 'IMG_6157.jpg', 'IMG_6584.jpg', 'IMG_5066.jpg', 'IMG_5271.jpg', 'IMG_4972.jpg', 'IMG_6169.jpg', 'sea.jpg', 'IMG_5110.jpg', 'shell2.jpg', 'IMG_7258.jpg', 'fruit.jpg', 'IMG_5006.jpg', 'IMG_5013.jpg', 'IMG_4861.jpg', 'IMG_6332.jpg']

function ShuffleFilenames(){
    for (var i = imgFiles.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgFiles[i];
        imgFiles[i] = imgFiles[j];
        imgFiles[j] = temp;
    }
}

function LoadRandomImage()
{
    var randomInd = Math.floor(Math.random() * imgFiles.length);
    var filename = imgFiles[randomInd];
}

function ToggleOverlay(){
    let showOverlay = this.hasAttribute('src');
    
    let overlay = document.getElementById("overlay");
    if(showOverlay){
        let src = this.getAttribute('src');
        overlay.style.zIndex ="10";
        overlay.style.backgroundColor = " RGBA(0,0,0,.8)";
        overlay.style.backgroundImage = "url(\"" + src + "\")";
        overlay.style.pointerEvents = "auto";
    }
    else {
        overlay.style.zIndex ="-1";
        overlay.style.backgroundColor = " RGBA(0,0,0,0)";
        overlay.style.backgroundImage = "none";
        overlay.style.pointerEvents = "none";
    }
}

function InitializeImageElements()
{
    ShuffleFilenames();
    //var mainDiv = document.getElementById("main");
    var mainRow = document.getElementById("row");
    let nCols = 4;
    let cols = [];
    for(var i = 0; i < nCols; i++){
        let col = document.createElement("div");
        col.setAttribute("class", "column");
        mainRow.appendChild(col);
        cols.push(col);
    }

    let nRows =  Math.ceil(imgFiles.length / 4);
    console.log(nRows);
    var currentCol;
    for(var i = 0; i < imgFiles.length; i++)
    {
        var elem = document.createElement("img");
        elem.setAttribute("src", "Images/" + imgFiles[i]);
        elem.setAttribute("loading", "lazy");
        elem.addEventListener('click', ToggleOverlay);
        cols[i % nCols].appendChild(elem);
    }
    let overlay = document.getElementById("overlay");
    overlay.addEventListener('click', ToggleOverlay);
}

InitializeImageElements();
