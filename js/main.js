//---------------------------------------js da chaqirib oldik-----------------------------------------------------
let elList = document.querySelector('.js-list')
let elListRes = document.querySelector('.js-list3')
let elSelect = document.querySelector('.js-select')
let elSelect1 = document.querySelector('.js-select1')
let elModal = document.querySelector('.js-modal')


const bookMarkList = []

//---------------------------------------sanasini togirladik-------------------------------
function filter(fox){
   var date = new Date (fox)
   return `${date.getFullYear()} - ${date.getMonth() + 1} - ${ date.getDay()}`
}
//---------------------------------filmsni aylanib domga li creat qilib oldik--------------------------------------
const itemFragment = document.createDocumentFragment()

const resultFilms = (array,node) => {
   array.forEach(function(horror){
      newItem = document.createElement("li")
      newTitle = document.createElement("h4")
      newImg = document.createElement("img")
      newText = document.createElement("p")
      newFilmsBtn = document.createElement('button')
      newModalBtn = document.createElement('button')
      newSpan = document.createElement("span")
      newStr = document.createElement("strong")
      
      newTitle.textContent = horror.title;
      newImg.textContent = horror.poster;
      newImg.src = horror.poster
      newText.textContent = horror.overview;
      newFilmsBtn.textContent = 'Film mark';
      newModalBtn.textContent = 'Modal';
      newSpan.textContent = filter(horror.release_date);
      newStr.textContent = horror.genres;

      newFilmsBtn.setAttribute('class', 'btn btn-primary btn-films')
      newModalBtn.setAttribute('class', 'btn btn-success btn-modal')

      newFilmsBtn.dataset.filmId = horror.id

      
      newItem.appendChild(newTitle)
      newItem.appendChild(newImg)
      newItem.appendChild(newText)
      newItem.appendChild(newFilmsBtn)
      newItem.appendChild(newModalBtn)
      newItem.appendChild(newSpan)
      newItem.appendChild(newStr)
      itemFragment.appendChild(newItem)
   })
   node.appendChild(itemFragment)
}
resultFilms(films,elList);

const renderFilms = (array,node) => {
   node.innerHTML = ''
   array.forEach((el) => {
      const newItem = document.createElement('li')
      const newButton = document.createElement('button')

      newItem.textContent = el.title;
      newButton.textContent = 'DEL'
      newButton.setAttribute('class', 'btn btn-danger bookMarkDel') 
      newButton.dataset.filmId = el.id

      newItem.appendChild(newButton)
      node.appendChild(newItem)
   })
}

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

   resultFilms(filteredArr,elList);
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

   resultFilms(sortArray,elList);
})


elList.addEventListener('click', function(evt) {
   if(evt.target.matches('.btn-films')){
      const clickedId = (evt.target.dataset.filmId);
      const findedItem = films.find((el) => el.id == clickedId)

      if(!bookMarkList.includes(findedItem)){
         bookMarkList.push(findedItem)
         renderFilms(bookMarkList,elListRes)
      }
   }

   // if(evt.target.matches('.btn-modal')){
   //    elModal.classList.add('modal-open')
   // }
   
})

elListRes.addEventListener('click', function(evt) {
   if(evt.target.matches('.bookMarkDel')){
      const deleteItemId = evt.target.dataset.filmId;
      const deleteItem = bookMarkList.findIndex((el) => el.id == deleteItemId)
      
      bookMarkList.splice(deleteItem, 1)

      renderFilms(bookMarkList,elListRes)
   }
})

//--------------------------------------------dark and light mode btn----------------------------------------------
let modeBtn = document.querySelector('.js-mod')
var theme = false;

modeBtn.addEventListener('click', function () {
   theme = !theme;
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