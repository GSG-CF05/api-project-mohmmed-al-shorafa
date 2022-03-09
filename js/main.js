//?=================================================
//! declearition
let app = document.querySelector('#root')
let container = document.createElement('div')
let list = document.querySelector('.list')
let listDrop = document.querySelector('.list-drop')
container.setAttribute('class', 'container')
app.appendChild(container)

//?=================================================
//! start API
fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data.data
  })
  .then((m) => {
    //?==================================================
    //! create the cards
    m.forEach((movie) => {
//?=====================================================
//! declearition
      let card = document.createElement('div')
      let cardImg = document.createElement('img')
      let title = document.createElement('h2')
      let li = document.createElement('li')
      let link = document.createElement('a')
      let b = document.createElement('p')
//?======================================================
//!setAttribute
      card.setAttribute('class', 'card')
      card.setAttribute('id', movie.anime_id)
      link.setAttribute('href', '#' + movie.anime_id)


//?=====================================================
//! appendChild
      container.appendChild(card)
      cardImg.src = movie.anime_img
      card.appendChild(cardImg)
      title.textContent = movie.anime_name.replace('_', ' ')
      title.textContent = title.textContent.replace('_', ' ')
      title.textContent = title.textContent.replace('_', ' ')
      card.appendChild(title)
      //create the list
      b.textContent = movie.anime_name.replace('_', ' ')
      b.textContent = b.textContent.replace('_', ' ')
      b.textContent = b.textContent.replace('_', ' ')
      link.appendChild(b)
      link.textContent = `${movie.anime_id} - ${b.textContent}`
      list.appendChild(li)
      li.appendChild(link)
      listDrop.addEventListener('click', dropDawn)
    })
    function dropDawn() {
      list.classList.toggle('dropitem')
    }
  })
  .catch((error) => console.log(error))

//?===========================================================
//! to top
let totop = document.querySelector('.toTop')
console.log(window.scrollY)

window.onscroll = function () {
  if (window.scrollY >= '800') {
    totop.style.display = 'block'
  } else {
    totop.style.display = 'none'
  }
}
totop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
