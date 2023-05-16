//Array for al Images//
let images = ['img/img2.jpg ', 'img/img3.jpg', 'img/img5.jpg',
    'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg',
    'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg', 'img/img15.jpg',
    'img/img16.jpg', 'img/img17.jpg', 'img/img18.jpg', 'img/img19.jpg', 'img/img20.jpg',
    'img/img21.jpg', 'img/img22.jpg', 'img/img23.jpg', 'img/img24.jpg', 'img/img25.jpg',
    'img/img26.jpg', 'img/img27.jpg', 'img/img28.jpg', 'img/img29.jpg'];

    
//Array for favorite Images//
let slideImages = [];


//load all images//
function loadImg() {
    let imageTop = document.getElementById('imagetop');
    let imageBottom = document.getElementById('imagebottom');

    for (i = 0; i < images.length; i++) {
        if (i <= images.length / 2) {
            imageTop.innerHTML += `
                                        <div id="switchimg${i}" class="hover imageicons">
                                            <img id="image${i}" class="image" src="${images[i]}" onclick="openImage(${i})">
                                            <img id="favorite${i}" class="favoriteicon" src="img/star.png" onclick="favoriteImage(${i}), slideImage(${i})">
                                            <img id="like${i}" class="favoriteicon favorite d-none" src="img/star.png" onclick="removeFavoriteImage(${i}), deleteSlideShowimage(${i})">
                                        </div>
                                       `
        } else {
            imageBottom.innerHTML += `
                                        <div id="switchimg${i}" class="hover imageicons ">
                                            <img  class="image" src="${images[i]}" onclick="openImage(${i})">
                                            <img id="favorite${i}" class="favoriteicon" src="img/star.png" onclick="favoriteImage(${i}), slideImage(${i})">
                                            <img id="like${i}" class="favoriteicon favorite d-none" src="img/star.png" onclick="removeFavoriteImage(${i}), deleteSlideShowimage(${i})">
                                        </div>`
        }
    };

    renderSlideShow();
};



//open a Image//
function openImage(i) {
    let openimage = document.getElementById('openimage');

    document.getElementById('openimage').classList.remove('d-none');
    document.getElementById('body').classList.add('nonescroll');


    openimage.innerHTML =   `
                            <div class="changeimg">
                                <img src="${images[i]}" alt="" onclick="closeImage()">
                                <img class="arrow arrowleft" src="img/arrowreturn.png" alt="" onclick="previousImg(${i-1})">
                                <img class="arrow arrowright" src="img/arrownext.png" alt="" onclick="nextImg(${i+1})">
                            </div>
                            <div class="openimage"  onclick="closeImage()"></div>
                            `;

};


function nextImg(i){
    let openimage = document.getElementById('openimage');

    openimage.classList.remove('d-none');

    if (i < images.length){
        openImage(i);
    } else {
        openImage(0);
};
};


function previousImg(i){
    let openimage = document.getElementById('openimage');

    openimage.classList.remove('d-none');

    if (i < 0){
        openImage(images.length-1);
    } else {
        openImage(i);
};
};


function closeImage() {
    document.getElementById('openimage').classList.add('d-none');
    document.getElementById('body').classList.remove('nonescroll');
};


//show a random and favorite Images//
function renderSlideShow() {
    let slideShow = document.getElementById('slideshow');

    slideShow.innerHTML = `
                            <div class="slideimage">
                                <div class="slideimage-firstchild"  onclick="slideShowAllimages()">
                                    <h2>Klicken um die Diashow mit allen Bildern zu starten</h2>
                                </div>
                                <div class="slideimage-secondchild"  onclick="slideShowFavorite()">
                                    <h2>Klicken um die Diashow mit favorisierten Bildern zu starten</h2>
                                </div>
                            </div>`;
};


function slideShowAllimages() {
    let slideImg = document.getElementById('slideshow');
    let randomNumber = Math.floor(Math.random() * images.length);

    slideImg.innerHTML = `<img src="${images[randomNumber]}" onclick="stopSlideShow()">`;
    setTimeout(slideShowAllimages, 2000);
};


function slideShowFavorite() {
    let slideImg = document.getElementById('slideshow');
    let randomNumber = Math.floor(Math.random() * slideImages.length);

    if(slideImages.length < 1){
        renderSlideShow(); 
    } else {
        slideImg.innerHTML = `<img src="${slideImages[randomNumber]}" onclick="stopSlideShow()">`;
        setTimeout(slideShowFavorite, 2000);
    };
};


function stopSlideShow(){
    slideImages.splice('0', 99)
    location.reload(loadImg());
};


function slideImage(i) {
    slideImages.push(images[i]);   
};


function deleteSlideShowimage(i) {
    slideshow = document.getElementById('slideshow')
    slideImages.splice(slideImages.indexOf(`${images[i]}`),1);
  
    slideShow();
};


function favoriteImage(i) {
    let fav = document.getElementById(`favorite${i}`);
    let like = document.getElementById(`like${i}`);

    fav.classList.add('d-none');
    like.classList.remove('d-none');
};


function removeFavoriteImage(i) {
    let fav = document.getElementById(`favorite${i}`);
    let like = document.getElementById(`like${i}`);

    fav.classList.remove('d-none');
    like.classList.add('d-none');
};