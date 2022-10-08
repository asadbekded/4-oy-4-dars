//---------------------------------------js da chaqirib oldik-----------------------------------------------------
let elList = document.querySelector('.js-list')
let elSelect = document.querySelector('.js-select')
let elSelect1 = document.querySelector('.js-select1')

//---------------------------------------sanasini togirladik-------------------------------
function filter(fox){
   var date = new Date (fox)
   return `${date.getFullYear()} - ${date.getMonth() + 1} - ${ date.getDay()}`
}

//---------------------------------filmsni aylanib domga li creat qilib oldik--------------------------------------
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

//-----------------------------------filmsni generesini aylanib optionga qoshib chiqdik---------------------------------------------

const filterList = new Set()

films.forEach((item) =>{
   item.genres.forEach((gener) => {
      filterList.add(gener);
   })
})

filterList.forEach((item) => {
   var newOption = document.createElement('option')

   newOption.value = item;
   newOption.textContent = item;

   elSelect.appendChild(newOption)
})



//----------------------------------------------selectni ishlatilishi------------------------------------------------

elSelect.addEventListener('change', function(evt){
   evt.preventDefault()
   var elSelVal = elSelect.value
   var filteredArr = [];

   elList.innerHTML = '';
   films.forEach((el) =>{
      if(el.genres.includes(elSelVal)){
        filteredArr.push(el)
      }
   });

   filteredArr.forEach(function(horror){
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
})


elSelect1.addEventListener('change', function(evt){
   evt.preventDefault()

   let sortArray = [];
	elList.innerHTML = '';


   if(elSelect1.value == 'Sort1'){
      var sortA1 = films.sort((a,b) => {
         let diazA = a.title.toUpperCase().charCodeAt(0)
         let diazB = b.title.toUpperCase().charCodeAt(0)

         if(diazA > diazB){
            return -1
         }
         else if (diazA < diazB){
            return 1
         }else{
            return 0
         }
      })

      sortArray = sortA1;
   }

   if(elSelect1.value == 'Sort2'){
      var sortB1 = films.sort((a,b) => {
         let diazA = a.title.toUpperCase().charCodeAt(0)
         let diazB = b.title.toUpperCase().charCodeAt(0)

         if(diazA < diazB){
            return -1
         }
         else if (diazA > diazB){
            return 1
         }else{
            return 0
         }
      })

      sortArray = sortB1;
   }

   sortArray.forEach(function(horror){
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
})

let modeBtn = document.querySelector('.js-mod')
var theme = false;

modeBtn.addEventListener('click', function () {
   console.log((theme = !theme));
   window.localStorage.setItem('theme', theme ? 'dark' : 'light')
   changeThem()
})

function changeThem () {
   if(window.localStorage.getItem('theme') == 'dark'){
      document.body.style.backgroundColor = '#222'
      modeBtn.setAttribute('class', 'btn btn-danger')
      modeBtn.textContent = 'Red';
   }else{
      document.body.style.backgroundColor = '#b0250c'
      modeBtn.textContent = 'Dark';
      modeBtn.setAttribute('class', 'btn btn-dark')
   }
}
changeThem()
