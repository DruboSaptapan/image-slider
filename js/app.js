const images = [
    'images/pexels-pixabay-01.jpg',
    'images/pexels-pixabay-02.jpg',
    'images/pexels-pixabay-03.jpg',
    'images/pexels-pixabay-04.jpg',
    'images/pexels-pixabay-05.jpg',
    'images/pexels-pixabay-06.jpg',
    'images/pexels-pixabay-07.jpg',
    'images/pexels-pixabay-08.jpg',
    'images/pexels-pixabay-09.jpg',
    'images/pexels-pixabay-10.jpg',
    'images/pexels-pixabay-11.jpg',
    'images/pexels-pixabay-12.jpg',
]

let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() =>{
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 3500)