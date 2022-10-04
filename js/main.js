let elList = document.querySelector('.js-list')
let elSelect = document.querySelector('.js-select')

function filter(fox){
   var date = new Date (fox)
   return `${date.getFullYear()} - ${date.getMonth() + 1} - ${ date.getDay()}`
}

films.forEach(function(horror){
   newItem = document.createElement("li")
   newTitle = document.createElement("h3")
   newImg = document.createElement("img")
   newText = document.createElement("p")
   newSpan = document.createElement("span")
   newStr = document.createElement("strong")
   
   newTitle.textContent = horror.title;
   newImg.textContent = horror.poster;
   newImg.src = horror.poster
   newText.textContent = horror.overview;
   newSpan.textContent = filter(horror.release_date);
   newStr.textContent = horror.genres;
   
   elList.appendChild(newItem)
   newItem.appendChild(newTitle)
   newItem.appendChild(newImg)
   newItem.appendChild(newText)
   newItem.appendChild(newSpan)
   newItem.appendChild(newStr)

})


// elSelect.addEventListener('change', function(evt){
//    evt.preventDefault()
//    var elSelVal = elSelect.value
//    let filteredArr = [];

//    elList.innerHTML = '';
//    films.forEach((el) =>{
//       if(el.genres.includes(elSelect.value)){
//         filteredArr.push(el)
//       }
//    });

//    filteredArr.forEach(function(horror){
//       newItem = document.createElement("li")
//       newTitle = document.createElement("h3")
//       newImg = document.createElement("img")
//       newText = document.createElement("p")
//       newSpan = document.createElement("span")
//       newStr = document.createElement("strong")
      
//       newTitle.textContent = horror.title;
//       newImg.textContent = horror.poster;
//       newImg.src = horror.poster
//       newText.textContent = horror.overview;
//       newSpan.textContent = filter(horror.release_date);
//       newStr.textContent = horror.genres;
      
//       elList.appendChild(newItem)
//       newItem.appendChild(newTitle)
//       newItem.appendChild(newImg)
//       newItem.appendChild(newText)
//       newItem.appendChild(newSpan)
//       newItem.appendChild(newStr)
//    })
// })