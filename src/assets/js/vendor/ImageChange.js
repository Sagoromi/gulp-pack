// Gallery active
function changeImage(imageName, clickedTitle) {
    //get img and set source value
    let img = document.querySelector('#galleryImage');
    img.setAttribute('src', imageName);
    //remove all active class at first
    let allTitles = document.querySelectorAll('.gallery-title');
    allTitles.forEach(title => {
        title.classList.remove('active')
    })
    //add active class 
    clickedTitle.classList.add('active')
}