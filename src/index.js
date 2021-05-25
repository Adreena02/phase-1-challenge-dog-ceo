console.log('%c HI', 'color: firebrick')
// document.addEventListener("DOMContentLoaded", function(e){
//     //putImagesOnDom()
//     e.preventDefault();


// });


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImage = document.querySelector("div#dog-image-container")
const ul = document.querySelector("ul")

fetch(imgUrl)
    .then(resp => resp.json())
    .then(respObj => putImagesOnDom(respObj))
  //  .then(imgUrl.forEach(dogImage))
  

function putImagesOnDom(respObj){
    respObj.message.forEach((dogImageUrl) => {
        // create HTML image 
        // append img to container
        let newImage = document.createElement('img')
        newImage.src = dogImageUrl
        dogImage.append(newImage)
        // console.log(dogImageUrl)
    })
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
fetch(breedUrl)
.then(resp => resp.json())
.then((jsonresponse) => {
    
    for (const prop in jsonresponse.message){
        let li = document.createElement('li')
        li.textContent = prop;
        li.style.cursor = 'pointer'
        ul.append(li)
        li.addEventListener('click', changeColor)   
    }
})

function changeColor(e){
    e.target.style.color = 'teal';
}










